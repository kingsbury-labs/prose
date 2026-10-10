#!/usr/bin/env node
// Surface observations on English prose. It does not judge whether text is
// human, true or useful, and a quiet report clears nothing.
// Usage: node check.cjs draft.md [--register blog|technical|academic|marketing|email|fiction]
//                               [--compare sample.md] [--json]

const fs = require('fs');

const ABBREV = ['Dr', 'Mr', 'Mrs', 'Ms', 'Prof', 'St', 'vs', 'etc', 'e.g', 'i.e', 'cf', 'approx', 'No', 'Fig', 'pp', 'Inc', 'Ltd', 'Jr', 'Sr', 'a.m', 'p.m', 'U.S', 'U.K'];
const ING_SKIP = new Set(['including', 'according', 'following', 'regarding', 'pending', 'during',
  'concerning', 'notwithstanding', 'excluding', 'considering', 'assuming', 'nothing', 'something',
  'anything', 'everything', 'thing', 'things', 'morning', 'evening', 'marketing', 'pricing',
  'building', 'setting', 'settings', 'meeting', 'feeling', 'wedding', 'ceiling', 'king', 'ring',
  'string', 'spring', 'wing', 'bring', 'sing', 'thing', 'training', 'funding', 'housing',
  'clothing', 'shipping', 'billing', 'hosting', 'parking', 'lighting', 'heating', 'banking',
  'learning', 'testing', 'engineering', 'accounting', 'consulting', 'planning', 'branding']);
const PARTICIPLE_OPENERS = /(^|[.!?]\s+)(Having|Being|Using|Leveraging|Building|Creating|Ensuring|Allowing|Enabling|Providing|Offering|Featuring|Highlighting|Showcasing|Combining|Drawing|Taking|Making|Bringing|Recognizing|Understanding|Looking|Working|Starting|Focusing)\s+\w+/g;
const VAGUE_TAIL = /,\s+(highlighting|underscoring|showcasing|emphasizing|reflecting|signaling|signalling|ensuring|demonstrating|illustrating|cementing|solidifying|fostering|paving|marking|making it|allowing for|contributing to)\b/gi;
const NOUN_SUFFIX = /^[a-z]{3,}(tion|sion|ment|ness|ity|ance|ence)$/;
const NOUN_SKIP = new Set(['moment', 'comment', 'mention', 'question', 'nation', 'station', 'city',
  'business', 'witness', 'chance', 'science', 'audience', 'experience', 'evidence', 'sentence',
  'difference', 'conference', 'fence', 'since', 'once', 'dance', 'balance', 'entity', 'quality',
  'quantity', 'environment', 'government', 'department', 'equipment', 'apartment', 'payment',
  'university', 'insurance', 'section', 'option', 'version', 'session', 'function', 'position',
  'condition', 'location', 'application', 'information', 'education', 'community', 'security',
  'activity', 'opportunity', 'majority', 'minority', 'authority', 'facility', 'utility',
  'agreement', 'document', 'element', 'statement', 'treatment', 'management', 'development',
  'instance', 'distance', 'reference', 'licence', 'license', 'performance', 'maintenance',
  'attendance', 'appearance', 'importance', 'presence', 'absence', 'silence', 'violence',
  'emotion', 'motion', 'ocean', 'fashion', 'passion', 'mission', 'vision', 'decision',
  'television', 'permission', 'collection', 'connection', 'direction', 'election', 'action']);
