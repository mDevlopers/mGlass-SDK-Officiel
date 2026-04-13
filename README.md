# 🧊 mGlass SDK — Liquid Glass UI Kit

<p align="center">
  <strong>A premium CSS design system inspired by Apple's visionOS / Liquid Glass aesthetic.</strong>
  <br/>
  <em>Glassmorphism components • Dark mode • Smooth animations • Production-ready</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
  <img src="https://img.shields.io/badge/CSS-pure-orange" alt="Pure CSS" />
  <img src="https://img.shields.io/badge/size-~65KB-purple" alt="Size" />
</p>

---

## ✨ Features

- 🧊 **Liquid Glass Effects** — Blur, transparency, and premium glass aesthetics
- 🎨 **Complete Design System** — CSS variables, typography, spacing, colors
- 🌓 **Dark/Light/Custom Themes** — 5 built-in themes + easy customization
- ⚡ **Smooth Animations** — Entrance, hover, and continuous micro-interactions
- 📱 **Fully Responsive** — Mobile-first, works everywhere
- ♿ **Accessible** — Respects `prefers-reduced-motion`
- 🪶 **Zero Dependencies** — Pure CSS, no JavaScript required
- 📦 **NPM Ready** — Install and import instantly

---

## 📦 Installation

### NPM

```bash
npm install mglass-sdk
```

Then import in your project:

```html
<link rel="stylesheet" href="node_modules/mglass-sdk/dist/mglass.css">
```

Or in a bundler:

```css
@import 'mglass-sdk/dist/mglass.css';
```

### CDN (coming soon)

```html
<link rel="stylesheet" href="https://unpkg.com/mglass-sdk@1.0.0/dist/mglass.css">
```

### Manual

Download `dist/mglass.css` and include it in your HTML:

```html
<link rel="stylesheet" href="mglass.css">
```

---

## 🚀 Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="mglass.css">
  <title>My Glass App</title>
</head>
<body>

  <div class="glass-card glass-animate-in" style="max-width: 400px; margin: 100px auto;">
    <h3 class="glass-card-title">Hello mGlass 🧊</h3>
    <p class="glass-card-text">This is a Liquid Glass card component.</p>
    <button class="glass-btn glass-btn-primary glass-mt-md">Get Started</button>
  </div>

</body>
</html>
```

---

## 🧱 Components

### 🧊 Glass Core

Apply glass effects to any element:

```html
<div class="glass">Basic glass effect</div>
<div class="glass-frosted">Apple-style frosted glass</div>
<div class="glass-liquid">Premium liquid shimmer effect</div>
<div class="glass-heavy">Heavy blur glass</div>
<div class="glass-light">Subtle glass</div>
```

### 🃏 Cards

```html
<div class="glass-card">
  <h3 class="glass-card-title">Card Title</h3>
  <p class="glass-card-subtitle">Subtitle here</p>
  <p class="glass-card-text">Body content goes here.</p>
</div>

<!-- With sections -->
<div class="glass-card">
  <div class="glass-card-header">Header</div>
  <div class="glass-card-body">Content</div>
  <div class="glass-card-footer">Footer</div>
</div>

<!-- Stat card -->
<div class="glass-card glass-card-stat">
  <div class="glass-card-stat-value">42K</div>
  <div class="glass-card-stat-label">Users</div>
</div>

<!-- Interactive -->
<div class="glass-card glass-card-interactive">Click me!</div>
```

### 🔘 Buttons

```html
<button class="glass-btn">Default</button>
<button class="glass-btn glass-btn-primary">Primary</button>
<button class="glass-btn glass-btn-success">Success</button>
<button class="glass-btn glass-btn-danger">Danger</button>
<button class="glass-btn glass-btn-warning">Warning</button>
<button class="glass-btn glass-btn-ghost">Ghost</button>
<button class="glass-btn glass-btn-pill">Pill Shape</button>

<!-- Sizes -->
<button class="glass-btn glass-btn-xs">Extra Small</button>
<button class="glass-btn glass-btn-sm">Small</button>
<button class="glass-btn glass-btn-lg">Large</button>
<button class="glass-btn glass-btn-xl">Extra Large</button>

<!-- States -->
<button class="glass-btn glass-btn-loading">Loading</button>
<button class="glass-btn" disabled>Disabled</button>
```

### 🧭 Navbar

```html
<nav class="glass-navbar">
  <a class="glass-navbar-brand" href="#">🧊 MyApp</a>
  <ul class="glass-navbar-menu">
    <li><a class="glass-navbar-link active" href="#">Home</a></li>
    <li><a class="glass-navbar-link" href="#">About</a></li>
    <li><a class="glass-navbar-link" href="#">Contact</a></li>
  </ul>
  <div class="glass-navbar-actions">
    <button class="glass-btn glass-btn-sm glass-btn-primary">Sign Up</button>
  </div>
</nav>
```

### 💬 Modal

```html
<div class="glass-modal-backdrop open">
  <div class="glass-modal open">
    <div class="glass-modal-header">
      <span class="glass-modal-title">Modal Title</span>
      <button class="glass-modal-close">✕</button>
    </div>
    <div class="glass-modal-body">
      <p>Your modal content here.</p>
    </div>
    <div class="glass-modal-footer">
      <button class="glass-btn glass-btn-ghost">Cancel</button>
      <button class="glass-btn glass-btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

### 📝 Form Inputs

