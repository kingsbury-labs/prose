# Register cards

Each card sets the targets for one kind of writing. A venue's own house style
or a voice profile overrides the card. *(Source)* marks guidance from a named
guide or study in `evidence.md`; *(observed)* marks something seen in this
skill's own tests; unmarked items are working defaults.

**Moves** are the structural choices that make a piece read as considered
rather than templated: a complication, a stated cost, an open question, a
comparison or verification, a turn in the middle. Each card says which apply.
Don't force a move the card doesn't list.

**Citations follow the claim**: cite what a reader would reasonably want to
check, by risk and by the venue's convention. No fixed cap or quota anywhere.

The metrics in `scripts/check.cjs` are tuned for English. For other languages,
use the cards' structural guidance and ignore the numbers.

---

## Blog, essay, newsletter, opinion

- **Person:** first person where there is an author, and plenty of it; the
  winning posts in our tests ran about 20 to 25 first-person words per 1,000,
  the losing one 10 *(observed)*. Second person to the reader.
- **Contractions** as in speech.
- **Opening:** the most specific thing in the material (the case, the number,
  the admission), not the thesis. Answer-first is for how-tos *(observed)*.
- **Close:** an action, a cost, the open question, or a line that lands. A
  brief restatement is acceptable if it's in the author's voice; a summary
  paragraph isn't.
- **Moves:** one complication or limit; a stated cost if recommending; the
  question check from Step 2; one comparison or verification where natural.
- **Structure:** uneven paragraph lengths; headings optional; bold lead-in
  lists read as templated here.
- **Stance:** state the author's view where they have one. Blandness (no
  stance, no surprise, no humour) was a top cue expert readers used to spot AI
  *(Russell)*. Informality alone (contractions, "just", "actually") fooled one
  expert in five *(Russell)*: voice is not a sprinkle of casual words.

## Technical documentation (reference, how-to, API docs)

