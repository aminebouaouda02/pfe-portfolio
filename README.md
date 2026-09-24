# Modern Developer Portfolio — Next.js & TypeScript

A high-performance, dark-aesthetic developer portfolio built with **Next.js (App Router)**, **TypeScript**, and modern CSS glassmorphism. Optimized for instant zero-configuration static export and automatic deployment to **GitHub Pages** or **Vercel**.

---

## 🚀 Quick Start

### 1. Run Locally
```bash
cd portfolio
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build Static Export (for GitHub Pages / Hosting)
```bash
npm run build
```
This exports a static bundle ready for deployment into the `out/` folder.

---

## 📝 Updating Your Information

All your personal details, bio, skills, work timeline, social links, and projects are centralized in one single file:

📁 **[`data/portfolioData.ts`](./data/portfolioData.ts)**

Simply open that file to update:
* Your Name, Role, Location, Bio & Email
* Social links (GitHub, LinkedIn, Twitter/X)
* Featured Projects (titles, descriptions, links, tech tags)
* Skill categories & proficiency percentages
* Career Experience & Education milestones

---

## 🌐 Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In your repository on GitHub, go to:
   * **Settings** &rarr; **Pages**
   * Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Every time you push changes to the `main` branch, the workflow in `.github/workflows/deploy.yml` will automatically build and publish your portfolio live!

---

## ⚡ Deploying to Vercel (Alternative)

1. Import your GitHub repository into [Vercel](https://vercel.com).
2. Set the Root Directory to `portfolio`.
3. Click **Deploy**. Vercel will provide an instantaneous production URL and free SSL!
