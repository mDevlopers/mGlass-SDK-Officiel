# 🧊 mGlass SDK — Liquid Glass UI Kit v1.0.0

<p align="center">
  <strong>A premium CSS design system inspired by Apple's visionOS / Liquid Glass aesthetic.</strong>
  <br/>
  <em>Glassmorphism components • Dark mode • Smooth animations • Production-ready</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
  <img src="https://img.shields.io/badge/CSS-pure-orange" alt="Pure CSS" />
  <img src="https://img.shields.io/badge/size-~129KB-purple" alt="Size" />
</p>

---

## ✨ Features

- 🧊 **Liquid Glass Effects** — Realism with noise, grain, and mesh gradients
- 🚀 **150+ Components** — The most complete glassmorphism kit available
- ⚡ **Ultra & Ecosystem** — Everything from Kanban boards to specialized Form Pro inputs
- 📁 **Modular Architecture** — Professional directory-based structure
- 🎨 **25+ Built-in Themes** — Massive collection of premium themes
- 🏗️ **Layout System** — Fluid typography and auto-fit grid layouts
- 📱 **Fully Responsive** — Mobile-first with safe-area support
- 🪶 **Zero Dependencies** — Pure CSS, no JavaScript required

---

## 📦 Installation

### NPM

```bash
npm install mglass-sdk
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/mglass-sdk@1.0.0/dist/mglass.css">
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
  <title>mGlass SDK v1.0.0 — The Ultimate Edition</title>
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

## 🧱 Components (v1.0.0 Milestone)

### 🚀 New in Ecosystem Update
- **Business**: `glass-kanban`, `glass-calendar-pro`, `glass-time-picker`, `glass-stat-trend`
- **Commerce**: `glass-credit-card`, `glass-cart-list`, `glass-product-carousel`
- **Navigation**: `glass-tabs-pill`, `glass-tabs-underline`, `glass-sidebar-push`
- **Utility**: `glass-alert-timed`, `glass-video-hero`, `glass-wave-progress`

### 🏗️ Directory Structure
```
mglass-sdk/
├── src/
│   ├── core/           # Base, glass, typography, layout
│   ├── animations/     # Animations library
│   ├── components/     # UI components (modular)
│   ├── effects/        # Noise & mesh effects
│   └── themes/         # Theme collections
├── dist/
│   └── mglass.css      # Compiled bundle
└── scripts/
    └── build.js        # Build system
```

---

## 🦷 Bug Fixes
- **Cross-browser**: Perfected scrollbars for Firefox and Chrome.
- **Theming**: Replaced all hardcoded colors with tokens for light/dark consistency.
- **Performance**: Optimized backdrop-filters with hardware acceleration hints.
- **Accessibility**: Standardized focus-visible across all interactive elements.

## 📄 License
MIT © mCompany
