---
name: Maygo Lush
colors:
  surface: '#f9f9f8'
  surface-dim: '#d9dad9'
  surface-bright: '#f9f9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f3'
  surface-container: '#edeeed'
  surface-container-high: '#e7e8e7'
  surface-container-highest: '#e1e3e2'
  on-surface: '#191c1c'
  on-surface-variant: '#414943'
  inverse-surface: '#2e3131'
  inverse-on-surface: '#f0f1f0'
  outline: '#717973'
  outline-variant: '#c1c8c1'
  surface-tint: '#3e6750'
  primary: '#002d1a'
  on-primary: '#ffffff'
  primary-container: '#1a432f'
  on-primary-container: '#84b096'
  inverse-primary: '#a4d1b5'
  secondary: '#336b20'
  on-secondary: '#ffffff'
  secondary-container: '#b1f195'
  on-secondary-container: '#386f24'
  tertiary: '#132c0f'
  on-tertiary: '#ffffff'
  tertiary-container: '#284223'
  on-tertiary-container: '#91ae86'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c0edd1'
  primary-fixed-dim: '#a4d1b5'
  on-primary-fixed: '#002112'
  on-primary-fixed-variant: '#264f3a'
  secondary-fixed: '#b4f398'
  secondary-fixed-dim: '#99d77f'
  on-secondary-fixed: '#042100'
  on-secondary-fixed-variant: '#1b5208'
  tertiary-fixed: '#ccebc0'
  tertiary-fixed-dim: '#b0cfa5'
  on-tertiary-fixed: '#082106'
  on-tertiary-fixed-variant: '#334d2d'
  background: '#f9f9f8'
  on-background: '#191c1c'
  surface-variant: '#e1e3e2'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.01em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 20px
  margin: 24px
---

## Brand & Style

This design system is anchored in a high-trust, premium healthcare narrative that blends clinical precision with organic warmth. The visual language utilizes **Claymorphism** and **Neumorphism** to create a tactile, "squishy" environment that feels approachable and safe. By moving away from flat, sterile interfaces, this system evokes an emotional response of comfort and vitality.

The aesthetic is defined by:
- **Organic Depth:** Soft, extruded 3D shapes that mimic physical, inflated objects.
- **Lush Vitality:** A reliance on verdant gradients to symbolize growth and health.
- **Friendly Professionalism:** A balance of soft geometric forms and highly legible, structured typography.

## Colors

The palette transition from a deep, authoritative forest green to a vibrant, energetic lime green. This spectrum represents the journey from stability to recovery.

- **Primary:** Deep Forest (#1A432F) used for high-contrast text and primary actions.
- **Secondary:** Vibrant Lime (#98D67E) used for highlights, 3D character accents, and secondary buttons.
- **Backgrounds:** A soft off-white (#F8F9F8) serves as the base to keep the interface feeling airy, while subtle light grays provide the necessary shadow depth for neumorphic effects.
- **Gradients:** Core components should utilize the "Vibrant Lime" gradient to create a sense of internal illumination and 3D volume.

## Typography

This design system uses **Plus Jakarta Sans** for headlines to provide a friendly, rounded geometric feel that complements the claymorphic UI elements. **Inter** is utilized for body copy and labels to ensure maximum legibility for health data and instructions.

Hierarchy is maintained through generous line heights and slight tracking adjustments in headlines to prevent a "crowded" feel. Text color should primarily remain in the "Deep Forest" range rather than pure black to maintain the organic theme.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** with an emphasis on generous whitespace to reduce cognitive load, which is critical in healthcare contexts.

- **Rhythm:** A 4px baseline grid ensures vertical consistency.
- **Padding:** "Generous" is the guiding principle. Cards and containers should use `lg` (40px) padding to allow elements to "breathe" within their claymorphic shells.
- **Margins:** Screen edges use a minimum of 24px margins to prevent the UI from feeling cramped.

## Elevation & Depth

This system utilizes a hybrid of **Claymorphism** and **Ambient Shadows** to create a 3D interface.

1.  **Outer Shadows:** Objects use two-tone soft shadows. A darker, tinted shadow (Forest Green at 10% opacity) on the bottom right and a white highlight (100% opacity) on the top left to create an extruded effect.
2.  **Internal Glows:** To achieve the "Clay" look, components use inner shadows (inset) to simulate light hitting the edges of a soft, rounded object.
3.  **Floating Elements:** Interactive components like primary buttons should appear to "hover" higher than the background, utilizing a larger blur radius (20px+) for their shadows.

## Shapes

The shape language is strictly **Pill-shaped** and hyper-rounded. There are no sharp corners in the design system.

- **Buttons:** Always fully rounded (pill-shaped).
- **Cards:** Use `rounded-xl` (3rem/48px) to maintain the organic, soft aesthetic.
- **Form Inputs:** Follow the pill-shaped button convention to create a unified interactive language.

## Components

### Buttons
Primary buttons are large, pill-shaped, and use the Vibrant Lime gradient. They must feature a subtle internal top-white highlight and a soft, diffused bottom shadow to appear 3D.

### Cards
Cards are treated as soft "pods." They use a white or soft-white background with a very subtle 1px border (#E0E7E1). Internal padding is significant (40px) to keep content centered and focused.

### Input Fields
Inputs are recessed (inset shadow) to appear as though they are carved into the surface, creating a "Neumorphic" interaction. Text inside should be the Deep Forest green.

### Chips/Tags
Used for health categories or status. These are smaller pill shapes with a solid light-green background (#DFFFD2) and Deep Forest text.

### Progress Indicators
Progress bars should be thick and rounded, using the Vibrant Lime gradient for the "filled" state, appearing like a liquid filling a container.

### 3D Characters/Icons
Where possible, use high-quality 3D renders or icons that share the same claymorphic lighting—soft highlights on top, deep rounded shadows below.