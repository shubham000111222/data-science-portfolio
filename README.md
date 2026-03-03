# Data Science Portfolio — Next.js

> A modern, production-level portfolio website for a Data Science & AI student.

**Tech Stack:** Next.js 16 · React · TailwindCSS · Framer Motion · next-themes · TypeScript

---

## Features

- **7 Sections:** Hero, About, Projects, Skills, Certifications, Blog, Contact
- **Dark / Light theme toggle** (next-themes, defaults to dark)
- **Framer Motion animations** on every section
- **Glassmorphism UI** — premium, minimal aesthetic
- **Fully responsive** — mobile-first
- **SEO optimized** — Open Graph, Twitter Card, meta tags
- **Functional contact form** (ready for EmailJS/Formspree)
- **Resume download** button (drop PDF at `/public/resume.pdf`)

---

## Folder Structure

```
.
├── app/
│   ├── globals.css           # Global styles + glassmorphism utilities
│   ├── layout.tsx            # Root layout with ThemeProvider, Navbar, Footer + SEO
│   └── page.tsx              # Main page — assembles all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Responsive sticky nav with mobile menu
│   │   └── Footer.tsx
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   ├── sections/
│   │   ├── Hero.tsx          # Animated hero with avatar and CTAs
│   │   ├── About.tsx         # Summary + categorized skill tags
│   │   ├── Projects.tsx      # 4 case-study project cards
│   │   ├── Skills.tsx        # Animated progress bars + tech badges
│   │   ├── Certifications.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx       # Contact info + react-hook-form
│   └── ui/
│       └── ThemeToggle.tsx
├── public/
│   └── resume.pdf            # PLACEHOLDER — add your resume here
└── .github/
    └── copilot-instructions.md
```

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customization Checklist

Search `// PLACEHOLDER` in the codebase to find every item to replace:

| File | Update |
|------|--------|
| `app/layout.tsx` | Title, description, OG tags, site URL |
| `components/sections/Hero.tsx` | Your name, initials, social links |
| `components/sections/About.tsx` | Professional summary, stats |
| `components/sections/Projects.tsx` | Real project details + links |
| `components/sections/Skills.tsx` | Proficiency levels |
| `components/sections/Certifications.tsx` | Certifications + credential IDs |
| `components/sections/Blog.tsx` | Post links or CMS integration |
| `components/sections/Contact.tsx` | Email, LinkedIn, GitHub, location |
| `components/layout/Footer.tsx` | Name + social links |
| `components/layout/Navbar.tsx` | Name initials in logo |
| `public/resume.pdf` | Your actual resume PDF |

---

## Contact Form Integration

### EmailJS (frontend-only, free)

```bash
npm install @emailjs/browser
```

In `Contact.tsx` `onSubmit`, replace the placeholder:

```ts
import emailjs from '@emailjs/browser';
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY');
```

Add to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

### Formspree (zero config)

Use your Formspree endpoint in the `fetch` call inside `onSubmit`.

---

## Deployment on Vercel

1. Push to GitHub:
   ```bash
   git add . && git commit -m "feat: portfolio v1" && git push origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo

3. Vercel auto-detects Next.js — click **Deploy**

4. Add environment variables in **Settings → Environment Variables**

### Custom Domain

In Vercel **Project → Settings → Domains** add your domain, then at your DNS registrar:

```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

SSL is provisioned automatically.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |
