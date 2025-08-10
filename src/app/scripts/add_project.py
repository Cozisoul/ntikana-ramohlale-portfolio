import os
from PIL import Image
from pathlib import Path
import re

# --- CONFIGURATION ---
MAX_WIDTH = 2560  # The maximum width for any resized image in pixels.
IMAGE_QUALITY = 85 # The quality for saved JPEGs (out of 100).
PROJECTS_BASE_DIR = Path("../public/images/projects/") # Path relative to this script

def slugify(text):
    """Converts a string into a URL-friendly slug."""
    text = text.lower()
    text = re.sub(r'[\s_]+', '-', text)  # Replace spaces and underscores with hyphens
    text = re.sub(r'[^\w-]', '', text)   # Remove all non-word chars except hyphens
    return text

def process_image(source_path_str, save_dir, filename_prefix, image_index, is_cover):
    """Resizes, saves, and returns data for a single image."""
    source_path = Path(source_path_str)
    if not source_path.exists():
        print(f"  ❌ Error: Source file not found at '{source_path_str}'")
        return None

    try:
        img = Image.open(source_path)
    except Exception as e:
        print(f"  ❌ Error: Could not open image file. {e}")
        return None

    original_width, original_height = img.size
    
    # Calculate new dimensions while maintaining aspect ratio
    if original_width > MAX_WIDTH:
        aspect_ratio = original_height / original_width
        new_width = MAX_WIDTH
        new_height = int(new_width * aspect_ratio)
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    else:
        new_width, new_height = original_width, original_height

    # Determine the output filename
    if is_cover:
        filename = f"{filename_prefix}_cover.jpg"
    else:
        filename = f"{filename_prefix}_{image_index:02d}.jpg"
        
    save_path = save_dir / filename
    
    # Convert to RGB if it has an alpha channel (for PNGs) before saving as JPEG
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
        
    img.save(save_path, "JPEG", quality=IMAGE_QUALITY, optimize=True)
    print(f"  ✅ Image saved to '{save_path}' ({new_width}x{new_height})")

    # Get user input for alt text and caption
    alt_text = input(f"  ➡️ Enter ALT text for this image: ")
    caption = input(f"  ➡️ Enter a caption (or press Enter to skip): ")

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
    print("--- 📸 Ntikana Portfolio Content Manager ---")
    
    # --- 1. Get Project Details ---
    title = input("➡️ Enter Project Title: ")
    project_slug = slugify(title)
    print(f"   Generated Slug: {project_slug}")
    
    year = input("➡️ Enter Project Year(s) (e.g., 2022-2024): ")
    location = input("➡️ Enter Project Location: ")
    description = input("➡️ Enter Project Description (a few sentences): ")

    # --- 2. Create Project Directory ---
    project_dir = PROJECTS_BASE_DIR / project_slug
    project_dir.mkdir(parents=True, exist_ok=True)
    print(f"\n📁 Project directory created at '{project_dir}'")
    
    # --- 3. Process Images ---
    cover_image_data = None
    gallery_images_data = []
    
    # Process Cover Image first
    print("\n--- Processing Cover Image ---")
    while not cover_image_data:
        source_cover_path = input("➡️ Enter the FULL path to the SOURCE cover image: ")
        cover_image_data = process_image(source_cover_path, project_dir, project_slug, 0, is_cover=True)

    # Process Gallery Images
    print("\n--- Processing Gallery Images ---")
    image_counter = 1
    while True:
        add_another = input(f"➡️ Add gallery image #{image_counter}? (y/n): ").lower()
        if add_another != 'y':
            break
        
        source_gallery_path = input(f"   ➡️ Enter the FULL path to the SOURCE image #{image_counter}: ")
        image_data = process_image(source_gallery_path, project_dir, project_slug, image_counter, is_cover=False)
        if image_data:
            gallery_images_data.append(image_data)
            image_counter += 1

    # --- 4. Generate TypeScript Code ---
    print("\n\n" + "="*50)
    print("✅ Generation Complete! Copy the code block below.")
    print("="*50 + "\n")

    # Format the cover image object
    cover_code = f"""cover: {{
      src: '{cover_image_data["src"]}',
      alt: '{cover_image_data["alt"]}',
      width: {cover_image_data["width"]},
      height: {cover_image_data["height"]},
      priority: {str(cover_image_data["priority"]).lower()},
    }},"""

    # Format the gallery images array
    gallery_items_code = []
    for img in gallery_images_data:
        caption_line = f"caption: '{img['caption']}'," if img['caption'] else ""
        item_code = f"""      {{
        src: '{img['src']}',
        alt: '{img['alt']}',
        width: {img['width']},
        height: {img['height']},
        {caption_line}
      }},"""
        gallery_items_code.append(item_code)
    
    gallery_code = "images: [\n" + "\n".join(gallery_items_code) + "\n    ]," if gallery_items_code else "images: [],"

    # Assemble the final TypeScript object
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
    print("📋 INSTRUCTIONS: Paste the code block above into the 'stories' array")
    print("   in your 'src/app/data/portfolio-data.ts' file.")
    print("="*50 + "\n")


if __name__ == "__main__":
    main()
    