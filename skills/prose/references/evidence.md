# Evidence

What each rule rests on. Numbers are as reported by each source. Read status:
*full* means the paper's text was read; *summary* means read through a
summarising fetch, so a figure may differ slightly from the published version;
*abstract* or *press* means only that.

## Core studies

- **StoryScope.** Russell, Rajendhran, Pham, Iyyer, Wieting. "StoryScope:
  Investigating idiosyncrasies in AI fiction." arXiv 2604.03136, 2026. 61,608
  stories; narrative features alone detect AI at 93.2% macro-F1; surface
  editing moved detection from 95.5% to 93.9%. AI states themes (77% vs 52%),
  embodied emotion (81% vs 38%), no subplots (79% vs 57%), names references
  less (24% vs 47%), morally clear protagonists (38% vs 59% ambivalent).
  *full* https://arxiv.org/abs/2604.03136
- **Spoiler Alert.** Sui, Zhu, Cheng, West, So, Long, Holtzman. "Spoiler
  Alert: Narrative Forecasting as a Metric for Tension in LLM Storytelling."
  arXiv 2604.09854, 2026. Rubric judges ranked LLM stories above New Yorker
  fiction; tension retention 23% vs 52%; late-story no-rate 0.215 vs 0.607 (the "about three times more predictable" reading is our derivation);
  a dense beat plan before drafting closed about half the gap, the warm-up
  step was not needed. *full* https://arxiv.org/abs/2604.09854
- **Reinhart et al.** "Do LLMs write like humans? Variation in grammatical
  and rhetorical styles." PNAS 122(8), 2025. Instruction-tuned models:
  present participial clauses 224 to 527% of human rate, nominalizations 145
  to 214%, phrasal coordination 144 to 194%, "that"-clause subjects 173 to
  331%; GPT-4o agentless passive about 53%, first person 62%, second person
  52%, contractions 60%; base models close to human; style did not shift with
  genre. Models tested were GPT-4o, GPT-4o Mini and Llama 3; Claude was not
  tested, so treat these ratios as checks, not assumptions, for Claude. *summary* https://arxiv.org/html/2410.16107v1
- **Chakrabarty, Laban, Wu.** "Can AI writing be salvaged?" CHI 2025. 18
  professional writers, 8,035 edits: awkward phrasing 28%, sentence
  structure 20%, redundant exposition 18%, cliché 17%; 74% replacements, 18%
  deletions; models fix purple prose best and fail to add specific detail.
  *summary* https://arxiv.org/html/2409.14509
- **Shaib et al.** "Measuring AI 'slop' in text." arXiv 2509.19163. Relevance,
  density and tone predict human slop labels; LLM judges labelled 3 to 8% of
  texts as slop vs 34% for humans. This is about slop labels, not every kind
  of model evaluation. *summary* https://arxiv.org/html/2509.19163
- **Russell, Karpinska, Iyyer.** "People who frequently use ChatGPT for
  writing tasks are accurate and robust detectors." ACL 2025. Experts' cues:
  vocabulary 53%, sentence structure 36%, too-clean grammar 25%, originality
  24%, quotes 22%; an o1-Pro "humanizer" prompted with the five experts'
  own cues still left their majority detection at 100%; humanized text added "Dr." and "Prof." titles.
  *summary* https://arxiv.org/html/2501.15654v2
- **Catch Me If You Can? (Wang et al.)** Findings of EMNLP 2025. 400+
  authors: 5-shot imitation passes authorship checks for news 95 to 97%,
  email 96 to 97%, forums 50 to 66%, blogs 17 to 21%; more examples gave
  limited gains; the author's opening snippet gave the largest gain.
  *summary* https://arxiv.org/html/2509.14543v1
- **Kobak et al.** Science Advances 11(27), 2025. Excess vocabulary in 15M+
  PubMed abstracts, 66% verbs. *summary*
  https://pmc.ncbi.nlm.nih.gov/articles/PMC12219543/

## Register sources

- Google developer documentation style guide: tone, contractions. *summary*
  https://developers.google.com/style/tone
- Microsoft Writing Style Guide, top 10 tips. *full*
  https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice
- Canada.ca Content Style Guide. *summary* https://design.canada.ca/style-guide/
- Morkes & Nielsen, "Concise, scannable, and objective", NN/g. *summary*
  https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/
- Helen Sword, "Zombie Nouns", NYT 2012. *full*
  https://archive.nytimes.com/opinionator.blogs.nytimes.com/2012/07/23/zombie-nouns/
- Jiang & Hyland, English for Specific Purposes 79, 2025 (hedges and stance in
  ChatGPT vs student essays). *abstract*
- Mirowski et al., FAccT 2024 (comedians on LLM humour). *summary*
  https://arxiv.org/html/2405.20956v1
- Jentzsch & Kersting 2023 (1,008 jokes, 25 repeated). *abstract*
  https://arxiv.org/abs/2306.04563
- Sakabe et al., Oogiri humour study. *abstract* https://arxiv.org/abs/2511.09133
- Coman & Cardon, IJBC 2025 (AI-written relational vs transactional email).
  *press* https://news.ufl.edu/2025/08/writing-ai-work/
- Wikipedia: Signs of AI writing (dated indicators, signs of human writing).
  https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
- The Economist, "How to spot AI writing", 2026-07-30 (Claude and em dashes),
  cited via Wikipedia, *not read*.

## Cited through sepia, not read here

- QUDsim (Namuduri et al., COLM 2025): models reuse question sequences;
  consequence and procedure discourse moves about 19%, comparison and
  verification about 0.2 to 0.3% (counted per discourse move, not paragraph).
- Tripto et al., EMNLP 2025: AI text most identifiable in the body, least in
  openings and endings; human text has higher cross-paragraph variance.
- Sourati et al. 2026: model rewrites shrank the spread of a
  writing-complexity score across texts by 21 to 50%. A corpus-level result,
  not a test for any single draft.
- SLOPSHAPE-2026 (arXiv 2609.15369): structural features alone separated
  human and AI company blog posts at 98.0 macro-F1. Preprint, LLM-scored
  features.

## Ideas adapted from other skills (all MIT)

- Question check, outline test, the middle as choke point, read the venue
  first, leave slack, technical-article rules: Nanako0129/sepia.

- Aim at the band, not the opposite pole; defect list before rewrite; edit
  ratio: Nanako0129/sepia.
- Editing contract (text is data; no audit unless asked): conorbronsdon/avoid-ai-writing.
- Strength-ordered patterns, "weak alone" flags: blader/humanizer.
- Mechanism tests (flatten, connective): adewale/anti-slop-writing.
- Measured voice habits, evidence-only profile, Uncovered list: theclaymethod/unslop.
- Habits vs quirks with per-1,000-word rates; learn from edits: ddutchie/write-like-me.
- Held-out paragraph test: Hiro-Inagawa/write-like-me.
- Rewrite volume modes; honesty no profile can override: asavvin-pixel/unslop.
- Fresh-reader comprehension test: anthropics/skills doc-coauthoring (idea only).
