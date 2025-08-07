
# DevOps Portfolio Webpage – Build & Deployment Guide

## Prerequisites

- Node.js (v18+ recommended)
- npm or bun (for package management)
- Docker (optional, for containerized deployment)

## Local Development

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GIT_URL>
   cd devops-fresh-canvas
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   bun run dev
   ```
   The app will be available at [http://localhost:8080](http://localhost:8080).

## Production Build

1. **Build the optimized static files:**
   ```bash
   npm run build
   # or
   bun run build
   ```
   The output will be in the `dist/` folder.

2. **Preview the production build locally:**
   ```bash
   npm run preview
   # or
   bun run preview
   ```

## Deployment Options

### 1. Static Hosting (Vercel, Netlify, GitHub Pages, etc.)
- Upload the contents of the `dist/` folder to your preferred static hosting provider.
- Ensure your `public/` assets (e.g., resume.pdf) are included.

### 2. Docker Deployment
Build and run the app in a container:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY public /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```
Build and run:
```bash
docker build -t devops-portfolio .
docker run -p 8080:8080 devops-portfolio
```

### 3. Lovable Platform
- Open [Lovable](https://lovable.dev/projects/6082f75b-36a7-4fa3-b46a-fabb3ab90324)
- Click Share → Publish to deploy instantly.

### 4. Custom Domain
- Configure via your hosting provider or Lovable project settings.

## Environment Variables
If you need to add environment variables, create a `.env` file in the root and reference them in your code as needed.

## Additional Notes
- Static assets (e.g., resume.pdf) should be placed in the `public/` folder.
- For UI changes, edit components in `src/components/`.
- For styling, use Tailwind classes or update `src/index.css`.

---

## Hosting on GitHub Pages

You can deploy your Vite/React portfolio to GitHub Pages with these steps:

1. **Build the project for production:**
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with static files.

2. **Install gh-pages (optional, for easy deployment):**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update `vite.config.ts` for GitHub Pages:**
   Add the `base` property to match your repo name:
   ```js
   export default defineConfig({
     base: '/<REPO_NAME>/',
     // ...other config
   });
   ```
   Replace `<REPO_NAME>` with your GitHub repository name.

4. **Add deployment scripts to `package.json`:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

5. **Push your code to GitHub:**
   - Create a new repository on GitHub.
   - Push your local code to the remote repository.

6. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```
   This will publish your `dist/` folder to the `gh-pages` branch.

7. **Enable GitHub Pages in repo settings:**
   - Go to your repository on GitHub.
   - Settings → Pages → Source: select `gh-pages` branch and `/ (root)`.

8. **Access your site:**
   - Your site will be available at `https://<username>.github.io/<REPO_NAME>/`

**Tips:**
- Make sure all asset paths are relative or use the correct base.
- Place your favicon and resume in the `public/` folder.
- If you use custom domains, configure them in GitHub Pages settings.

---
For questions or issues, open an issue in this repository or contact the maintainer.
