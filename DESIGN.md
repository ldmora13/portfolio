---
version: "1.0"
name: "Mora Portfolio"
description: "Editorial dark portfolio with an asymmetric navigation panel and motion-led typography."
stack:
  framework: "Next.js App Router"
  styling: "Tailwind CSS v4"
  motion: "Motion for React"
colors:
  light:
    background: "#E8E8E8"
    foreground: "#212121"
  dark:
    background: "#262626"
    foreground: "#F5F5F5"
typography:
  display:
    fontFamily: "System UI stack"
    fontWeight: 800
    case: "uppercase"
  body:
    fontFamily: "System UI stack"
    fontWeight: 400
  metadata:
    fontFamily: "Geist Mono"
    case: "uppercase"
rounded:
  base: "0px"
---

## Design direction

The portfolio uses a restrained editorial and technical visual language. The interface is monochromatic, spacious, and typography-led. The hero remains the visual focus while the navigation enters as a high-contrast utility surface.

- Design variance: 6/10
- Motion intensity: 5/10
- Visual density: 4/10
- Primary accent: current foreground color
- Theme: light and dark tokens share the same hierarchy
- Radius: sharp geometry, no decorative rounded containers

## Color system

The page uses one neutral palette in both themes. Components should consume the semantic Tailwind tokens instead of hard-coding page colors.

- `bg-background`: `#E8E8E8` in light mode, `#262626` in dark mode
- `text-foreground`: `#212121` in light mode, `#F5F5F5` in dark mode
- Borders: current color with low opacity
- Backdrop: neutral black at low opacity with a subtle blur
- Shadows: tinted black, used only to separate the navigation surface

## Typography

- Hero mark: large monospace SVG treatment rendered by `TextHero`
- Display navigation: system UI, uppercase, extra bold, tight tracking
- Body and controls: system UI with clear weight contrast
- Navigation indices: Geist Mono, small size, reduced opacity
- Navigation labels preserve spaces with `white-space: nowrap`
- Display text must never be clipped by a fixed line-height or per-letter overflow

## Page layout

- The page root uses `min-h-[100dvh]` and `overflow-hidden`.
- The header is absolutely positioned at the top with the contact action on the left and the menu control on the right.
- The hero is centered and occupies the available viewport without changing the header position.
- Footer metadata is anchored to the bottom edge.
- The menu button remains in the same header position while the navigation is open.

## Navigation

The navigation is implemented by `components/Menu.tsx` and `components/ui/Navbar.tsx`.

### Closed state

- A compact `Menu` control sits at the top-right of the header.
- The control exposes `aria-expanded`, `aria-controls`, and an accessible label.
- Hover and focus states reduce opacity without changing layout.

### Open state

- Desktop: a fixed panel occupies the right side of the viewport, capped at `28rem`.
- Mobile: the panel uses `inset-0` and `w-full`, occupying the entire screen.
- The original menu control stays above the panel and changes its label to `Close`.
- A low-opacity backdrop separates the panel from the hero and closes the menu on click.
- `Escape` closes the menu.
- The panel uses `role="dialog"` and `aria-modal="true"`.
- Navigation links close the panel after selection.

### Navigation list

- Links are stacked vertically and aligned to the right.
- Each row has a subtle bottom border and a stable vertical rhythm.
- The item index is placed opposite the label as technical metadata.
- Labels animate as a complete line, not as independent characters. This prevents duplicated or clipped words during hover.
- The list collapses to the same single-column structure at every viewport size.

## Motion

Motion communicates hierarchy and interaction feedback:

- Navigation labels roll vertically on hover over 300ms.
- Backdrop blur and opacity create separation without moving page content.
- Only `transform` and `opacity` are animated.
- `Escape` and focus-visible states remain immediate and predictable.
- Components should respect `prefers-reduced-motion` when additional page motion is introduced.

## Responsive behavior

- Breakpoint: `sm` at 640px.
- Below `sm`, the navigation panel is full viewport width and height.
- At `sm` and above, the panel is right aligned with a maximum width.
- Mobile uses `px-6`; desktop uses `sm:px-10`.
- Navigation labels use `text-3xl` on mobile, `sm:text-4xl`, and `lg:text-5xl`.
- No horizontal scrolling is allowed in the menu or page shell.

## Accessibility

- Interactive controls use semantic buttons and links.
- Every menu state has an accessible label.
- Focus rings use `focus-visible` and current foreground color.
- The backdrop is decorative for assistive technology and does not create a duplicate close control.
- The menu can be closed by button, link selection, backdrop click, or `Escape`.
- Text contrast must remain readable in both theme tokens.

## Component responsibilities

- `app/page.tsx`: page composition, hero, header, and footer.
- `components/Menu.tsx`: open state, close behavior, backdrop, responsive navigation surface.
- `components/ui/Navbar.tsx`: navigation data, links, indices, and text-roll interaction.
- `app/globals.css`: theme tokens, color scheme, and global typography defaults.

## Do and do not

- Do preserve the menu button position between closed and open states.
- Do keep the mobile panel full screen.
- Do use semantic tokens and stable focus states.
- Do keep navigation labels readable before adding motion.
- Do not reintroduce per-character transforms that can overlap or clip labels.
- Do not add a second accent color or decorative status dots.
- Do not use `h-screen`; prefer `min-h-[100dvh]`.
- Do not use broad layout shifts when opening the menu.
