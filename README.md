# prose

A Claude skill for writing that reads like a skilled person wrote it: blog
posts, web copy, docs, academic papers, emails, reports, press releases, UI
text, humour and fiction. It can also learn a person's or a brand's voice and
write as them.

Most anti-AI-writing skills are word lists: ban "delve", cut the em dashes.
That isn't enough. In one study, articles were rewritten using expert
detectors' own list of clues, and those experts, voting together, still caught
every one. The patterns that survive word-swapping are structural: what each paragraph is for, how the
piece opens and closes, whether it states a cost, whether it invents things.
`prose` works on those first, and keeps the reader's task and the truth ahead
of all of it.

## Install

Copy `skills/prose/` into your skills folder:

```
git clone https://github.com/kingsbury-labs/prose
cp -r prose/skills/prose ~/.claude/skills/
```

The checker script needs Node. Nothing else is installed.

## Use

It triggers on its own when Claude is asked to write something for a reader.
You can also ask for it by name:

- "Write a 500-word blog post from these notes, using prose."
- "Rewrite this landing page, careful mode."
- "Learn my voice from these five emails, then draft the reply."

What it does, in order:

1. **Sets the target.** Picks a register card (there are 15) with concrete
   targets for person, contractions, structure, citations, opening and close.
   Telling a model to "write casually" doesn't change much; specific targets
   do.
2. **Gathers the material**, and won't invent any. No made-up facts, quotes,
   customers or author opinions, and no claims about what readers think. It
   asks if it can, and works around the gap if it can't.
3. **Plans** each section: what it does, what it holds back, and what makes it
   real.
4. **Drafts and revises from a defect list**, not a vague "make it sound
   human" pass.
5. **Checks** with a small script (`scripts/check.cjs`) that reports sentence
   spread, person, contractions, dashes and a few frames. It reports what it
   sees and doesn't grade the result.

## How it was tested

Five setups wrote the same posts from the same briefs: a bare model with no
skill, three popular skills ([humanizer](https://github.com/blader/humanizer),
[avoid-ai-writing](https://github.com/conorbronsdon/avoid-ai-writing),
[sepia](https://github.com/Nanako0129/sepia)), and `prose`. Gemini and ChatGPT
judged the posts blind on usefulness and how human they read.

The first version lost. It came last on usefulness for the blog post, partly
because it refused to invent an opinion and left a hole where one should have
been. Two outside reviews (Fable and Codex) found more problems, and the
skill was rebuilt from them. Four variants of the rebuilt version then went up
against a bare model on two blog briefs, judged blind by Codex. The one
shipped here argues fairly against its own recommendation once and leaves one
thing unresolved. It was ranked most human on one brief and second on
the other, and most useful on one and third on the other. The bare model came
last on both measures on both briefs.

That's a small test: a handful of briefs, model judges, one model writing.
Model judges are a weak measure of whether text sounds human, which the skill
itself warns about. Treat the result as encouraging, not settled. Reports of
where it does worse than no skill at all are the most useful issues you can
open.

## What's inside

```
skills/prose/
  SKILL.md                  the process
  references/registers.md   15 register cards
  references/patterns.md    what to fix, and what not to "fix"
  references/voice.md       learning and writing in a voice
  references/evidence.md    every source, and how much of it was read
  scripts/check.cjs         the checker
```

## Credits

Built on published research, listed in `references/evidence.md`, mainly
StoryScope (Russell et al., 2026), Spoiler Alert (Sui et al., 2026), Reinhart
et al. (PNAS, 2025), Chakrabarty et al. (CHI, 2025) and Wang et al. (EMNLP
Findings, 2025).

Several ideas are adapted from MIT-licensed skills: the "aim at the band"
principle, the question check and the outline test from
[sepia](https://github.com/Nanako0129/sepia); the edit ratio and editing
contract from sepia and
[avoid-ai-writing](https://github.com/conorbronsdon/avoid-ai-writing);
strength-ordered patterns from [humanizer](https://github.com/blader/humanizer);
the flatten and connective tests from
[anti-slop-writing](https://github.com/adewale/anti-slop-writing); and measured
voice profiles from [unslop](https://github.com/theclaymethod/unslop),
[write-like-me](https://github.com/Hiro-Inagawa/write-like-me) and
[write-like-me](https://github.com/ddutchie/write-like-me).

## License

MIT. See `LICENSE`.
