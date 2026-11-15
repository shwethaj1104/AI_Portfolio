# Portfolio redesign: motion, dimension, and evidence

This revision follows the user's feedback: lighten Orbit, replace the typography, increase reading sizes, completely replace directions 02–05, and make motion part of the visual identity throughout the page.

## Research before design

Reviewed these primary sources before implementing the new directions:

- [Akshita Sharma — Forward Deployed Engineer](https://akshita2k.github.io/): customer context, delivery, and an interactive view of the engineering approach. This informed the professional narrative, not copied layouts or claims.
- [Ali Adil Waseem — interactive AI portfolio](https://github.com/OK-ALI/portfolio): neural graph interactions and explicit offscreen animation pausing. This is a relevant AI-engineering example, not a claim of measured popularity.
- [Rauno Freiberg](https://rauno.me/): interaction design as engineering craft and careful detail.
- [Seyi](https://www.seyi.dev/): expressive typographic composition and project-led reading rhythm. The site lists its own Awwwards recognition; no such recognition is claimed for this project.
- [Lusion](https://lusion.co/): dimensional storytelling and motion-led creative development, including work listed for Devin AI. This is a studio reference, not an individual FDE portfolio.
- [Bruno Simon](https://bruno-simon.com/): memorable exploration and spatial identity.
- [Hamel Husain](https://hamel.dev/): useful AI systems and evaluation before unsupported performance claims.

These form a mixed reference set: AI/FDE sources for substance and creative engineering sources for visual interaction. There is no defensible universal ranking of the “most famous FDE portfolios.” No source assets, source code, branding, or project claims were copied.

## The five art directions

| View | Identity | Palette | Distinct experience |
|---|---|---|---|
| 01 Orbit | Connected intelligence | Ivory, deep teal, copper | Pointer-responsive particle sphere, floating annotations, airy project cards |
| 02 Prism | Dimensional thinking | Pearl, indigo, soft coral | Particle torus, open asymmetric composition, alternating elevated project stages |
| 03 Current | Signal through complexity | Cloud, cobalt, mint | A vivid wave-field opening and interactive project lab with animated workflow paths |
| 04 Materia | Engineering as a human craft | Sand, rust, olive | Interlaced particle orbits, tactile horizontal project collection, warm visual pacing |
| 05 Synapse | The human/machine connection | Medium slate, citrus, apricot | Neural particle helix, interactive capability explorer, numbered project stories |

The existing query IDs (`orbit`, `editorial`, `blueprint`, `studio`, `workspace`) remain compatible. Display names and descriptions are editable in `src/data/sitecore.ts`.

## Typography and contrast

Manrope provides confident, rounded sans-serif display typography. DM Sans provides readable body copy; IBM Plex Mono is reserved for technical labels. Body text is generally 15–17px, with larger lead paragraphs; key metadata is 11–14px. Small coordinates inside decorative mathematical graphics are subordinate and never the only place meaningful information appears.

Each design has its own foreground, secondary-text, accent, and surface tokens. Main body, secondary text, and primary button color pairs were checked mathematically against a minimum 4.5:1 contrast target. This is a token-level contrast check, not a claim of a complete WCAG audit.

## Motion architecture

- GSAP choreographs hero entrances, scroll-triggered section reveals, and subtle contact-sculpture parallax.
- Lenis is the only smooth-scroll engine; it feeds GSAP ScrollTrigger and cleans up on design changes. Native scrolling remains when reduced motion is enabled.
- Canvas 2D projects original mathematical point fields: sphere, torus, wave, constellation, helix, and sparse ambient networks. These are procedural data graphics, not screenshots or imitations of source artwork.
- Point fields are capped at 40fps with a device pixel ratio cap of 1.75. They pause offscreen and when the document is hidden, react to reduced-motion preference changes, and release frames, observers, and event listeners on cleanup.
- Offscreen project-diagram animation pauses through IntersectionObserver. Background networks have low opacity and a central mask to protect text. Content and controls are rendered independently of the artwork.
- No Three.js engine was added: mathematical projection delivers the desired dimensional identity with a smaller static bundle and no WebGL requirement.

## Preserved product contracts

React + Vite remains a static client-side app. The editable data file, original resume, all seven Project 01 screenshots, image/video carousel, nested Project 01 video folder, project case-study dialog, and GitHub Pages workflow are preserved. Missing fine-tuning and agent implementation details remain clearly pending.

## Verification and limits

TypeScript and the Vite production build must pass. Local media paths and palette contrast are checked directly. Native browser tooling is unavailable in this environment (no browser surfaces; native pipe startup failure), so rendered desktop/mobile appearance and hands-on browser interaction are not verified here.


## Identity, contact, and skills revision

Removed all rendered SJ/initials branding and abbreviated names. Added a shared animated contact dialog with email, Gmail compose, telephone, copy feedback, and corrected LinkedIn. All five variants now use the dedicated seven-domain skills graph: clickable domain nodes, animated connection paths, derived tool counts, and contextual evidence lenses. The old About skills list and the duplicate Synapse skill console were removed. Toolkit descriptions and contact copy live in the same content file as the professional data.


## Color Lab, career, and contact refinements

Twenty additional palettes (12 light, 8 dark) are available to every design, with independent saved choices. Each palette maps page, surface, text, secondary text, border, primary action, action text, and secondary accent roles. Shared neutral roles are derived by blending the palette background toward the appropriate dark/light text anchor. Main and secondary text are checked over both page and surface colors; action text is checked over the action fill. All 100 declared pairs meet 4.5:1. These are token checks, not screenshots of actual rendered composites. Palette changes also refresh particle canvases.

Career uses a chronological station route with a selected-role lens and two views: delivery and working approach. Figures remain traceable to the supplied resume: 14-day delivery, 7+ banking applications, four engineers guided, 75% initial-load improvement, 40-to-10-second load improvement, two interns mentored, and 10+ enterprise applications.

The Hello modal is a single card with no internal scrollbar or footer strip, with responsive compact/landscape layouts and a faint, projected 3D helix behind the contact methods.


## Mid-tone palette and personal fieldnotes revision

Added eight **Balanced** palettes to address the preference for neither very pale nor very dark surfaces. Their page colors are chromatic mid-tones, with surfaces blended 31% toward white. Foreground and secondary text remain substantially darker, with primary action text selected for contrast. All 140 primary text/surface/button pairs across 28 palettes pass the 4.5:1 token target. The original Orbit palette and saved preferences are preserved.

Section 04 now presents a personal point of view through selectable fieldnotes: understand the person, connect the system, own the delivery, and share the learning. An animated mathematical particle form changes with selection. No hobbies, personal history, or additional achievements were fabricated. Education and recognition remain available below.
