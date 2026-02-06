import os
import shutil
from PIL import Image

# Directories
src_dir = r"d:\EvolveProfile\evolvewood-website\public\images\applications"
dest_app_dir = r"d:\EvolveProfile\evolvewood-website\public\images\applications"
dest_prod_dir = r"d:\EvolveProfile\evolvewood-website\public\images"

# Mappings (Filename partial match -> Target Filename)
# We use the index number from the extracted filename to guarantee order.
# Format: (Page_Index, Item_Index) -> Target_Name

# Product Mapping (Page Index 2)
product_map = {
    (2, 0): "square-bar.jpg",
    (2, 1): "rectangle-bar.jpg",
    (2, 2): "customized-profile.jpg",
    (2, 4): "fabricated-product.jpg"
}

# Application Mapping
# Sequence derived from visual order: Industrial(9) -> Storage(3) -> Civil_Pg7(6) -> Civil_Pg8(4) -> Furniture(2)
# Files start at extracted_3_5.
app_sequence = [
    # Industrial (9)
    "pipe-and-steel.jpg", "chemical.jpg", "pharmaceutical.jpg", 
    "metal-coil.jpg", "structural.jpg", "heavy-machinery.jpg", 
    "billets-packing.jpg", "spacer-uses.jpg", "aircraft.jpg",
    
    # Storage (3)
    "warehouse.jpg", "godown.jpg", "potato-flakes.jpg",
    
    # Civil Pg7 (6)
    "marine.jpg", "garden-fencing.jpg", "road-fencing.jpg",
    "fencing.jpg", "garden-street.jpg", "retaining-walls.jpg",
    
    # Civil Pg8 (4)
    "mountain-staircase.jpg", "plants-raised-beds.jpg", 
    "agriculture.jpg", "animal-boundary.jpg",
    
    # Furniture (2) - Assuming they follow
    "benches.jpg", "table.jpg"
]

def get_file_key(filename):
    # Extracts (3, 5) from "extracted_3_5.jpg"
    try:
        parts = filename.replace('.', '_').split('_')
        if len(parts) >= 3 and parts[0] == 'extracted':
            return (int(parts[1]), int(parts[2]))
    except:
        pass
    return None

def convert_and_save(src_path, dest_path):
    try:
        with Image.open(src_path) as img:
            rgb_im = img.convert('RGB')
            rgb_im.save(dest_path, 'JPEG', quality=90)
        print(f"Converted & Saved: {dest_path}")
    except Exception as e:
        print(f"Error converting {src_path}: {e}")

# Process Products
print("Processing Products...")
for filename in os.listdir(src_dir):
    key = get_file_key(filename)
    if key in product_map:
        src = os.path.join(src_dir, filename)
        dest = os.path.join(dest_prod_dir, product_map[key])
        convert_and_save(src, dest)

# Process Applications
# We need to collect all candidate keys for applications sorted
print("Processing Applications...")
candidates = []
for filename in os.listdir(src_dir):
    key = get_file_key(filename)
    if key and key[0] >= 3: # Pages 3 and up are applications
        candidates.append((key, filename))

# Sort by Page then Index
candidates.sort()

# Map first N candidates to the sequence
for i, target_name in enumerate(app_sequence):
    if i < len(candidates):
        key, filename = candidates[i]
        src = os.path.join(src_dir, filename)
        dest = os.path.join(dest_app_dir, target_name)
        convert_and_save(src, dest)
        print(f"Mapped {filename} -> {target_name}")
    else:
        print(f"Warning: No source image found for {target_name}")

print("Done.")
