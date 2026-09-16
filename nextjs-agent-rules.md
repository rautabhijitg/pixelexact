# PixelExact — Next.js Agent Rules

## 1. Project Objective

Build and maintain the PixelExact business website as a production-quality, fast, accessible, SEO-friendly, responsive, and maintainable Next.js application.

Primary goals:

- High-quality UX/UI
- Pixel-accurate implementation
- Excellent performance
- Strong technical SEO
- WCAG-conscious accessibility
- Clean and maintainable frontend architecture
- Reusable components
- Minimal unnecessary JavaScript
- Easy deployment on Hostinger

---

# 2. Technology Stack

Use the following stack unless explicitly instructed otherwise:

- Next.js 16+
- React
- TypeScript
- App Router
- SCSS/Sass
- BEM naming methodology
- CSS Custom Properties
- MDX for blog and case-study content
- next/image for images
- next/font for fonts
- ESLint
- Git/GitHub
- Hostinger for production hosting

Do NOT introduce:

- Tailwind CSS
- Bootstrap
- Material UI
- Chakra UI
- Ant Design
- CSS-in-JS libraries
- Redux unless a real requirement exists
- GraphQL unless a real requirement exists
- A database unless a real requirement exists
- A CMS unless explicitly requested

Avoid adding dependencies when native Next.js, React, TypeScript, CSS, or SCSS can solve the problem.

---

# 3. Core Development Principles

Follow these principles in every implementation:

1. Prefer simplicity over abstraction.
2. Prefer server rendering over client-side rendering.
3. Prefer static generation when content does not need to be dynamic.
4. Prefer semantic HTML.
5. Prefer native browser capabilities over dependencies.
6. Keep JavaScript minimal.
7. Keep components focused and reusable.
8. Do not prematurely optimize architecture.
9. Do not over-engineer simple requirements.
10. Never sacrifice accessibility for visual appearance.
11. Never sacrifice performance for unnecessary animation.
12. Preserve existing functionality when modifying code.
13. Do not make unrelated changes while implementing a feature.

---

# 4. Next.js Rules

Use the App Router.

Use Server Components by default.

Do NOT add:

```tsx
"use client";
```

unless the component requires client-side functionality such as:

- useState
- useEffect
- browser APIs
- event-driven interactive state
- client-only third-party libraries

Keep client components as small as possible.

Do not convert an entire page to a Client Component merely because one component requires interaction.

Bad:

```tsx
"use client";

export default function Page() {
  return (
    <>
      <StaticContent />
      <InteractiveMenu />
    </>
  );
}
```

Prefer:

```tsx
export default function Page() {
  return (
    <>
      <StaticContent />
      <InteractiveMenu />
    </>
  );
}
```

with only `InteractiveMenu` being a Client Component.

---

# 5. Routing

Use the Next.js App Router structure.

Primary routes:

```text
/
 /about
 /services
 /work
 /case-studies
 /blog
 /contact
```

Dynamic content:

```text
/case-studies/[slug]
/blog/[slug]
```

Use route groups when they improve organization without changing URLs.

Do not create unnecessary API routes.

---

# 6. TypeScript Rules

Use TypeScript throughout the application.

Avoid:

```ts
any
```

unless there is a documented and unavoidable reason.

Prefer explicit types:

```ts
type ButtonVariant =
  | "primary"
  | "secondary"
  | "text";
```

Use interfaces or types consistently.

Do not duplicate types across files.

Shared domain types should live in an appropriate `types` or `lib` location.

Use strict TypeScript configuration.

Do not suppress errors with:

```ts
// @ts-ignore
```

unless there is a documented reason.

Prefer fixing the underlying type problem.

---

# 7. SCSS Rules

SCSS is the only styling system for this project.

Do not use Tailwind utility classes.

Do not introduce another CSS framework.

Use SCSS for:

- Component styles
- Layout
- Responsive behavior
- Mixins
- Functions
- Shared styling primitives

Use CSS Custom Properties for design tokens that may be consumed at runtime.

Example:

```scss
:root {
  --color-primary: #0153ff;
  --color-text: #171717;
  --color-background: #ffffff;
}
```

SCSS should provide architecture; CSS variables should provide runtime design tokens.

---

# 8. BEM Rules

All component CSS classes must follow BEM.

Format:

```text
.block
.block__element
.block--modifier
```

Example:

```scss
.hero {}

.hero__content {}

.hero__title {}

.hero__description {}

.hero__actions {}

.hero__button {}

.hero--dark {}
```

