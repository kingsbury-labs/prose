# Voice: learn it, write as it

## What the evidence says

Pasting samples and saying "write like this" works for some genres and not
others. Across 400+ authors, authorship checks accepted 5-shot imitations of
news and email about 95% of the time, forum posts 50 to 66%, and blog posts 17
to 21%. Going from 2 to 10 samples gave limited gains, and outputs drifted to
"an average, generic tone". The largest gain came from giving the model the
author's own opening words. *(Catch Me)*

This recipe pairs a written profile with the samples and the author's own
words. That combination is our inference from the study, not something it
tested directly; treat the profile as a working tool and keep the samples
alongside it.

## Learn voice

### 1. Collect

- Samples in the channel the voice will be used for. Email voice and blog
  voice differ; record them separately.
- Remove quoted, pasted and co-written text before measuring.
- Aim for at least 2,000 words per channel for a usable profile; mark anything
  under that *low confidence*. More text improves the measurements; it doesn't
  guarantee better imitation.
- Set aside two or three samples (about 500 words each) unread, for testing.
- For a brand: the brand guide, required and banned terms, product naming, and
  legal must-says.
- **Ask for the author's own words on the next piece** before drafting it: three
  sentences, rough notes, or a voice-memo transcript. This is the single most
  useful input.

### 2. Measure

Run `scripts/check.cjs` on the combined samples (English only), or count by
hand on 500+ words. Record sentence length and spread, paragraph length,
contractions, first and second person, and punctuation per 1,000 words. Note
the sample size beside every number.

### 3. Describe what they do, with evidence

Each line cites a short quote from the samples. Surface habits alone don't
make a voice; cover composition too:

- **Openings and closings**: how pieces start and end.
- **Argument moves**: how they build a point (example first, claim first, story,
  comparison), how they move between paragraphs.
- **Directness**: how they disagree, qualify, assert authority, admit doubt.
- **Audience**: what they assume the reader knows; how much they explain.
- **What they notice**: the kinds of detail they pick up, and what they skip.
- **Figurative language**: metaphor and analogy habits, or their absence.
- **Humour**: whether, what kind, how often.
- **Vocabulary**: words and phrases they use. Words not seen, stated as "not
  observed in N words", never as "never", unless the person confirms it.
- **Syntax**: recurring sentence shapes beyond punctuation.
- **Habits** (regular, with a rate per 1,000 words) and **quirks** (rare
  signature moves, with a rate). Budget quirks as rate × length when drafting,
  so a short piece doesn't get five of them.
- **Off-limits**: topics, tones or claims they avoid.
- **Channel norms**: typical length, paragraph count, headings, sign-offs.

Mark which traits look stable and which may just reflect the topic of the
samples.

### 4. Review with the person

Show the profile before using it. Ask them to correct anything wrong,
especially stance, directness and off-limits rules. Their corrections outrank
the measurements.

### 5. Save it

Where the project keeps such things, or `.claude/voice/<name>.md`:

```markdown
# Voice: <name>
Confidence: low | medium | high    Samples: <words, channels>    Measured: <date>
Reviewed by the person: yes | no

## Numbers  (per channel; sample size beside each)
## Openings and closings
## Argument moves
## Directness and stance
## Audience
## What they notice
## Figurative language and humour
## Vocabulary
Uses: ...    Not observed (in N words): ...
## Syntax
## Habits (rate per 1k)
## Quirks (rate per 1k)
## Off-limits
## Channel norms
## Uncovered
<what the samples don't show; ask, or use the register card>
## Learned from edits
- <date>: "<before>" → "<after>" (<rule it implies>)
```

Brands add:

```markdown
## Brand
We are / we are not:  (pairs, each with an example sentence)
Required terms:    Banned terms:
Product names and how to write them:
Legal must-says:
Channel rules:
```

### 6. Test

Write two or three pieces on the held-out samples' topics, at similar length,
without reading them. Compare numbers with `check.cjs draft.md --compare
heldout.md` (meaningful only at 500+ words), and read them side by side for
the composition traits. Show the person; what they say is off goes into the
profile.

## Write as a voice

1. Load the profile and say which.
2. Start from the person's own words for this piece if you have them.
3. Follow the profile's composition traits first, its numbers second, and the
   register card for anything Uncovered.
4. Quirks at their measured rate, not more. Caricature is the usual failure.
5. Don't lift distinctive phrases from the samples wholesale; use the habits,
   not the sentences.
6. The profile never overrides honesty. A voice that "always opens with a
   client story" still doesn't get an invented one.

## Learn from edits

When the person edits a piece written in their voice, add each meaningful
change to "Learned from edits" with the date and the rule it implies. After
three edits point the same way, move the rule into the main profile.