- **Person:** second person; imperative for steps *(Google, Microsoft)*.
- **Contractions:** common ones, especially negatives (isn't, don't, can't)
  *(Google)*.
- **Opening:** the answer or the task, first. Start steps with the verb; cut
  "you can" and "there is" *(Microsoft)*.
- **Structure:** headings in sentence case, numbered lists for sequences,
  bullets for options, code blocks for anything typed *(Microsoft)*.
- **Avoid:** "simply", "just", "easy", "quickly" in procedures; "please";
  "please note"; exclamation marks; figurative language *(Google)*.
- **Close:** the next step, the check that it worked, or nothing.
- **Moves:** none required. A warning about the step people get wrong is
  worth more than any rhetorical move.
- **Citations:** link to the spec or source for claims a reader might act on
  or doubt (versions, limits, security behaviour), not every sentence.
- **Dashes and formatting** follow the docs site's house style.

## Technical articles, tutorials, engineering write-ups

Everything in the documentation card, plus *(adapted from sepia)*:
- **Opening:** the concrete problem that forced the question, not a survey of
  the topic. No real incident: write "notes on X"; never invent one.
- **Moves:** the dead end, what you tried first, or what you'd skip next time,
  if the material has it; one opinion stated as the author's, with what would
  change it, if the author holds one; a recommendation rather than equal
  paragraphs for every option.
- **Depth by interest:** the surprising part gets the words; setup gets a line.
- **No coined concept labels** ("the observability paradox").
- **Numbers carry conditions** (machine, version, data size, runs). Code is
  real and run, or labelled as a sketch.
- **Close:** the recommendation or the open question.

## Academic and research writing

- **Person:** "we" for what the authors did is acceptable in most fields;
  follow the venue.
- **Hedging and stance:** calibrated; claim exactly as strongly as the evidence
  allows. ChatGPT essays used fewer hedges, boosters and stance markers than
  student essays *(Jiang & Hyland)*.
- **Passive:** normal in methods.
- **Contractions:** usually none.
- **Citations:** for claims from others' work, by the discipline's convention;
  not for common knowledge or the authors' own methods.
- **Verbs over nominalizations** where the field allows: a human or concrete
  subject and an active verb *(Sword)*. Examples help most when the subject is
  abstract *(Sword)*.
- **Watch for** the excess style verbs (delve, underscore, showcase, crucial,
  potential) *(Kobak)* and heavy "as discussed above" signposting.
- **Opening:** the finding or the gap, in the abstract and first paragraph.
- **Close:** a conclusion that synthesises is expected here.
- **Moves:** limitations stated plainly; no essay-style turn needed.

## Marketing, landing pages, product and web copy

- **Scannable, concise, objective.** Cutting promotional language improved
  usability 27%, concise text 58%, scannable layout 47%, all three 124%;
  15 of 19 users scanned before reading *(NN/g)*.
- **Shape:** most important thing first; sentences around 15 to 20 words at
  most; paragraphs up to three sentences; a heading about every 200 words;
  lists up to seven items *(Canada.ca)*.
- **Person:** "we" for the company, "you" for the reader; no "I" on
  institutional pages *(Canada.ca)*.
- **Contractions:** common ones, but don't contract a negative where doing
  versus not doing matters *(Canada.ca)*.
- **Benefits:** concrete outcomes. Use a number only if it's real and
  substantiated; otherwise describe the outcome plainly.
- **Moves:** say who it's not for, or what it doesn't do, somewhere on the
  page. Hold-back applies only to a customer story section.
- **Avoid:** promotional adjectives, sensory filler ("the aroma of fresh
  coffee"), claims any competitor could make unchanged.

## Press releases and announcements

- **Opening:** who, what, when, where in the first sentence; why it matters in
  the second.
- **Quotes:** real, from named people, short, sounding like a person; never
  written for them unless they approve it. Attribute with "said".
- **Close:** boilerplate "About" paragraph and contact, as the outlet expects.
- **Moves:** none. Facts, dates, availability, price.

## Email and business messages

**Transactional** (requests, updates, scheduling, confirmations):
- The ask or answer in the first sentence; action and deadline explicit.
- Plain register, contractions, first person. No headings; bullets only for
  several parallel items.
- **Moves:** none. Readers accept heavy AI help here *(Coman & Cardon,
  press)*.

**Relational** (thanks, congratulations, apology, condolence):
- Readers rated managers less sincere and less competent when AI wrote these
  *(Coman & Cardon, press)*. The sender's own specifics carry the message.
- Short. One true detail beats three warm sentences. If no detail is
  available and you can't ask, keep it brief and sincere; a plain "I'm sorry
  for your loss" beats invented warmth. Never insert a placeholder in a
  message like this; ask the sender instead.

Email is where voice imitation works best (authorship checks around 96%,
against about 20% for blogs) *(Catch Me)*.

## Cover letters and applications

- **Opening:** the role and the single strongest piece of evidence you fit it.
- **Specifics:** real projects, numbers, names, from the applicant only.
- **Avoid:** "I am excited to apply", "passionate about", restating the CV.
- **Close:** the ask, plainly.
- **Moves:** one honest limit is optional; never invent experience.

## Reports, proposals, internal documents

- **Opening:** the decision or finding, first.
- **Headings** that state the point ("Costs rose 12% after the switch").
- **Tables** for comparisons, prose for reasoning.
- **Moves:** risks, costs and open questions in their own section; a
  recommendation.
- **Close:** a short synthesis or the decision needed is expected.

## UI text and microcopy

- **Shortest form that's unambiguous.** Buttons are verbs ("Save draft").
- **Errors:** what happened, then what to do, in plain words. No blame, no
  "Oops".
- **Consistent terms**: the same thing has the same name everywhere.
- **Moves:** none. No personality unless the product's voice guide asks for it.

## Talks, speeches, scripts

- **Written for the ear:** shorter sentences, repetition of key points is
  allowed (the listener can't re-read), signposting acceptable ("Three things
  happened").
- **Opening:** a story, a number or a question that is real to the speaker.
- **Close:** the line you want remembered; a callback is fine.
- **Moves:** one turn the audience doesn't see coming, if the material has it.

## Humour

- **A point of view and a specific target.** Comedians called model output
  material with "no perspective, so it couldn't take any risks" *(Mirowski)*.
- **Specific, odd, true-to-life detail.** Over 90% of 1,008 ChatGPT jokes were
  the same 25 *(Jentzsch)*. Write several angles and keep the one that
  surprised you.
- **Hold the punchline**, keep it short; don't explain it.
- **Flips:** answer-first and "don't end on a punchy line" don't apply.
- Evidence is mixed: some 2025 blind tests rated AI jokes on par with human
  ones. The failure is clearer in long-form and voice than in one-liners.

## Narrative and fiction

From StoryScope and Spoiler Alert (see `evidence.md`):
- **Theme left implicit.** AI narrators stated the theme 77% of the time,
  humans 52%: don't always state it; sometimes is human.
- **Feelings** named plainly more often than rendered through bodies and
  weather (AI used embodied emotion in 81% of stories, humans 38%).
- **Moves:** a subplot or thread that isn't strictly on-theme; moral ambiguity;
  time jumps where they help disclosure; tension held late (23% of each
  tension peak survived in AI stories vs 52% in professional fiction).
- **Plan beats first:** per beat, what's revealed, withheld, and raised. This
  was the intervention that closed about half the tension gap.
- **Dialogue** sounds like each character, not the narrator.
- **Opening** inside the situation, not an establishing shot.

## Social posts

- **One idea**, carried by the first line.
- **The author's voice and specifics**; no hook formulas ("Here's what nobody
  tells you about...").
- **Line breaks** as the platform's culture uses them.
- **Moves:** none required.

## Legal, medical, financial and other regulated text

This skill can tidy the prose but doesn't know the rules. Follow the
jurisdiction's and the organisation's required wording exactly, keep defined
terms identical, and don't simplify anything that carries legal or clinical
meaning. Flag anything that looks like it needs a professional's review.