```html
<div class="glass-form-group">
  <label class="glass-label">Email</label>
  <input class="glass-input" type="email" placeholder="you@example.com">
  <span class="glass-form-hint">We'll never share your email.</span>
</div>

<textarea class="glass-input glass-textarea" placeholder="Message..."></textarea>
<select class="glass-input glass-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### 🏷️ Badges

```html
<span class="glass-badge">Default</span>
<span class="glass-badge glass-badge-primary">Primary</span>
<span class="glass-badge glass-badge-success glass-badge-dot">Online</span>
<span class="glass-badge glass-badge-danger">Error</span>
```

### 🔔 Toasts

```html
<div class="glass-toast glass-toast-success">
  ✅ Operation completed successfully!
</div>
```

### 👤 Avatars

```html
<div class="glass-avatar">M</div>
<div class="glass-avatar glass-avatar-lg">AB</div>

<div class="glass-avatar-group">
  <div class="glass-avatar">A</div>
  <div class="glass-avatar">B</div>
  <div class="glass-avatar">C</div>
</div>
```

### 📊 Progress Bar

```html
<div class="glass-progress">
  <div class="glass-progress-bar" style="width: 65%"></div>
</div>
```

### 🔀 Toggle Switch

```html
<label class="glass-switch">
  <input type="checkbox" checked>
  <span class="glass-switch-slider"></span>
</label>
```

### 📑 Tabs

```html
<div class="glass-tabs">
  <button class="glass-tab active">Overview</button>
  <button class="glass-tab">Details</button>
  <button class="glass-tab">Settings</button>
</div>
```

---

## ✨ Animations

```html
<!-- Entrance animations -->
<div class="glass-card glass-animate-in">Fade in</div>
<div class="glass-card glass-animate-in-up">Fade in up</div>
<div class="glass-card glass-animate-scale-in">Scale in</div>
<div class="glass-card glass-animate-blur-in">Blur in</div>

<!-- Stagger children -->
<div class="glass-card glass-animate-in glass-delay-1">First</div>
<div class="glass-card glass-animate-in glass-delay-2">Second</div>
<div class="glass-card glass-animate-in glass-delay-3">Third</div>

<!-- Continuous effects -->
<div class="glass-card glass-animate-glow">Glowing</div>
<div class="glass-card glass-animate-float">Floating</div>

<!-- Hover interactions -->
<div class="glass-card glass-hover-lift">Lifts on hover</div>
<div class="glass-card glass-hover-scale">Scales on hover</div>
<div class="glass-card glass-hover-glow">Glows on hover</div>
```

---

## 🎨 Themes

### Built-in Themes

```html
<!-- Dark (default) -->
<body data-theme="dark">

<!-- Light -->
<body data-theme="light">

<!-- Midnight (deep blue) -->
<body data-theme="midnight">

<!-- Sunset (warm orange) -->
<body data-theme="sunset">

<!-- Aurora (teal green) -->
<body data-theme="aurora">
```

### Background Presets

```html
<body class="glass-bg-cosmic">   <!-- Purple/Pink gradient -->
<body class="glass-bg-ocean">    <!-- Deep blue gradient -->
<body class="glass-bg-forest">   <!-- Green gradient -->
<body class="glass-bg-ember">    <!-- Red/Orange gradient -->
<body class="glass-bg-void">     <!-- Dark gradient -->
<body class="glass-bg-nebula">   <!-- Pastel gradient -->
```

---

## ⚙️ Customization

Override CSS variables to customize the entire design system:

```css
:root {
  /* Glass core */
  --glass-blur: 24px;
  --glass-opacity: 0.1;
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-radius: 20px;

  /* Colors */
  --glass-accent: #6366f1;
  --glass-accent-rgb: 99, 102, 241;

  /* Typography */
  --glass-font-family: 'Outfit', sans-serif;

  /* Transitions */
  --glass-transition: 0.3s ease;
}
```

---

## 🔧 Utilities

### Layout

```html
<div class="glass-container">Centered container (max 1200px)</div>
<div class="glass-flex glass-items-center glass-gap-md">Flexbox</div>
<div class="glass-grid glass-grid-3">3 column grid</div>
```

### Typography

```html
<p class="glass-text-xl glass-text-bold">Large bold text</p>
<p class="glass-text-sm glass-text-secondary">Small secondary text</p>
```

### Spacing

```html
<div class="glass-mt-lg glass-p-xl">Margin top + padding</div>
```

---

## 📁 Project Structure

```
mglass-sdk/
├── src/
│   ├── base.css          # Design tokens, reset, utilities
│   ├── glass.css         # Core glass effects
│   ├── buttons.css       # Button components
│   ├── cards.css         # Card components
│   ├── navbar.css        # Navigation
│   ├── components.css    # Modals, inputs, badges, etc.
│   ├── animations.css    # Animations & micro-interactions
│   └── themes.css        # Theme definitions
├── dist/
│   └── mglass.css        # Compiled single file
├── scripts/
│   └── build.js          # Build script
├── examples/
│   └── index.html        # Full showcase demo
├── package.json
└── README.md
```

---

## 🛠️ Development

```bash
# Build the dist file
npm run build

# Start dev server with live reload
npm run dev
```

---

## 📄 License

MIT © mCompany

---

<p align="center">
  Made with ❤️ and 🧊 by <strong>mCompany</strong>
</p>
