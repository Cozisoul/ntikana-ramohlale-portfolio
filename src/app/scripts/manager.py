import os
from PIL import Image
from pathlib import Path
import re

# --- CONFIGURATION ---
MAX_WIDTH = 2560
IMAGE_QUALITY = 85
PROJECTS_BASE_DIR = Path("../public/images/projects/")
SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp']

def slugify(text):
    """Converts a string into a URL-friendly slug."""
    text = text.lower()
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'[^\w-]', '', text)
    return text

def process_image(source_path, save_dir, filename_prefix, image_index, is_cover):
    """Resizes, saves, and gathers data for a single image."""
    try:
        img = Image.open(source_path)
    except Exception as e:
        print(f"  ❌ Error: Could not open image file '{source_path.name}'. Skipping. {e}")
        return None

    original_width, original_height = img.size
    
    if original_width > MAX_WIDTH:
        aspect_ratio = original_height / original_width
        new_width = MAX_WIDTH
        new_height = int(new_width * aspect_ratio)
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    else:
        new_width, new_height = original_width, original_height

    filename = f"{filename_prefix}_cover.jpg" if is_cover else f"{filename_prefix}_{image_index:02d}.jpg"
    save_path = save_dir / filename
    
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
        
    img.save(save_path, "JPEG", quality=IMAGE_QUALITY, optimize=True)
    print(f"  ✅ Image '{source_path.name}' saved to '{save_path.name}' ({new_width}x{new_height})")

    alt_text = input(f"    ➡️ Enter ALT text for this image: ")
    caption = input(f"    ➡️ Enter a caption (or press Enter to skip): ")

    return {
        "src": f"/images/projects/{filename_prefix}/{filename}",
        "alt": alt_text,
        "width": new_width,
        "height": new_height,
        "caption": caption,
        "priority": is_cover,
    }

def main():
    """Main function to run the content manager."""
    print("--- 📸 Ntikana Portfolio Content Manager v2.0 ---")
    
    # --- 1. Get Project Details ---
    title = input("➡️ Enter Project Title: ")
    project_slug = slugify(title)
    print(f"   Generated Slug: {project_slug}")
    
    year = input("➡️ Enter Project Year(s) (e.g., 2023-2025): ")
    location = input("➡️ Enter Project Location: ")
    description = input("➡️ Enter Project Description: ")

    # --- 2. Get Source Folder and Detect Images ---
    source_folder_str = input("➡️ Enter the FULL path to the SOURCE folder containing your images: ")
    source_folder = Path(source_folder_str)

    if not source_folder.is_dir():
        print(f"❌ Error: Folder not found at '{source_folder_str}'")
        return

    image_paths = sorted([p for p in source_folder.iterdir() if p.suffix.lower() in SUPPORTED_EXTENSIONS])

    if not image_paths:
        print(f"❌ Error: No supported images found in '{source_folder_str}'")
        return

    print(f"\n✅ Found {len(image_paths)} images.")

    # --- 3. Select Cover Image ---
    print("\nPlease select the cover image from the list below:")
    for i, path in enumerate(image_paths):
        print(f"  [{i+1}] {path.name}")
    
    cover_index = -1
    while cover_index < 0 or cover_index >= len(image_paths):
        try:
            choice = int(input(f"➡️ Enter the number of the cover image (1-{len(image_paths)}): "))
            cover_index = choice - 1
        except ValueError:
            print("   Invalid input. Please enter a number.")

    cover_image_path = image_paths.pop(cover_index) # Remove cover from list so it's not processed twice
    
    # --- 4. Process Images ---
    project_dir = PROJECTS_BASE_DIR / project_slug
    project_dir.mkdir(parents=True, exist_ok=True)
    print(f"\n📁 Project directory ready at '{project_dir}'")

    print("\n--- Processing Cover Image ---")
    cover_image_data = process_image(cover_image_path, project_dir, project_slug, 0, is_cover=True)
    if not cover_image_data: return

    print("\n--- Processing Gallery Images ---")
    gallery_images_data = []
    gallery_index = 1
    for path in image_paths:
        print(f"\nProcessing gallery image #{gallery_index}: {path.name}")
        image_data = process_image(path, project_dir, project_slug, gallery_index, is_cover=False)
        if image_data:
            gallery_images_data.append(image_data)
            gallery_index += 1

    # --- 5. Generate TypeScript Code ---
    print("\n" + "="*50)
    print("✅ Generation Complete! Here is your TypeScript code.")
    print("="*50 + "\n")

    cover_code = f"""cover: {{
      src: '{cover_image_data["src"]}',
      alt: '{cover_image_data["alt"]}',
      width: {cover_image_data["width"]},
      height: {cover_image_data["height"]},
      priority: {str(cover_image_data["priority"]).lower()},
    }},"""

    gallery_items_code = []
    for img in gallery_images_data:
        caption_line = f"caption: '{img['caption']}'," if img['caption'] else ""
        item_code = f"""      {{
        src: '{img['src']}',
        alt: '{img['alt']}',
        width: {img['width']},
        height: {img['height']},{' ' if caption_line else ''}
        {caption_line}
      }},"""
        gallery_items_code.append(item_code)
    
    gallery_code = "images: [\n" + "\n".join(gallery_items_code) + "\n    ]," if gallery_items_code else "images: [],"

    typescript_output = f"""  {{
    id: '{project_slug}',
    title: '{title}',
    year: '{year}',
    location: '{location}',
    description: '{description}',
    {cover_code}
    {gallery_code}
  }},"""

    print(typescript_output)
    print("\n" + "="*50)

if __name__ == "__main__":
    main()