Do not use:

```text
.hero .content
.hero .title
.blue-text
.big-button
.left-column
.margin-large
```

Avoid excessive nesting.

Do not create deeply nested BEM names such as:

```text
hero__content__wrapper__inner
```

Keep blocks independent and meaningful.

---

# 9. Component Architecture

Components should be organized by component.

Preferred structure:

```text
components/
├── Header/
│   ├── Header.tsx
│   └── Header.scss
│
├── Footer/
│   ├── Footer.tsx
│   └── Footer.scss
│
├── Button/
│   ├── Button.tsx
│   └── Button.scss
│
└── Hero/
    ├── Hero.tsx
    └── Hero.scss
```

A component's styles should normally live next to the component.

Do not create one giant global stylesheet for component-specific styling.

Global styles are reserved for:

- Reset
- Base HTML styles
- Typography foundation
- Tokens
- Global utilities
- Global layout primitives

---

# 10. Component Design Rules

Create components when:

- They are reused.
- They represent a meaningful UI pattern.
- They have their own behavior.
- They have their own styling.
- Extracting them improves readability.

Do not create components for every `<div>`.

Avoid unnecessary abstraction.

A component should have one clear responsibility.

Prefer:

```text
ProjectCard
BlogCard
ServiceCard
```

over a giant component containing unrelated conditional rendering.

---

# 11. Layout Rules

Use reusable layout primitives where appropriate:

```text
.container
.section
.grid
```

The main content container should use a consistent maximum width.

Do not hardcode arbitrary widths repeatedly across components.

Prefer design tokens:

```scss
max-width: var(--container-max-width);
```

rather than:

```scss
max-width: 1273px;
```

unless the design specifically requires it.

---

# 12. Responsive Design

Design mobile-first.

Primary breakpoints:

```text
Mobile
Tablet: 768px
Desktop: 1024px
Wide: 1440px
```

Do not create breakpoints for every individual device.

Use fluid layouts wherever possible.

Test at minimum:

```text
375px
768px
1024px
1440px
1920px
```

Do not assume desktop designs automatically work on mobile.

---

# 13. Accessibility

Accessibility is a core requirement.

Target:

```text
WCAG 2.2 AA
```

Use semantic HTML:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Use correct heading hierarchy.

Do not skip from:

```text
<h1>
```

to:

```text
<h4>
```

without a structural reason.

All interactive elements must be keyboard accessible.

All form controls require accessible labels.

Images require meaningful `alt` text unless they are decorative.

Decorative images should use:

```tsx
alt=""
```

Do not use ARIA when native HTML already provides the required semantics.

Provide visible focus states.

Respect:

```css
prefers-reduced-motion
```

Never rely solely on color to communicate information.

Check color contrast.

---

# 14. Images

Always prefer:

```tsx
next/image
```

over raw `<img>` for application images.

Use appropriate dimensions.

Use responsive sizing.

Use `priority` only for genuinely critical above-the-fold images.

Do not mark every image as priority.

Use modern image formats where appropriate.

Do not commit unnecessarily large source images.

Avoid:

```text
5MB hero image
```

when a properly optimized image can be substantially smaller.

Always provide meaningful alternative text.

---

# 15. Fonts

Use:

```text
next/font
```

for local or supported font loading.

Do not load fonts through unnecessary external CSS imports.

Avoid loading many font families or unnecessary font weights.

Only load the weights actually required by the design.

---

# 16. Animation

Animations must support usability, not exist merely for visual decoration.

Prefer CSS transitions and transforms.

Prefer:

```text
transform
opacity
```

for performant animation.

Avoid animating:

```text
width
height
top
left
```

when transform can achieve the same result.

Do not add an animation library unless the requirement genuinely needs it.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Avoid excessive animation, scroll-jacking, and distracting motion.

---

# 17. SEO

Every indexable page must have intentional metadata.

Use the Next.js Metadata API.

Metadata should include, where appropriate:

- title
- description
- canonical URL
- Open Graph metadata
- social metadata
- robots directives

Use:

```text
sitemap.xml
robots.txt
```

Generate them through Next.js where appropriate.

Use structured data when relevant:

```text
Organization
WebSite
Article
BreadcrumbList
Service
```

Do not add structured data that does not accurately represent page content.

Do not keyword-stuff content.

Do not create thin pages purely for SEO.

Every page should have a clear search/user intent.

---

# 18. Internal Linking

Use meaningful internal links between:

```text
Services
Work
Case Studies
Blog
Contact
```

