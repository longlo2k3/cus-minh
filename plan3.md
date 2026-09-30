Design a premium interactive portfolio section for **“PLAN 03 — DEEP DIVE”**, based strictly on a **three-panel expanding image layout**.

The section contains exactly **three large vertical image panels placed side by side**, representing three stages of the journey:

1. **SAMSUNG SST** — Academic / Algorithms / Semiconductor / Gaussian Splatting
2. **INS ENGINEERING** — Industrial Internship / Power Systems / ETAP / PSS/E
3. **RESEARCH** — Control Theory / NDO-MPC / MATLAB & Simulink / GTSD Publication

### CORE INTERACTION

The main visual concept is an **interactive image accordion**.

At any moment, exactly **one image is in focus**.

- The focused image expands horizontally and becomes significantly wider than the other two.

- The other two images shrink and share the remaining space equally.

- Example layout when the first image is active:

  **55% / 22.5% / 22.5%**

- When the second image is selected:

  **22.5% / 55% / 22.5%**

- When the third image is selected:

  **22.5% / 22.5% / 55%**

The width transition should be smooth and cinematic, using an elegant ease-out animation.

The images should never disappear completely. Even the inactive panels remain clearly visible as narrow vertical visual previews.

### IMAGE TREATMENT

Each panel uses a full-bleed, high-quality editorial photograph or cinematic visual.

Use a dark gradient overlay from transparent to black so that typography remains readable.

Inactive panels:

- show mainly the image
- display only minimal text
- keep the visual composition clean
- slightly reduce brightness/saturation

Active panel:

- image becomes larger and more visually dominant
- overlay becomes slightly stronger
- reveal the complete information for that category
- typography and metadata smoothly fade/slide into view

### TEXT BEHAVIOR

Every image has text positioned directly over the image.

For inactive panels, show only:

- category number
- short title
- small category label

For example:

**01**
**SAMSUNG SST**
Academic

When the panel becomes active, reveal the full content:

**01 / SAMSUNG SST**

Samsung Science & Technology

Selected as **1 of 10 outstanding students**.

- Samsung R&D Vietnam
- Algorithms & DSA with Java
- Samsung Global Advanced Certificate
- Semiconductor fabrication
- Capstone: 3D cultural heritage reconstruction using Gaussian Splatting

The same principle applies to the other two panels.

### PANEL 01 — SAMSUNG SST

Visual direction:
Samsung R&D / advanced technology / algorithms / semiconductor / 3D reconstruction.

Active content:

**SAMSUNG SCIENCE & TECHNOLOGY**

Academic deep dive into algorithms, semiconductor technology and 3D reconstruction.

Highlight:
**01 / 10 SELECTED**

Key items:

- Java / DSA
- Samsung Global Advanced Certificate
- Semiconductor fabrication
- Gaussian Splatting
- 3D cultural heritage preservation

### PANEL 02 — INS ENGINEERING

Visual direction:
Electrical engineering, power grids, technical diagrams, control rooms, engineering simulation.

Active content:

**INS ENGINEERING**

3-month industrial internship focused on power-system analysis and real-world grid simulations.

Key items:

- Power Systems
- RFI technical documents
- ETAP
- PSS/E
- Lightning propagation
- Sudden power loss
- Grid disconnection

### PANEL 03 — RESEARCH

Visual direction:
Scientific research, mathematical models, MATLAB/Simulink, control systems, academic conference.

Active content:

**RESEARCH**

Research in disturbance-rejection nonlinear control using NDO-MPC for hybrid battery and supercapacitor energy systems in electric vehicles.

Key items:

- Nonlinear Control
- NDO-MPC
- MATLAB / Simulink
- Battery + Supercapacitor
- PGS. TS. Võ Thanh Hà
- GTSD International Conference

Add a strong achievement indicator:

**INTERNATIONAL CONFERENCE**
**PAPER ACCEPTED & PRESENTED**

### INITIAL STATE

When the section first loads:

- Samsung SST is the default active panel.
- Samsung occupies approximately 55% width.
- INS Engineering and Research each occupy approximately 22.5%.
- The user immediately understands that the three panels are selectable.

### INTERACTION

Clicking or hovering a panel makes it active.

When another panel becomes active:

- current panel smoothly contracts
- selected panel smoothly expands
- image position subtly adjusts to preserve the subject
- active text fades/slides in
- inactive text collapses to the minimal version

The transition should feel like **one continuous composition**, not three separate cards.

Avoid abrupt switching, hard cuts, modal windows, or page navigation.

### VISUAL STYLE

Premium editorial technology portfolio.

Dark cinematic background.
Large typography.
Minimal UI.
High contrast.
Subtle technical details.
Thin borders.
Small monospace labels.
Elegant blue/cyan accent color.

The design should feel like a combination of:

**research laboratory + engineering portfolio + premium editorial website**

Avoid:

- generic dashboard UI
- excessive glassmorphism
- excessive neon
- cyberpunk aesthetics
- too many cards
- excessive icons
- cluttered text
- traditional 3-column card layouts

The three images must remain the **primary visual element**.

The interaction between the three panels is the core of the section.

### RESPONSIVE BEHAVIOR

Desktop:
Three panels remain horizontally aligned.

Tablet:
Use approximately 50% / 25% / 25% when one panel is active.

Mobile:
Transform into a vertical stack or swipeable accordion while preserving the same interaction principle:
one panel expanded, the others collapsed.

Overall goal:

Create a **single immersive section** where the viewer explores the journey from:

**ACADEMIC → INDUSTRY → RESEARCH**

simply by selecting one of the three images.
