You are absolutely right. My apologies if the previous response was not clear or was broken up.

Here is the complete, final README.md file in a single, uninterrupted code block. You can copy and paste this entire block into your README.md file with confidence.

Instructions

In the root directory of your project (the main ntikana-ramohlale-portfolio folder), open the file named README.md. If it doesn't exist, create it.

Delete everything currently in that file.

Copy the entire markdown code from the block below.

Paste it into the empty README.md file and save.

code
Markdown
download
content_copy
expand_less

# Ntikana Ramohlale — Documentary Portfolio

A minimalist, editorial, and interactive portfolio for documentary photographer Ntikana Ramohlale. This project is built with a modern tech stack designed for performance, a premium user experience, and a content-first workflow, drawing inspiration from Awwwards-winning websites.

<p align ="center">
  <!-- TODO: Add a high-quality screenshot or GIF of the site here, preferably showing the scrollytelling feature in action. -->
  <!-- Example: <img src="https://user-images.githubusercontent.com/your-id/your-image.gif" alt="Screenshot of the portfolio website" width="800"/> -->
</p>

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

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```

The site should now be running at `http://localhost:3000`.

---

## 📁 Folder Structure

The project follows a standard Next.js App Router structure with a few key locations for content.

.
├── public/
│ ├── images/
│ │ ├── logos/ # Client/press SVG logos
│ │ └── projects/ # All documentary project images, organized in subfolders
│
├── scripts/
│ ├── add_project.py # The Python content manager
│ └── README.md # Documentation for the script
│
└── src/
├── app/
│ ├── components/ # All reusable React components
│ ├── data/
│ │ └── portfolio-data.ts # The "mini-CMS" for all site content
│ └── ... # Core layout, page, and SEO files
│
└── ... # Config files (tailwind, postcss, etc.)

code
Code
download
content_copy
expand_less
IGNORE_WHEN_COPYING_START
IGNORE_WHEN_COPYING_END
---

## ✍️ Content Management Workflow

To add a new project to the portfolio, use the included Python helper script. This will automate image resizing and code generation.

### 1. Setup (One-Time Only)

Ensure you have the Python `Pillow` library installed:
```bash
pip install Pillow
2. Running the Script

Navigate to the scripts directory:

code
Bash
download
content_copy
expand_less
IGNORE_WHEN_COPYING_START
IGNORE_WHEN_COPYING_END
cd scripts

Run the script:

code
Bash
download
content_copy
expand_less
IGNORE_WHEN_COPYING_START
IGNORE_WHEN_COPYING_END
python add_project.py

Follow the interactive prompts in your terminal. You will be asked for the project title, description, and the full paths to your source images.

Once finished, the script will output a complete TypeScript object to the terminal.

Copy the entire generated code block and paste it as a new entry into the stories array in src/app/data/portfolio-data.ts.

(For more detailed instructions, see the README.md file inside the scripts folder.)

🌐 Deployment

This project is optimized for deployment on Vercel.

Push your final code to your GitHub repository.

Import the repository into Vercel.

Vercel will automatically detect the Next.js framework and configure the build settings.

Add your custom domain in the Vercel project settings.

That's it! Your site will be deployed globally on Vercel's edge network.

code
Code
download
content_copy
expand_less
IGNORE_WHEN_COPYING_START
IGNORE_WHEN_COPYING_END