Important pages should not become orphan pages.

Use descriptive anchor text.

Avoid generic anchor text such as:

```text
Click here
Read more
Learn more
```

when a more descriptive label is possible.

---

# 19. Blog

Use MDX initially.

Blog content should live under:

```text
content/blog/
```

Each post should support structured metadata such as:

```text
title
description
date
author
category
tags
image
```

Blog URLs should use readable slugs:

```text
/blog/design-systems-for-enterprise-products
```

not:

```text
/blog/post?id=123
```

Do not generate low-quality or repetitive AI content solely for search traffic.

---

# 20. Case Studies

Case studies should communicate:

```text
Problem
Context
Constraints
Research
UX Strategy
Design
Design System
Frontend Implementation
Accessibility
Results
Lessons
```

Use MDX for rich case-study content.

Case studies should be treated as major conversion and credibility assets.

---

# 21. Performance

Performance is a first-class requirement.

Target:

```text
Lighthouse Performance: 90+
Lighthouse Accessibility: 95+
Lighthouse SEO: 95+
```

Aim for excellent Core Web Vitals.

Prioritize:

- Server Components
- Static rendering
- Optimized images
- Optimized fonts
- Minimal JavaScript
- Limited third-party scripts
- Efficient CSS
- Lazy loading where appropriate

Do not optimize blindly.

Measure before making major performance changes.

---

# 22. JavaScript Rules

Do not use JavaScript when CSS or HTML can solve the problem.

Avoid unnecessary:

```text
useEffect
useState
useMemo
useCallback
```

Do not add client state simply because it is convenient.

Avoid shipping large libraries for simple functionality.

Keep interactive JavaScript isolated.

---

# 23. Third-Party Scripts

Third-party scripts must have a clear business purpose.

Before adding a third-party library/script, evaluate:

1. Does the website actually need it?
2. Can native functionality replace it?
3. What is the performance cost?
4. Does it affect privacy?
5. Does it affect accessibility?
6. Does it affect SEO?

Do not add unnecessary analytics, widgets, chat systems, trackers, or animation libraries.

---

# 24. Security

Never commit:

```text
API keys
tokens
passwords
private credentials
.env files containing secrets
```

Use environment variables.

Never expose server-only secrets to client-side code.

Do not use:

```text
NEXT_PUBLIC_
```

for secrets.

Validate external/user-provided input.

Sanitize or safely render external content.

---

# 25. Environment Variables

Use:

```text
.env.local
```

for local development.

Provide:

```text
.env.example
```

for required variable documentation.

Never commit `.env.local`.

Document every required environment variable.

---

# 26. Error Handling

Create appropriate:

```text
not-found.tsx
error.tsx
loading.tsx
```

where they improve the user experience.

404 pages should provide useful navigation.

Errors should not expose sensitive implementation details.

---

# 27. Data Fetching

Prefer server-side data fetching.

Do not fetch data from the browser if the data can safely be fetched on the server.

Use caching and revalidation appropriately.

Do not make static content dynamic without a reason.

---

# 28. Content Architecture

Separate content from presentation.

Blog and case-study content should not be hardcoded into large React components.

Prefer:

```text
content/
components/
app/
```

with each layer having a clear responsibility.

---

# 29. Naming

Use descriptive names.

Files:

```text
ProjectCard.tsx
BlogCard.tsx
Header.tsx
```

Variables:

```ts
project
blogPost
navigationItems
```

Avoid:

```ts
data
item
obj
temp
thing
```

unless their context genuinely makes the meaning obvious.

---

# 30. Git Rules

Use meaningful commits.

Examples:

```text
feat: add responsive header
feat: add case study card
fix: correct mobile navigation
fix: improve heading hierarchy
refactor: simplify blog content loader
perf: optimize hero image
a11y: improve keyboard focus states
seo: add article structured data
```

Do not commit:

```text
update
changes
final
final2
test
stuff
```

Keep commits focused.

---

# 31. Before Modifying Existing Code

Before changing a file:

1. Read the existing implementation.
2. Understand its dependencies.
3. Identify whether it is a Server or Client Component.
4. Check existing SCSS/BEM conventions.
5. Preserve working behavior.
6. Make the smallest appropriate change.

Do not rewrite working architecture without a reason.

---

# 32. Before Adding a Dependency

Ask:

```text
Can HTML solve this?
Can CSS solve this?
Can SCSS solve this?
Can React solve this?
Can Next.js solve this?
```

Only add a dependency when it provides meaningful value.

Document the reason for significant dependencies.

