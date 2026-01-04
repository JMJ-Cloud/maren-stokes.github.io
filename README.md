# Maren Stokes - Personal Portfolio Website

A warm, friendly portfolio website showcasing academics, leadership, and STEM interests. Built with Astro and deployed to GitHub Pages.

## 🎨 Design

- **Color Palette:** Warm pastels with soft yellows, light pinks, and peach accents
- **Typography:** Nunito for headings, Inter for body text
- **Style:** Rounded corners, soft shadows, generous white space

## 📁 Project Structure

```text
/
├── public/              # Static assets (favicon, images)
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── Layout.astro
│   │   ├── Sidebar.astro
│   │   ├── SectionHeading.astro
│   │   └── Card.astro
│   ├── pages/          # Page routes
│   │   ├── index.astro       # Home
│   │   ├── about.astro       # About Me
│   │   ├── academics.astro   # Academic Journey
│   │   ├── activities.astro  # Activities & Leadership
│   │   ├── projects.astro    # STEM & Projects
│   │   └── contact.astro     # Contact
│   └── styles/
│       └── global.css   # Global styles and CSS variables
└── .github/workflows/
    └── deploy.yml       # GitHub Actions deployment
```

## 🚀 Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

## 📦 Deployment

This site is configured to automatically deploy to GitHub Pages via GitHub Actions when you push to the `main` branch.

### Setup Steps:

1. Go to your repository settings on GitHub
2. Navigate to **Pages** (under Code and automation)
3. Under "Build and deployment", select **Source: GitHub Actions**
4. Push your code to the `main` branch
5. The site will automatically build and deploy

The site will be available at: `https://maren-stokes.github.io`

## 🛠️ Built With

- [Astro](https://astro.build) - Static site framework
- Google Fonts (Nunito & Inter)
- CSS Grid & Flexbox for layouts
- GitHub Actions for CI/CD

## 📝 Content Updates

To update content:
- **Pages**: Edit files in `src/pages/`
- **Styling**: Modify CSS variables in `src/styles/global.css`
- **Components**: Update reusable components in `src/components/`

## 🎯 To-Do

- [ ] Add email address to Contact page
- [ ] Add LinkedIn profile link
- [ ] Add headshot/photo
- [ ] Add favicon
- [ ] Add project showcases to STEM page
- [ ] Consider adding animations and hover interactions
