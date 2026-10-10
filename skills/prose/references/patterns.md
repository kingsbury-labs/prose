# Patterns

Used in Step 4. **Tier 1**: fix on a single sighting. **Tier 2**: fix only in
clusters or where clearly above the register's norm. Then the list of things
that are *not* defects, which matters as much.

Word lists date quickly; structure lasts. Most of the effort belongs in Tier 1.

## Tier 1: fix on sight

| Pattern | Looks like | Fix |
|---|---|---|
| Invented specifics or stance | A case, quote, stat, reaction, or author position with no source in the material | Remove, reason it from the facts, or ask |
| Contrast frame | "It's not X, it's Y." "This isn't about X. It's about Y." | Say Y |
| Signposting | "Here's what you need to know." "Let's break it down." "The key takeaway?" | Start with the thing (fine in talks) |
| Restating tail | ", highlighting the importance of...", ", underscoring the need for..." | Cut, or make the point its own sentence |
| Recycled frame | The same opener for every item ("You'll hear that..." three times) | Vary, or use a table |
| Credential padding | "Dr. Jane Smith, a leading expert with 20 years of experience, notes..." | Name and fact |
| Significance inflation | "a pivotal moment", "a testament to", "reshaping the industry" | Say what happened, at its real size |
| Chatbot residue | "I hope this helps", "Great question", "Let me know if you have any questions" | Cut |

## Tier 2: in clusters or above norm

| Pattern | Notes |
|---|---|
| Summary close | A whole paragraph restating the piece. A one-line restatement in the author's voice is common in human writing; don't hunt it. |
| Participial clauses | ", using X" is ordinary; many of them in a row, or ones that add a vague consequence, read as AI. Measured high in GPT and Llama output, not tested on Claude. |
| Nominalization density | "the implementation of", "the optimization of" piling up. Normal in academic and legal text. |
| Forced triads | Three items, three adjectives, three clauses by reflex across the piece |
| Uniform rhythm | Every paragraph and sentence about the same length |
| Bold lead-in lists | "**Speed:** ..." outside docs and reference content |
| Em dashes | Above what the voice or house style uses. Replace with colons, parentheses, semicolons or full stops, not only commas. |
| Transition stacking | "Moreover / Additionally / Furthermore" opening many sentences. One alone is fine. |
| Sensory filler | Tight chests, warm glows, the aroma of... |
| Hedge stacks | "may potentially help to somewhat reduce" |
| Coined concept labels | "the observability paradox" |
| Fractal summaries | Every section announces, says, recaps |
| Symmetric coverage | Every option an equal paragraph, no verdict |
| Quotes always closing paragraphs | Every key line parked at a paragraph's end |
| Narrator-voice quotes and attribution cycling | Quoted people all sound polished; "notes / explains / observes" instead of "said" |
| Dated vocabulary | delve, tapestry, testament, foster, showcase, underscore, pivotal, seamless, leverage (verb), streamline, empower. One sighting is nothing; a cluster is a signal. |

## Not defects: leave them

- A single hedge: "probably", "tends to", "perhaps".
- "In order to", "the fact that", plain "is" and "has", now and then.
- One transition word on its own.
- Adverbs in general.
- Passive voice where the actor is unknown, obvious or beside the point; in
  methods sections. Models already under-use it.
- Headings, lists and bold UI labels in documentation.
- No contractions in academic and formal writing.
- Short choppy sentences: expert readers counted them as a *human* cue.
- A clear, conventional structure when it's the clearest one for the reader.
- True, specific superlatives ("the first", "one of three").
- Words like "navigate", "robust" or "elevated" used literally ("navigate to
  Settings", "robust standard errors", "elevated privileges").

## Tests

- **Flatten:** rewrite the sentence as plainly as possible. If the meaning
  survives, use the plain one.
- **Connective:** between adjacent sentences, say the link (because, so, but,
  for example). If you have to invent it, one is filler.
- **Swap:** could any writer on this topic have written this sentence
  unchanged? Then it needs a specific, or it goes.
- **Read aloud:** where you'd stumble or never say it that way, rewrite it as
  you'd say it.
