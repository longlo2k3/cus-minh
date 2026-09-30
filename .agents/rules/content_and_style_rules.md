---
description: Binding rules for website content, English language standard strictly adhering to content.md without fabricated fluff.
---

# 📜 Content & Style Rules

## 1. 🌐 Language Standard: English Strictly Following `content.md`
- All text visible to the user (titles, headings, narrative paragraphs, buttons, labels, metrics, modal descriptions) MUST be written in English.
- All English text MUST adhere strictly and directly to the authentic English text in `content.md`.
- Never rewrite, paraphrase, or replace the author's authentic English narrative with generic AI prose.
- Convert any Vietnamese sub-headings in `content.md` (e.g. `Bắt đầu với Mock GART.`) into accurate English equivalents (`Starting with Mock GART.`) while keeping all narrative body text verbatim.

## 2. 📖 Single Source of Truth: `content.md`
- Always use `content.md` as the direct source of truth.
- Do NOT fabricate artificial "Challenge / Solution / Highlights" boxes or invent summary blurbs that do not exist in `content.md`.
- Preserve the authentic author's voice and bold titles from `content.md`.

## 3. 🗺️ Structure & Categories
- Preserve the exact section names and sub-groupings:
  - `Robotics` (2.1 GART)
  - `Devices that solve my concerns` (2.2 EnviroTrack & 2.3 Conrad Challenge)

## 4. 🖼️ Real Media & Image Sourcing
- **Search in `img/` Folder First:** When searching for, adding, or replacing images for any section/project, **ALWAYS search the root `img/` folder** (`img/`), which contains all of the author's original raw event albums (e.g., `Conrad/`, `FTC Thanh Hoa/`, `FTC quoc te/`, `FTC trong nuoc/`, `Gart/`, `Gart Camp 2025/`, `Gart expo 2025/`, `Hoithao_HCM/`, `Stembridge/`, `Wico/`, `buồng lái/`, `cosmosic/`, `Ảnh thực tập/`, `ảnh hồi bé/`).
- **Copy into `public/images/`:** Once a relevant image is found in `img/`, **copy it into `public/images/`** with a clean, lowercase, hyphenated filename so it can be served statically by Vite and referenced in the code.
- Map media items according to the Media tables in `content.md`.
- UI components must only reference verified assets that have been copied into `public/images/` and `public/videos/`.