const CONTRACTION = /\b(\w+n't|\w+'re|\w+'ve|\w+'ll|\w+'m|\w+'d|(it|that|there|what|he|she|let|who|here|where)'s)\b/gi;
const FIRST = /\b(i|me|my|mine|we|us|our|ours)\b/gi;
const SECOND = /\b(you|your|yours)\b/gi;
const CONTRAST_SAME = /\b(?:it's|it is|this is|that's|that is)\s+not\s+[^.!?;]{1,60}[,;]\s*(?:it's|it is|this is|that's)\b/gi;
const CONTRAST_SPLIT = /\b(?:isn't|is not|wasn't|was not|aren't|are not)\s+(?:just\s+|only\s+|really\s+)?(?:about\s+)?[^.!?]{1,60}[.!?]\s+(?:It's|It is|It was|This is|That's|They're)\b/g;
const NOT_BECAUSE = /\bnot because\b[^.!?]{1,80}\bbut because\b/gi;
const SIGNPOST = /\b(here's (what|how|why|the thing)|here is (what|how|why)|let's (dive|break|look at|explore|unpack)|the key takeaway|what if i told you|the truth is,|at the end of the day|without further ado)\b/gi;
const FANCY = 'notes|noted|explains|explained|observes|observed|remarks|remarked|points out|pointed out|emphasizes|emphasized|asserts|asserted|adds|added';
const quoteNear = v => new RegExp('["\\u201c][^"\\u201d]{3,}["\\u201d][^.!?]{0,40}\\b(' + v + ')\\b|\\b(' + v + ')\\b,?\\s*["\\u201c]', 'gi');
const TIER3 = /\b(delve\w*|tapestry|testament to|realm of|embark\w*|multifaceted|foster(s|ed|ing)?|showcas\w*|underscor\w*|pivotal|seamless(ly)?|leverag(e|es|ed|ing)\b(?! ratio)|streamlin\w*|empower\w*|game-?changer|ever-evolving|in today's)\b/gi;

const REGISTERS = {
  default:   { sd: 5, ing: 6, noun: 5, dash: 3, first: null },
  blog:      { sd: 5, ing: 6, noun: 4, dash: 3, first: 15 },
  technical: { sd: 4, ing: 8, noun: 7, dash: null, first: null },
  academic:  { sd: 5, ing: 8, noun: 9, dash: null, first: null },
  marketing: { sd: 4, ing: 6, noun: 4, dash: 3, first: null },
  email:     { sd: 4, ing: 6, noun: 4, dash: 3, first: null },
  fiction:   { sd: 6, ing: 8, noun: 3, dash: null, first: null },
};

function clean(md) {
  let t = md.replace(/\r/g, '');
  t = t.replace(/(```|~~~)[\s\S]*?(\1|$)/g, '\n\n');         // fenced code, closed or not
  t = t.replace(/`[^`\n]*`/g, 'CODE');                        // inline code spans
  t = t.replace(/<[^>]+>/g, ' ');                             // HTML tags
  t = t.replace(/https?:\/\/\S+/g, 'URL');
  t = t.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
  t = t.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  t = t.replace(/^\s*\|.*\|\s*$/gm, '');                      // tables
  t = t.replace(/^\s*#{1,6}\s.*$/gm, '\n');                   // headings are not prose
  t = t.replace(/^\s*>\s?/gm, '');                            // blockquote markers
  t = t.replace(/^\s*([-*+]|\d+[.)])\s+(.*)$/gm, (m, b, s) => '\n' + s + (/[.!?:]$/.test(s) ? '' : '.') + '\n');
  t = t.replace(/\*\*|__|(?<!\w)[*_](?!\s)|(?<!\s)[*_](?!\w)/g, '');
  t = t.replace(/[‘’]/g, "'");
  return t;
}

function splitSentences(p) {
  let s = p;
  ABBREV.forEach((a, i) => { s = s.replace(new RegExp('\\b' + a.replace('.', '\\.') + '\\.', 'g'), a.replace(/\./g, '\u0001') + '\u0001'); });
  s = s.replace(/(\d)\.(\d)/g, '$1\u0001$2');
  return s.split(/(?<=[.!?]["')”\]]?)\s+(?=\S)/)
    .map(x => x.replace(/\u0001/g, '.'))
    .filter(x => /[a-z]/i.test(x));
}

function measure(md) {
  const text = clean(md);
  const paras = text.split(/\n\s*\n/).map(p => p.replace(/\s+/g, ' ').trim()).filter(p => /[a-z]/i.test(p));
  const sentences = [];
  let shortClosers = 0;
  for (const p of paras) {
    const ss = splitSentences(p);
    sentences.push(...ss);
    const last = ss[ss.length - 1] || '';
    if (ss.length >= 3 && last.split(/\s+/).length <= 6) shortClosers++;
  }
  const words = (text.toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || []).filter(w => w !== 'code' && w !== 'url');
  const n = words.length || 1;
  const per1k = c => +(c * 1000 / n).toFixed(1);
  const count = re => (text.match(re) || []).length;

  const lens = sentences.map(s => (s.match(/[A-Za-z]+(?:'[a-z]+)?/g) || []).length);
  const L = lens.length || 1;
  const mean = lens.reduce((a, b) => a + b, 0) / L;
  const sd = Math.sqrt(lens.reduce((a, b) => a + (b - mean) ** 2, 0) / L);

  const commaIng = (text.match(/,\s+(?:\w+ly\s+)?([a-z]+ing)\b(?!\s*(,|and\b|or\b))/gi) || [])
    .filter(m => !ING_SKIP.has(m.replace(/.*\s/, '').toLowerCase())).length;
  const ing = commaIng + count(PARTICIPLE_OPENERS);
  const suffixNouns = words.filter(w => {
    const base = /[^s]s$/.test(w) && !/(ness|ss)$/.test(w) ? w.slice(0, -1) : w;
    return NOUN_SUFFIX.test(base) && !NOUN_SKIP.has(base);
  }).length;

  return {
    words: words.length,
    sentences: sentences.length,
    paragraphs: paras.length,
    sentence_avg: +mean.toFixed(1),
    sentence_sd: +sd.toFixed(1),
    pct_under_8: Math.round(100 * lens.filter(l => l < 8).length / L),
    pct_over_25: Math.round(100 * lens.filter(l => l > 25).length / L),
    sentences_per_paragraph: +(sentences.length / (paras.length || 1)).toFixed(1),
    ing_clauses_per_1k: per1k(ing),
    vague_ing_tails: count(VAGUE_TAIL),
    suffix_noun_pct: +(100 * suffixNouns / n).toFixed(1),
    contractions_per_1k: per1k(count(CONTRACTION)),
    first_person_per_1k: per1k(count(FIRST)),
    second_person_per_1k: per1k(count(SECOND)),
    dashes_per_1k: per1k(count(/—| – | -- | - /g)),
    semicolons_per_1k: per1k(count(/;/g)),
    colons_per_1k: per1k(count(/:(?!\/)/g)),
    parens_per_1k: per1k(count(/\(/g)),
    questions_per_1k: per1k(count(/\?/g)),
    exclamations_per_1k: per1k(count(/!/g)),
    contrast_frames_per_1k: per1k(count(CONTRAST_SAME) + count(CONTRAST_SPLIT) + count(NOT_BECAUSE)),
    signposts_per_1k: per1k(count(SIGNPOST)),
    short_paragraph_closers_per_1k: per1k(shortClosers),
    quote_said: count(quoteNear('said|says')),
    quote_other_verbs: count(quoteNear(FANCY)),
    dated_words_per_1k: per1k(count(TIER3)),
  };
}

function notes(m, reg) {
  const r = REGISTERS[reg] || REGISTERS.default;
  const f = [];
  if (m.words < 300) f.push(`only ${m.words} words: rates are noisy below about 300`);
  if (r.sd && m.sentences >= 10 && m.sentence_sd < r.sd) f.push(`sentence spread is narrow (sd ${m.sentence_sd})`);
  if (m.ing_clauses_per_1k > r.ing) f.push(`participial clauses at ${m.ing_clauses_per_1k} per 1k: read them`);
  if (m.vague_ing_tails > 0) f.push(`${m.vague_ing_tails} vague ", -ing" tail(s) (highlighting, ensuring...)`);
  if (m.suffix_noun_pct > r.noun) f.push(`-tion/-ment/-ness words at ${m.suffix_noun_pct}%: look for nominalizations`);
  if (m.contrast_frames_per_1k > 0) f.push(`possible "not X, it's Y" frames: check each`);
  if (m.signposts_per_1k > 0) f.push('signposting phrase(s)');
  if (m.quote_other_verbs >= 2 && m.quote_other_verbs > m.quote_said) f.push('quotes attributed with notes/explains more than "said"');
  if (m.dated_words_per_1k >= 4) f.push('several dated AI words');
  if (r.dash && m.dashes_per_1k > r.dash) f.push(`dashes at ${m.dashes_per_1k} per 1k: check against voice or house style`);
  if (r.first && m.first_person_per_1k < r.first) f.push(`first person at ${m.first_person_per_1k} per 1k: low for a piece with an author`);
  return f;
}

const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
const json = args.includes('--json');
const compareFile = opt('--compare');
const reg = opt('--register') || 'default';
if (args.includes('--compare') && !compareFile) { console.error('--compare needs a file'); process.exit(2); }
if (!REGISTERS[reg]) { console.error('Unknown register: ' + reg + '. Use one of: ' + Object.keys(REGISTERS).join(', ')); process.exit(2); }
const skip = new Set([compareFile, reg].filter(Boolean));
const file = args.find(a => !a.startsWith('--') && !skip.has(a));
if (!file) { console.error('Usage: node check.cjs draft.md [--register blog|technical|academic|marketing|email|fiction] [--compare sample.md] [--json]'); process.exit(2); }

let a, b;
try {
  a = measure(fs.readFileSync(file, 'utf8'));
  b = compareFile ? measure(fs.readFileSync(compareFile, 'utf8')) : null;
} catch (e) { console.error(e.message); process.exit(2); }

if (json) { console.log(JSON.stringify(b ? { draft: a, sample: b } : a, null, 2)); process.exit(0); }

const keys = Object.keys(a);
const w = Math.max(...keys.map(k => k.length));
console.log(b ? `${'metric'.padEnd(w)}  ${'draft'.padStart(8)}  ${'sample'.padStart(8)}` : `${'metric'.padEnd(w)}  ${'value'.padStart(8)}`);
for (const k of keys) console.log(`${k.padEnd(w)}  ${String(a[k]).padStart(8)}${b ? '  ' + String(b[k]).padStart(8) : ''}`);
const fl = notes(a, reg);
console.log(`\nRegister: ${reg}. Surface observations only; structure, truth and usefulness are not measured.`);
if (fl.length) console.log('Worth a look:\n- ' + fl.join('\n- '));
