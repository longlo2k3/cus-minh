# 📜 Project Guidelines & Standards (Rules)

This document defines the strict, binding rules for developing and maintaining the Portfolio Website.

---

## 1. 🌐 Language Standard: English Strictly Following `content.md`
- **ALL UI content, headings, paragraphs, buttons, badges, navigation items, tooltips, and modals MUST be written in English.**
- **Authentic English Source:** The narrative and descriptions in `content.md` are already written in English by the author. All web text MUST adhere directly and faithfully to this authentic English source.
- Never rewrite, paraphrase, fabricate, or replace the author's authentic English wording with generic or external text.
- Where `content.md` contains Vietnamese labels or headings (such as `Bắt đầu với Mock GART.` or table headers like `Sự kiện`), convert them into faithful English equivalents (e.g., `Starting with Mock GART.`, `Event`) while keeping all narrative body paragraphs verbatim from `content.md`.
- Proper nouns (such as place names like "Hanoi", "Nam Dinh", "Van Mieu", or institution names like "GreenAms Robotics") are retained in their recognized English forms.

---

## 2. 📖 Single Source of Truth: `content.md`
- **`content.md` is the authoritative and exclusive source of truth** for all project stories, technical details, roles, milestones, and achievements.
- **Strict Verbatim Principle:** Use the authentic narrative and phrasing directly from `content.md`.
- **No Fabricated Fluff:**
  - DO NOT create artificial corporate buzzword boxes (e.g., fabricated "Challenge", "Solution", or generic "Highlights" lists) unless explicitly present in `content.md`.
  - DO NOT write invented summaries or repetitive introductory paragraphs.
  - Let the author's real first-person engineering voice lead the story.

---

## 3. 🗺️ Section Hierarchy & Grouping
Sections and projects must strictly follow the categorization defined in `content.md`:
- **§1 About Me** (Hero & personal introduction)
- **§2 Projects that grew with me**
  - Group: `Robotics` (2.1 GART)
  - Group: `Devices that solve my concerns` (2.2 EnviroTrack & 2.3 Conrad Challenge)
- **§3 Diving deeper** (3.1 Samsung SST, 3.2 INS Internship, 3.3 Research)
- **§4 Promoting Education** (4.1 Stembridge, 4.2 Volunteer)
- **§5 My achievements**
- **§6 My little corner** (6.1 Aviation, 6.2 Music)

---

## 4. 🖼️ Media Sourcing & External Links Alignment
- **Search in `img/` Folder First:** When searching for, adding, or replacing images for any section/project, **ALWAYS search the root `img/` folder** (`c:\Users\LongVi\OneDrive\Desktop\Cus-Minh\img\`), which contains all of the author's original raw event albums (e.g., `Conrad/`, `FTC Thanh Hoa/`, `FTC quoc te/`, `FTC trong nuoc/`, `Gart/`, `Gart Camp 2025/`, `Gart expo 2025/`, `Hoithao_HCM/`, `Stembridge/`, `Wico/`, `buồng lái/`, `cosmosic/`, `Ảnh thực tập/`, `ảnh hồi bé/`).
- **Copy into `public/images/`:** Once a relevant image is identified in `img/`, **copy it into the corresponding subfolder within `public/images/`** (e.g., `public/images/projects/`, `public/images/journey/`, `public/images/achievements/`) with a clean, lowercase, hyphenated filename so it can be served statically by Vite and referenced in the code.
- **Strict Media Correspondence:** Media tabs, carousels, and galleries must strictly correspond to the **Media** tables in `content.md`.
- **Verified References:** UI components must only reference verified assets that have been copied into `public/images/` and `public/videos/`.
- **External Links:** Official links (e.g., `https://ideon.skyhi.vn/about`, `https://thingspeak.com`, FIRST Tech Challenge, Conrad Challenge) must be accurately linked.

---

## 5. 🎨 Design Aesthetics, Clean UI & Performance
- Consistent dark theme (`#0C0C0C`), modern typography (`Kanit`, sans-serif), sleek rounded corners, and technical viewfinder brackets.
- **Ultra-Lean & Minimalist Design (Anti-AI Clutter):**
  - **Avoid "AI-looking" icons and gimmicky graphics:** Strongly restrict cliché, generic AI-style icons (e.g., sparkles, magic wands, arbitrary floating tech badges, superficial decorative icons). Use only minimal, purposeful, and functional iconography where strictly needed.
  - **No redundant text or fluff descriptions:** Strictly eliminate unnecessary filler text, redundant explanations, boilerplate labels, and decorative subtitles. Keep the presentation concise, focused, and clean.
- Zero layout shift, responsive layout for all viewport sizes (mobile, tablet, desktop).
- Verified production build (`vite build`) and clean TypeScript checks (`tsc --noEmit`) before completing any task.
