# Portfolio Website

Personal portfolio website built with Next.js, React, and Tailwind CSS.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- TypeScript

## Sections

- Hero
- About
- Skills
- Projects
- Experience
- Contact
- Footer

## Project Structure

```txt
portfolio/
├── public/
│   └── project-images/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   └── styles/
├── agent.md
└── README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000

## Build for Production

```bash
npm run build
npm run start
```

## Customize Content

Update portfolio content in these files:

- `src/pages/index.tsx` for page composition and metadata
- `src/data/skills.ts` for skill groups
- `src/data/projects.ts` for project cards
- `src/components/Experience.tsx` for timeline items
- `src/components/Contact.tsx` for email, GitHub, and LinkedIn

## Assets To Add

Add your real files before publishing:

- `public/avatar.png`
- `public/cv.pdf`
- project screenshots inside `public/project-images/`

## Deployment

Recommended deployment target: Vercel.

Steps:

1. Push the project to GitHub
2. Import the repository into Vercel
3. Deploy

## Notes

- Replace placeholder URLs such as `your-username`, `your-email@example.com`, and demo links.
- The implementation guide is available in `agent.md`.

# portforlio