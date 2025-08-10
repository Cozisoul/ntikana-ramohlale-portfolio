from pathlib import Path
import re

# --- CONFIGURATION ---
SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp']

def slugify(text):
    """Converts a string into a URL-friendly slug for filenames."""
    text = text.lower()
    text = re.sub(r'[\s_]+', '-', text)  # Replace spaces and underscores with hyphens
    text = re.sub(r'[^\w-]', '', text)   # Remove all non-word chars except hyphens
    return text

def rename_files_in_folder():
    """
    Interactively renames all images in a specified folder based on a project name.
    One image is designated as the cover, and the rest are numbered sequentially.
    """
    print("--- 🚀 Quick Project Renamer ---")
    
    # 1. Get the source folder path from the user
    folder_path_str = input("➡️ Enter the full path to the folder containing your images: ")
    source_dir = Path(folder_path_str)

    if not source_dir.is_dir():
        print(f"\n❌ Error: The path provided is not a valid directory.")
        return

    # 2. Get the project name
    project_name = input("➡️ Enter the project name (e.g., Koma, Diski): ")
    if not project_name:
        print("\n❌ Error: Project name cannot be empty.")
        return
        
    project_slug = slugify(project_name)

    # 3. Find all supported image files
    image_files = sorted([
        f for f in source_dir.iterdir() 
        if f.is_file() and f.suffix.lower() in SUPPORTED_EXTENSIONS
    ])

    if not image_files:
        print(f"\n❌ Error: No supported image files found in the directory.")
        return

    print(f"\n✅ Found {len(image_files)} images. Please choose the cover image:")

    # 4. Ask the user to select the cover image
    for i, file_path in enumerate(image_files):
        print(f"  [{i+1}] {file_path.name}")
    
    cover_index = -1
    while True:
        try:
            choice = int(input(f"\n➡️ Enter the number for the cover image (1-{len(image_files)}): "))
            if 1 <= choice <= len(image_files):
                cover_index = choice - 1
                break
            else:
                print("   Invalid number. Please try again.")
        except ValueError:
            print("   Please enter a valid number.")

    # 5. Separate the cover image from the rest of the gallery images
    cover_file = image_files.pop(cover_index)
    gallery_files = image_files

    print("\n--- Renaming files... ---")

    # 6. Rename the cover image
    cover_ext = cover_file.suffix
    new_cover_name = f"{project_slug}_cover{cover_ext}"
    new_cover_path = cover_file.with_name(new_cover_name)
    cover_file.rename(new_cover_path)
    print(f"✅ Renamed '{cover_file.name}' to '{new_cover_name}'")

    # 7. Rename the rest of the gallery images sequentially
    for i, file_path in enumerate(gallery_files):
        gallery_ext = file_path.suffix
        # The ':02d' ensures numbering is 01, 02, etc., for proper sorting
        new_gallery_name = f"{project_slug}_{i+1:02d}{gallery_ext}"
        new_gallery_path = file_path.with_name(new_gallery_name)
        file_path.rename(new_gallery_path)
        print(f"✅ Renamed '{file_path.name}' to '{new_gallery_name}'")
        
    print("\n--- ✨ All files have been renamed successfully! ---")


if __name__ == "__main__":
    rename_files_in_folder()
    