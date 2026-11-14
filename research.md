
# CodeSwitch Sentinel: Research Log

## Research Question
How reliably do lightweight character-level
models classify Bangla-English multilingual
messages across different message lengths
and script combinations?

## Background
Existing research has investigated
Bangla-English code-mixed language
identification.

Our project will investigate classification
robustness across message lengths and
script combinations.

## Hypotheses
1. Short messages may be harder to classify.
2. Romanized Bangla spelling variation may
   increase classification errors.
3. Mixed-script messages may be confused
   with monolingual messages.

## Dataset
Investigate the publicly available BanglaMix
dataset and its licensing and annotation
documentation.

## Proposed Experiments
1. Inspect dataset labels and distributions.
2. Remove duplicate or unsuitable records.
3. Create leakage-aware train/test splits.
4. Train a character TF-IDF baseline.
5. Train Logistic Regression.
6. Evaluate macro-F1, precision and recall.
7. Compare results by message length and
   script combination.
8. Analyze incorrect predictions.

## Research Integrity
- Cite all external datasets and papers.
- Preserve dataset attribution and licensing.
- Never invent experimental results.
- Report limitations and label uncertainty.
- Do not claim novelty without a literature review.

## Results
Not yet measured.
