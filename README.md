# LatinX: Aligning a Multilingual TTS Model with Direct Preference Optimization

**Demo page:** https://luischary.github.io/latinx-demo/  
**Supplementary tables:** https://luischary.github.io/latinx-demo/supplementary-data.html  
**Paper/preprint:** https://arxiv.org/abs/2509.05863  
**Inference repository:** https://github.com/luischary/latinx-inference  
**Model artifacts:** https://huggingface.co/LuisChary/LatinX-TTS

LatinX is a multilingual text-to-speech (TTS) system designed as the speech generation component of a cascaded speech-to-speech translation pipeline, with the goal of preserving speaker identity across languages. The system integrates a grapheme-to-phoneme model, a neural audio codec, and an autoregressive Transformer-based generator, and studies Direct Preference Optimization (DPO) as an alignment strategy for improving intelligibility and speaker similarity.

The work was accepted at **BRACIS 2026**. The demo and supplementary material are intended to accompany the paper with public listening examples and metric tables; they do not constitute an end-to-end evaluation of a complete speech-to-speech translation system.

## What is included here

This repository hosts the public GitHub Pages material for the LatinX paper:

- a landing/demo page with selected held-out audio examples;
- a supplementary-data page with detailed and summary metric tables;
- static JavaScript/HTML/CSS used to render the tables and audio examples;
- packaged demo samples for convenient download.

For implementation and artifact download utilities, use the separate inference repository:

```text
https://github.com/luischary/latinx-inference
```

## Scope and framing

LatinX is evaluated as a **voice-preserving multilingual TTS / speech generation component**, not as a full end-to-end speech-to-speech translation pipeline. ASR front-end errors and translation quality are outside the scope of this demo and of the reported metric tables.

The supplementary tables mirror the paper's evaluation setup, including:

- Word Error Rate (WER) for intelligibility;
- objective speaker similarity using TitaNet cosine similarity;
- Similarity MOS (SMOS) from human evaluation;
- Mean Opinion Score (MOS) for naturalness;
- comparable language-group averages for baselines with different language coverage.

## Languages and baselines

The evaluation covers six languages:

```text
en, es, fr, it, pt, ro
```

The paper compares:

- YourTTS;
- XTTSv2;
- LatinX (Fine-tuned);
- LatinX (DPO).

Because baseline systems differ in language support, some summary rows report averages over comparable language subsets:

- `Avg. (pt,en,fr)` — comparable with YourTTS;
- `Avg. (pt,en,fr,es,it)` — comparable with XTTSv2;
- `Avg. (all)` — all six LatinX evaluation languages.

## Model overview

At a high level, the system uses:

- a grapheme-to-phoneme component for phonetic conditioning;
- a neural audio codec for discrete audio tokens;
- an autoregressive decoder-only Transformer for speech generation;
- acoustic prompts for zero-shot voice conditioning;
- DPO alignment over automatically constructed preference pairs.

The training pipeline follows three stages:

1. **Pre-training** over multilingual speech data;
2. **Supervised fine-tuning** for zero-shot voice cloning;
3. **DPO alignment** using automatically labeled preferences based on WER and speaker similarity.

## Supplementary data

The supplementary page contains:

- evaluator demographics, with integer counts by native language and gender category;
- WER summary and detailed source-target tables;
- objective similarity summary and detailed source-target tables;
- SMOS summary and detailed source-target tables;
- MOS summary and detailed source-target tables.

For LatinX objective similarity, summary cells report:

```text
Sim-O / Sim-E
```

where:

- **Sim-O** compares generated audio with the original speaker audio;
- **Sim-E** compares generated audio with the codec-reconstructed speaker audio and is a codec-aware diagnostic, not a direct replacement for baseline Sim-O.

## Usage notes

The demo samples are provided for research illustration and qualitative inspection. They should be interpreted together with the quantitative tables and the limitations discussed in the paper, especially the divergence between objective speaker-similarity metrics and human SMOS judgments.

The public material does not include private datasets or non-releasable training data. Check the inference repository and Hugging Face model page for the current artifact layout and download instructions.

No DOI/proceedings citation is listed here yet. Until final proceedings metadata is available, cite the arXiv/preprint entry below or refer to the work as accepted at BRACIS 2026.

## Citation

If you find this work useful, please cite:

```bibtex
@misc{chary2025latinxaligningmultilingualtts,
  title         = {LatinX: Aligning a Multilingual TTS Model with Direct Preference Optimization},
  author        = {Luis Felipe Chary and Miguel Arjona Ramirez},
  year          = {2025},
  eprint        = {2509.05863},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CL},
  url           = {https://arxiv.org/abs/2509.05863}
}
```

## Ethics and limitations

Voice-preserving speech generation can be misused. Any deployment should address consent, disclosure, access control, and misuse prevention. The demo is intended for research communication and should not be treated as a production voice-cloning service.
