# LatinX: Aligning a Multilingual TTS Model with Direct Preference Optimization

**Audio demos:** https://luischary.github.io/latinx-demo/  
**Paper (arXiv):** https://arxiv.org/abs/2509.05863

LatinX is a multilingual text-to-speech (TTS) model designed as the core of a cascaded speech-to-speech (S2S) translation system. It generates target-language speech **while preserving the source speaker’s identity**, and is aligned with **Direct Preference Optimization (DPO)** to explicitly optimize for **intelligibility (WER)** and **speaker similarity**.



## Why this matters

Conventional S2S systems often trade off intelligibility, naturalness, and preservation of the speaker’s voice. LatinX shows that **preference-aligned** generative TTS can reduce WER and strengthen perceived voice similarity across **English + Romance languages** (EN, ES, FR, IT, PT, RO), with especially strong gains for **lower-resource directions** (e.g., Romanian).



## Contributions (high level)

- A **multilingual, voice-preserving TTS** model evaluated across six languages.
- A **three-stage training pipeline** (Pre-training → SFT for zero-shot voice cloning → DPO alignment).
- An **automatic preference dataset** construction procedure that combines objective filters (WER & speaker-similarity) with a **Pareto-dominance** label rule, enabling **stable DPO** for audio generation.
- A cross-lingual evaluation that highlights the **gap between objective and subjective** metrics for speaker similarity (SMOS).



## Model overview

- **Backbone:** 12-layer **decoder-only Transformer** operating on discrete audio tokens.  
- **Front-end & conditioning:**  
  - Phonetic prompts from a **G2P** component.  
  - Acoustic prompts (short reference speech) for **voice cloning**.  
  - **Neural codec / audio tokens** for efficient autoregressive synthesis.
- **Languages:** EN, ES, FR, IT, PT, RO (with emphasis on Portuguese).



## Training pipeline

1. **Stage 1 — Pre-training (400k steps):**  
   Cross-entropy objective to learn the text/phoneme → audio-tokens mapping (no speaker conditioning).

2. **Stage 2 — Supervised Fine-Tuning (30k steps):**  
   Triplets *(audio_context, text, audio_target)* from the **same speaker** to learn voice conditioning (zero-shot cloning). Speaker-embedding constraints enforce high intra-speaker consistency.

3. **Stage 3 — DPO Alignment (~4k steps):**  
   - **Candidate generation:** Translate transcripts with M2M-100; for each text, generate **5** candidate audios with repetition-aware sampling (*temp=0.7, top-p=1.0*).  
   - **Filtering:** Discard pairs where any candidate has **WER > 20%** (Whisper) or **similarity < 0.5** (TitaNet embeddings).  
   - **Labeling:** **Pareto dominance** — a winner must be **better on both** (lower WER **and** higher similarity).  
   - **Optimization:** DPO with a frozen reference policy (the SFT model), inverse temperature **β = 0.3**, mixed mini-batches + grad accumulation.



## Evaluation setup

- **Objective intelligibility:** WER from **Whisper ASR**, reported per source→target language pair.  
- **Objective speaker similarity:** Cosine similarity over **TitaNet** embeddings.  
- **Subjective evaluations:** **SMOS** (speaker similarity) and **MOS** (naturalness), following **ITU-T P.808** best practices (ACR/CCR variants, QA, gold/trap items).



## Key results (summary)

- **WER:** DPO consistently lowers WER vs. the fine-tuned (SFT) baseline, with **large gains in Romanian** directions.  
  Representative pairs include **ro→es** (down to **0.45% WER**) and **ro→pt** (around **1.7% WER**).

- **Speaker similarity (SMOS):** Averaged over {EN, ES, FR, IT, PT}, SMOS is:
  - **Real:** 4.07  
  - **xTTSv2:** 3.24  
  - **LatinX (SFT):** 3.63  
  - **LatinX (DPO):** 3.54  
  Human raters **consistently preferred LatinX** over xTTSv2 for preserving the speaker’s voice, with DPO reaching the **best monolingual** similarity in several directions.

- **Naturalness (MOS):** Averages over {EN, ES, FR, IT, PT}:
  - **Real:** 3.78  
  - **xTTSv2:** 3.45  
  - **LatinX (SFT):** 3.41  
  - **LatinX (DPO):** 3.35  
  Results highlight a **tension between similarity and naturalness**: pushing similarity (via DPO) can slightly reduce MOS, but yields **clear intelligibility and voice-preservation benefits**.

> Full cross-lingual breakdowns (per source→target) are provided in the paper; the demo page reproduces representative samples for listening comparison.



## Audio demos

The GitHub Pages site showcases:
- **Single-voice, multi-language** examples (one reference voice → six targets).  
- **Cross-lingual intelligibility** pairs with **low WER**.  
- **Monolingual voice cloning** (reference vs. LatinX output).  
- **Quick SMOS/MOS summaries** for at-a-glance comparison.

**Demo:** https://luischary.github.io/latinx-demo/



## Acknowledgments & Ethics

- Audio samples and human studies were collected under research-only conditions and reported with P.808 safeguards.

- Preference alignment targets intelligibility and speaker similarity; care must be taken in real-world deployments to address consent, misuse prevention, and disclosure when cloning voices.


## Citation

If you find this work useful, please cite:

```bibtex
@misc{chary2025latinxaligningmultilingualtts,
  title        = {LatinX: Aligning a Multilingual TTS Model with Direct Preference Optimization},
  author       = {Luis Felipe Chary and Miguel Arjona Ramirez},
  year         = {2025},
  eprint       = {2509.05863},
  archivePrefix= {arXiv},
  primaryClass = {cs.CL},
  url          = {https://arxiv.org/abs/2509.05863}
}
```