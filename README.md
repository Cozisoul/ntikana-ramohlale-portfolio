# Ntikana Ramohlale — Documentary Portfolio

A minimalist, editorial, and interactive portfolio for documentary photographer Ntikana Ramohlale. This project is built with a modern tech stack designed for performance, a premium user experience, and a content-first workflow, drawing inspiration from Awwwards-winning websites.

<!-- 
  TODO: Add a high-quality screenshot or GIF of the site here, preferably showing the scrollytelling feature in action.
  <p align="center">
    <img src="your-screenshot-url.png" alt="Screenshot of the portfolio website" width="800"/>
  </p>
-->

---

## ✨ Key Features

*   **Sticky Image Scrollytelling:** As users scroll through a project, images lock into place while the narrative text scrolls past, creating an immersive, guided tour experience similar to a physical gallery.
*   **Interactive Lightbox:** All gallery images can be opened in a beautiful, full-screen lightbox with keyboard navigation, captions, thumbnails, and zoom capabilities, powered by `yet-another-react-lightbox`.
*   **Infinite Logo Marquee:** An elegant, seamless, and infinitely scrolling marquee displays client and press logos for social proof, built with pure CSS animations.
*   **Smooth Scroll:** Silky-smooth, performant scrolling implemented with `@studio-freight/lenis` for a premium feel.
*   **Fully Responsive Design:** A mobile-first approach ensures the site is stunning and functional on all devices, from phones to desktops.
*   **SEO Optimized:** Comes with automatically generated `sitemap.xml` and a `robots.txt` file to ensure proper indexing by search engines.
*   **Python Content Manager:** Includes a powerful helper script to automate the tedious process of resizing images and generating the required TypeScript code for new projects.

---

## 🛠️ Tech Stack

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Package Manager:** [pnpm](https://pnpm.io/)
*   **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v18 or newer)
*   [pnpm](https://pnpm.io/installation) installed globally: `npm install -g pnpm`
*   [Python](https://www.python.org/downloads/) (v3.6 or newer)

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Cozisoul/ntikana-ramohlale-portfolio.git
    cd ntikana-ramohlale-portfolio
    ```

2.  **Install dependencies:**
    This project uses `pnpm`. Do not use `npm` or `yarn`.
    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    There are no required environment variables for the base project to run. If you add any in the future, create a `.env.local` file by copying the example:
    ```bash
    cp .env.local.example .env.local
    ```

4.  **Run the development server:**
    ```bash
    pnpm dev
    ```

The site should now be running at `http://localhost:3000`.

---

## 📁 Folder Structure

The project follows a standard Next.js App Router structure with a few key locations for content.