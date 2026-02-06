import os
from PIL import Image

# Directories
src_dir = r"d:\EvolveProfile\evolvewood-website\public\images\applications"
out_dir = r"d:\EvolveProfile\evolvewood-website\public\images"

def create_collage(image_names, output_filename, grid_cols=3):
    images = []
    for name in image_names:
        path = os.path.join(src_dir, name)
        if os.path.exists(path):
            try:
                img = Image.open(path).convert('RGB')
                # Resize to standard height for uniformity
                base_height = 300
                h_percent = (base_height / float(img.size[1]))
                w_size = int((float(img.size[0]) * float(h_percent)))
                img = img.resize((w_size, base_height), Image.Resampling.LANCZOS)
                images.append(img)
            except Exception as e:
                print(f"Skipping {name}: {e}")
    
    if not images:
        print(f"No images found for {output_filename}")
        return

    # Calculate Grid
    rows = (len(images) + grid_cols - 1) // grid_cols
    
    # Canvas Size
    # Assume max width of a row = sum of widths
    # Max height = rows * height + padding
    padding = 10
    max_w = 0
    
    # Just simple horizontal stacking for now or simple grid?
    # Let's do a smart grid.
    
    # Determine max dimensions
    max_img_w = max(img.width for img in images)
    max_img_h = max(img.height for img in images)
    
    canvas_w = (max_img_w * grid_cols) + (padding * (grid_cols + 1))
    canvas_h = (max_img_h * rows) + (padding * (rows + 1))
    
    bg_color = (255, 255, 255) # White background
    collage = Image.new('RGB', (canvas_w, canvas_h), bg_color)
    
    for idx, img in enumerate(images):
        row = idx // grid_cols
        col = idx % grid_cols
        
        x = padding + (col * (max_img_w + padding))
        # Center in cell
        x_offset = (max_img_w - img.width) // 2
        
        y = padding + (row * (max_img_h + padding))
        y_offset = (max_img_h - img.height) // 2
        
        collage.paste(img, (x + x_offset, y + y_offset))
        
    out_path = os.path.join(out_dir, output_filename)
    collage.save(out_path, quality=90)
    print(f"Start Created {out_path}")

# List of images for Collage 1: Storage & Civil (Part A)
list1 = [
    'warehouse.jpg', 'godown.jpg', 'potato-flakes.jpg',
    'marine.jpg', 'garden-fencing.jpg', 'road-fencing.jpg',
    'fencing.jpg', 'garden-street.jpg', 'retaining-walls.jpg'
]

# List of images for Collage 2: Agriculture & Landscape
list2 = [
    'mountain-staircase.jpg', 'plants-raised-beds.jpg',
    'agriculture.jpg', 'animal-boundary.jpg'
]

# List of images for Collage 3: Industrial Application
list3 = [
    'pipe-and-steel.jpg', 'chemical.jpg', 'pharmaceutical.jpg',
    'metal-coil.jpg', 'structural.jpg', 'heavy-machinery.jpg',
    'billets-packing.jpg', 'spacer-uses.jpg', 'aircraft.jpg'
]

create_collage(list1, 'application1.jpg', grid_cols=3)
create_collage(list2, 'application2.jpg', grid_cols=2)
create_collage(list3, 'application_industrial.jpg', grid_cols=3)