---

# 33. Visual Implementation

When implementing from Figma:

1. Inspect layout.
2. Identify design tokens.
3. Identify reusable components.
4. Identify responsive behavior.
5. Implement semantic structure.
6. Implement SCSS/BEM.
7. Compare against the design.
8. Fix spacing and typography.
9. Test responsive behavior.
10. Test accessibility.
11. Test performance.

Do not blindly reproduce every Figma layer as a DOM element.

Translate the design into a sensible semantic component architecture.

---

# 34. Pixel Accuracy

Pixel accuracy means reproducing the intended design accurately while maintaining:

- semantic HTML
- accessibility
- responsive behavior
- maintainability
- performance

Do not use hacks such as excessive absolute positioning merely to match a screenshot.

Avoid arbitrary negative margins unless they are genuinely part of the design system.

---

# 35. Mobile Navigation

Mobile navigation should:

- Be keyboard accessible
- Have an accessible name
- Correctly manage open/closed state
- Prevent confusing focus behavior
- Work without layout shifts
- Respect reduced motion

Only the navigation component should need client-side state.

Do not convert the entire header/page to a Client Component.

---

# 36. Forms

Use semantic HTML forms.

Provide:

- labels
- validation
- useful error messages
- keyboard support
- accessible status messages

Validate both client-side and server-side when appropriate.

Never trust client-side validation alone.

---

# 37. Testing

Before considering a feature complete:

### Functional

Verify the feature works.

### Responsive

Test:

```text
375px
768px
1024px
1440px
```

### Accessibility

Test keyboard navigation and automated accessibility checks.

### SEO

Check:

```text
title
description
canonical
headings
links
structured data
sitemap
robots
```

### Performance

Check:

```text
LCP
CLS
INP
image sizes
JavaScript payload
font loading
```

### Visual

Compare implementation against the approved design.

---

# 38. Hostinger Deployment

Production hosting is Hostinger.

Do not introduce Vercel-specific functionality unless explicitly requested.

Avoid relying on infrastructure unavailable on Hostinger.

The application must remain compatible with a standard Node.js Next.js deployment.

Production workflow:

```text
Local Development
        ↓
Git
        ↓
GitHub
        ↓
Hostinger
        ↓
Next.js Build
        ↓
Production
```

Before deployment:

```text
npm run lint
npm run build
```

The production build must complete successfully.

---

# 39. Build Validation

Before declaring a task complete, run the available validation commands.

At minimum:

```bash
npm run lint
npm run build
```

If tests exist:

```bash
npm test
```

Fix errors introduced by the implementation.

Do not claim a build is successful without actually verifying it.

---

# 40. Do Not Do These Things

Never:

- Add Tailwind
- Replace SCSS with another styling framework
- Turn all pages into Client Components
- Add unnecessary dependencies
- Create giant components
- Create giant SCSS files
- Use deeply nested CSS
- Ignore accessibility
- Ignore mobile layouts
- Add unnecessary animation
- Ship huge images
- Expose secrets
- Hardcode repeated content
- Create SEO spam pages
- Rewrite unrelated code
- Remove existing functionality without approval
- Claim something was tested when it was not tested
- Claim something was deployed when it was not deployed

---

# 41. Definition of Done

A feature is complete only when:

```text
[ ] Functionality works
[ ] TypeScript passes
[ ] ESLint passes
[ ] Production build passes
[ ] SCSS follows project architecture
[ ] BEM naming is correct
[ ] Responsive behavior works
[ ] Keyboard accessibility works
[ ] Images are optimized
[ ] SEO requirements are addressed
[ ] No unnecessary client-side JavaScript
[ ] No unnecessary dependencies
[ ] Existing functionality is preserved
[ ] Git changes are focused
```

---

# 42. Agent Behavior

When working on PixelExact:

- Inspect before modifying.
- Reuse before creating.
- Simplify before adding dependencies.
- Prefer server-side solutions.
- Keep client-side code isolated.
- Follow SCSS + BEM strictly.
- Preserve the design system.
- Think about SEO during implementation, not after it.
- Think about accessibility during implementation, not after it.
- Think about performance during implementation, not after it.
- Explain important architectural tradeoffs.
- If requirements conflict, prioritize:
  1. Correctness
  2. Accessibility
  3. Performance
  4. Maintainability
  5. SEO
  6. Visual fidelity
  7. Convenience

Never make large architectural changes silently.

When a requirement is ambiguous and could materially affect architecture, stop and ask for clarification rather than making a large assumption.