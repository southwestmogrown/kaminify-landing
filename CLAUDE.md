# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Kaminify is a Next.js landing page for a service that clones website designs: paste two URLs, get a multi-page cloned site. Hosted on Vercel.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server at localhost:3000
npm run build     # production build
npm run lint      # lint
```

## Architecture

App Router (`app/`) with all components as server components except `ScrollReveal`.

```
app/
  layout.tsx       # root layout: metadata, next/font setup, globals.css import
  page.tsx         # composes all section components
  globals.css      # all CSS — design tokens, component styles, animations

components/
  Nav.tsx          # fixed top nav
  Hero.tsx         # hero section with URL demo panel
  HowItWorks.tsx   # steps, features grid, pipeline explainer
  UseCases.tsx     # use case cards
  Pricing.tsx      # three-tier pricing cards
  CtaSection.tsx   # final CTA
  Footer.tsx       # footer links
  ScrollReveal.tsx # 'use client' — IntersectionObserver that adds .visible to .reveal elements
```

### Fonts

Loaded via `next/font/google` in `app/layout.tsx`. The font CSS variables (`--font-display`, `--font-body`, `--font-mono`) are set on `<html>` and consumed throughout `globals.css`.

### Scroll reveal

Elements with `className="reveal"` start hidden (CSS). `ScrollReveal` (the only client component) runs a single `IntersectionObserver` on mount that adds `className="visible"` when they enter the viewport.

### Design tokens (CSS custom properties in `:root`)

| Variable | Value |
|---|---|
| `--bg` / `--bg2` / `--bg3` | Dark background layers |
| `--accent` / `--accent2` | Orange (#f97316 / #fb923c) |
| `--teal` | Secondary accent (#1D9E75) |
| `--text` / `--text-muted` / `--text-dim` | Text hierarchy |
