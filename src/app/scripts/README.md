# 📸 Portfolio Content Manager (`manager.py`)

This Python script is a powerful command-line utility designed to completely automate the process of adding new documentary projects to the portfolio website.

It ingests an entire folder of source images, processes them, and generates the final TypeScript code required by the application.

## Features

-   **Folder-Based Processing:** Instead of requiring individual file paths, the script ingests an entire source folder at once.
-   **Automatic Image Detection:** Scans the source folder and finds all compatible images (`.jpg`, `.jpeg`, `.png`, `.webp`).
-   **Interactive Cover Selection:** Presents a list of all detected images and allows you to choose which one will serve as the project's cover image.
-   **Automated Renaming & Resizing:** Automatically renames all files to a clean, consistent format (`project-slug_cover.jpg`, `project-slug_01.jpg`, etc.), resizes them for web optimization, and saves them to the correct project directory.
-   **Full TypeScript Code Generation:** Outputs a perfectly formatted TypeScript object containing all project details, ready to be pasted into the website's data file.

---

## ⚙️ Setup

Before running the script, ensure you have Python and the `Pillow` library installed.

1.  **Python:** Make sure you have Python 3.6 or newer.
2.  **Pillow:** Install the dependency using `pip`:
    ```bash
    pip install Pillow
    ```

---

## 🚀 How to Use

Follow these steps each time you want to add a new project.

### 1. Prepare Your Source Folder

Gather all the high-resolution images for a single project into one folder on your computer (e.g., `C:\Users\YourName\Desktop\Koma_Photos`).

### 2. Run the Script

Open your terminal and navigate into this `scripts` directory from the root of the main project.
```bash
cd scripts