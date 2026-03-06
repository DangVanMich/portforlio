# Portfolio Website Guide

## 1. Purpose

This document is the implementation guide for a personal portfolio website.

The website should help recruiters quickly understand:

- Who you are
- What technologies you use
- What projects you have built
- Your experience and growth journey
- How to contact you

---

## 2. Main Goal

Build a clean, minimal, developer-focused portfolio website using:

- Next.js
- React
- Tailwind CSS
- Vercel for deployment

The website should be:

- Responsive
- Easy to navigate
- Single-page scrolling
- Professional and easy to update later

---

## 3. Recommended Tech Stack

### Frontend

- Next.js
- React
- Tailwind CSS

### Deployment

- Vercel

### Optional Tools

- Git / GitHub
- Figma
- Notion

---

## 4. Website Structure

Recommended sections:

1. Hero
2. About Me
3. Skills
4. Projects
5. Experience
6. Contact
7. Footer

Recommended layout:

- Single-page portfolio
- Smooth scrolling navigation
- Section-based design

---

## 5. Suggested Folder Structure

```txt
portfolio/
│
├── public/
│   ├── avatar.png
│   ├── cv.pdf
│   └── project-images/
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   └── pages/
│       └── index.tsx
│
└── README.md
```

---

## 6. Content Plan

### 6.1 Hero Section

Include:

- Full name
- Role/title
- Short introduction
- Main CTA buttons

Suggested content:

- Name: Dang Van Mich
- Title: Backend Developer / Software Developer
- Intro: Backend Developer specializing in NestJS and scalable APIs.

Suggested buttons:

- View Projects
- Download CV
- GitHub

---

### 6.2 About Me

Include:

- Short self-introduction
- Interest in software development
- Learning journey
- Career direction

Topics to cover:

- Backend development
- Scalable systems
- Smart learning platforms

---

### 6.3 Skills

Group skills by category.

#### Backend

- Node.js
- NestJS
- REST API
- JWT Authentication

#### Database

- PostgreSQL
- MongoDB
- Redis

#### Tools

- Git
- Docker
- Postman

---

### 6.4 Projects

Each project card should include:

- Project name
- Short description
- Tech stack
- GitHub link
- Optional live demo
- Optional screenshot

Recommended portfolio projects:

1. Smart Learning Platform
2. Authentication API
3. Task Management API

---

### 6.5 Experience

Use a timeline format.

Example:

- 2025 - Present  
  Building Smart Learning Platform  
  Backend Developer

- 2024  
  Learning Backend Development  
  Node.js, API Design, Databases

---

### 6.6 Contact Section

Include:

- Email
- GitHub
- LinkedIn
- Download CV button

Optional:

- Contact form

---

## 7. Design Guidelines

Style direction:

- Clean
- Minimal
- Developer-focused
- Professional

Recommended theme:

- Dark theme
- Accent color: blue or purple

Recommended fonts:

- Inter
- Poppins

UI suggestions:

- Rounded cards
- Subtle shadows
- Strong spacing
- Clear headings
- Consistent button styles

---

## 8. Features to Implement

### Required Features

- Responsive layout
- Smooth scrolling
- Project cards
- GitHub links
- Download CV button

### Optional Features

- Dark/Light mode
- Scroll animations
- GitHub stats
- Blog section
- Contact form

---

## 9. Development Plan

### Step 1: Initialize project

```bash
npx create-next-app portfolio
```

### Step 2: Install dependencies

```bash
npm install tailwindcss
```

### Step 3: Create structure

Create:

- `src/components`
- `src/data`
- `src/styles`
- `public/project-images`

### Step 4: Build sections in order

1. Navbar
2. Hero
3. About
4. Skills
5. Projects
6. Experience
7. Contact
8. Footer

### Step 5: Make responsive layout

Check:

- Mobile
- Tablet
- Desktop

### Step 6: Add optional enhancements

- Animation
- Theme switch
- GitHub stats

### Step 7: Deploy

- Push to GitHub
- Import into Vercel
- Deploy production site

---

## 10. Deployment Guide

Deployment steps:

1. Create GitHub repository
2. Push source code
3. Import repository into Vercel
4. Configure project if needed
5. Deploy

Expected result:

```txt
https://your-portfolio.vercel.app
```

---

## 11. Future Improvements

Possible upgrades:

- Blog section
- Project case studies
- GitHub API integration
- AI chatbot assistant
- Analytics integration

---

## 12. Pre-Launch Checklist

Before sharing the portfolio, confirm:

- [ ] Avatar uploaded
- [ ] CV added to `public/cv.pdf`
- [ ] At least 3 projects displayed
- [ ] GitHub link added
- [ ] LinkedIn link added
- [ ] Responsive on mobile
- [ ] Deployed online

---

## 13. Content Placeholders To Replace

Update these values before publishing:

- Name
- Professional title
- Email address
- GitHub URL
- LinkedIn URL
- CV file
- Avatar image
- Real project links
- Real project screenshots

---

## 14. Notes for Implementation

When building this portfolio:

- Keep the layout simple and readable
- Focus on strong project descriptions
- Highlight backend strengths clearly
- Avoid clutter
- Make CTA buttons obvious
- Use consistent spacing and typography
- Keep all content easy to scan in under 1 minute

---

## 15. Success Criteria

The portfolio is successful if:

- Recruiters can quickly understand your profile
- Projects are clearly presented
- Contact options are easy to find
- The website works well on mobile and desktop
- The design feels modern and professional
