# Maygo Component Library

## Overview
This document describes the reusable components in the Maygo application.

## Button Component

### Usage
```tsx
import Button from '@/components/Button';

<Button
  onClick={() => handleClick()}
  variant="primary"
  size="lg"
  icon={<ArrowRight size={20} />}
>
  Click Me
</Button>
```

### Props
- **children** (ReactNode) - Button text/content
- **onClick** (function) - Click handler
- **variant** ('primary' | 'secondary' | 'ghost') - Style variant
- **size** ('sm' | 'md' | 'lg') - Button size
- **className** (string) - Additional CSS classes
- **disabled** (boolean) - Disable button
- **type** ('button' | 'submit' | 'reset') - HTML type
- **icon** (ReactNode) - Icon to display

### Variants
- **primary**: Green background (default Maygo style)
- **secondary**: Gray background for secondary actions
- **ghost**: Transparent with green text

### Sizes
- **sm**: Small padding (px-4 py-2)
- **md**: Medium padding (px-6 py-3)
- **lg**: Full width (px-8 py-4)

### Animations
- Hover scale: 1.02
- Tap scale: 0.98
- Smooth transitions

---

## Card Component

### Usage
```tsx
import Card from '@/components/Card';

<Card variant="premium" className="p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Props
- **children** (ReactNode) - Card content
- **className** (string) - Additional CSS classes
- **onClick** (function) - Click handler
- **variant** ('premium' | 'soft' | 'glass') - Style variant
- **animated** (boolean) - Enable entrance animation (default: true)

### Variants
- **premium**: White background with soft shadow (default)
- **soft**: Gradient light background
- **glass**: Glassmorphism effect with backdrop blur

### Animation
- Initial: opacity 0, y 20px
- Animate: opacity 1, y 0
- Duration: 500ms
- Trigger: On viewport intersection (once)

### Styling
- Border radius: 24px
- Padding: Customizable
- Shadow: Soft shadow on hover
- Hover effect: Scale 1.02, increased shadow

---

## Input Component

### Usage
```tsx
import Input from '@/components/Input';

<Input
  type="email"
  placeholder="Enter email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  icon={<Mail size={20} />}
  label="Email Address"
/>
```

### Props
- **placeholder** (string) - Placeholder text
- **type** (string) - Input type (default: 'text')
- **value** (string) - Input value
- **onChange** (function) - Change handler
- **className** (string) - Additional CSS classes
- **icon** (ReactNode) - Left icon
- **label** (string) - Label text above input

### Styling
- Border: 2px gray (focus: maygo-green)
- Border radius: 16px
- Padding: 12px (left: 16px if icon)
- Focus state: Green border, no outline

### Icon Positioning
- Icons positioned left of input
- Padding adjusted when icon present
- Icon color: Gray-400

---

## BottomNav Component

### Usage
```tsx
import BottomNav from '@/components/BottomNav';

<BottomNav />
```

### Props
None - Automatically routes to current page

### Features
- Fixed bottom position (mobile)
- 4 navigation items: Home, Search, Records, Assistant
- Active state highlighting
- Smooth transitions
- Touch-optimized

### Active States
- Background: Light green background
- Text: Maygo green color
- Inactive: Gray text with hover effects

### Integration
Automatically uses `usePathname()` to determine active tab.

---

## Component Best Practices

### Creating New Components

```tsx
import { motion } from 'framer-motion';

interface MyComponentProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MyComponent({
  children,
  className = '',
  onClick,
}: MyComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`rounded-2xl transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
```

### Styling Rules
1. Use Tailwind utility classes
2. Use design tokens (colors, spacing)
3. Keep component width flexible
4. Use semantic HTML elements
5. Add ARIA labels for accessibility

### Animation Guidelines
1. Keep animations under 500ms
2. Use `motion` from Framer Motion
3. Include `whileHover` and `whileTap` for interactivity
4. Use viewport triggers for entrance animations

### TypeScript
1. Always define component props interface
2. Mark optional props with `?`
3. Provide default prop values
4. Use semantic type names

---

## Tailwind Classes Reference

### Colors
```tsx
// Primary
className="bg-maygo-green-500 text-maygo-green-600"

// Dark
className="bg-dark-primary text-dark-secondary"

// Neutrals
className="bg-white text-gray-600"
className="bg-surface-light border-gray-200"
```

### Spacing
```tsx
// Margins
className="mb-4 mt-6 mx-2"

// Padding
className="p-6 px-4 py-3"

// Gap (flexbox/grid)
className="gap-4 gap-x-2 gap-y-6"
```

### Border Radius
```tsx
// Rounded corners
className="rounded-2xl"    // 16px
className="rounded-3xl"    // 24px
className="rounded-full"   // Circle
```

### Shadows
```tsx
// Soft shadows
className="shadow-soft-md"
className="shadow-soft-lg"

// Glow effect
className="shadow-glow"
```

### Responsive
```tsx
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="text-sm md:text-base lg:text-lg"
className="px-4 md:px-6 lg:px-8"
```

---

## Performance Tips

### Image Optimization
```tsx
// Use Next.js Image when possible
import Image from 'next/image';

<Image
  src="/image.png"
  alt="Description"
  width={200}
  height={200}
  priority={false}
/>
```

### Code Splitting
```tsx
// Use dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
});
```

### Memoization
```tsx
import { memo } from 'react';

export default memo(function MyComponent(props) {
  return <div>{props.children}</div>;
});
```

---

## Accessibility Guidelines

### ARIA Labels
```tsx
<button aria-label="Close menu">✕</button>
<input
  aria-label="Search medicines"
  placeholder="Search"
/>
```

### Semantic HTML
```tsx
// Good
<nav><ul><li><a href="/search">Search</a></li></ul></nav>
<button onClick={handleSubmit}>Submit</button>
<main><section><h2>Title</h2></section></main>

// Bad
<div role="navigation"><div onclick="...">Search</div></div>
<div role="button">Submit</div>
```

### Color Contrast
- Ensure text contrast ratio ≥ 4.5:1
- Don't rely solely on color to convey information
- Test with accessibility checkers

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Tab order should be logical
- Provide focus indicators

---

## Component Patterns

### Loading States
```tsx
{isLoading ? (
  <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
) : (
  <div>{content}</div>
)}
```

### Error States
```tsx
{error ? (
  <div className="p-4 bg-red-100 text-red-700 rounded-lg">
    Error: {error.message}
  </div>
) : null}
```

### Empty States
```tsx
{items.length === 0 ? (
  <div className="text-center py-12">
    <p className="text-gray-600">No items found</p>
  </div>
) : (
  <div>{/* items */}</div>
)}
```

---

## Component Testing

### Unit Test Example
```tsx
import { render, screen } from '@testing-library/react';
import Button from '@/components/Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick handler', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);
    screen.getByText('Click').click();
    expect(onClick).toHaveBeenCalled();
  });
});
```

---

## Common Issues & Solutions

### Button not responding
- Check if `disabled` prop is true
- Verify `onClick` handler is attached
- Check for parent `pointer-events: none`

### Input not showing placeholder
- Verify placeholder text is provided
- Check CSS for placeholder styling
- Ensure input is not readonly

### Card animation too fast/slow
- Adjust `transition` duration in component
- Check for conflicting CSS animations
- Verify Framer Motion is installed

### Icons not displaying
- Verify icon import from 'lucide-react'
- Check icon size prop (default: 24)
- Ensure proper color classes applied

---

## Future Component Plans

- [ ] Modal/Dialog component
- [ ] Toast/Notification component
- [ ] Dropdown menu component
- [ ] Image carousel component
- [ ] Form validation wrapper
- [ ] Date picker component
- [ ] Tab navigation component
- [ ] Tooltip component

---

**Last Updated**: May 2026
**Maintained By**: Frontend Team
