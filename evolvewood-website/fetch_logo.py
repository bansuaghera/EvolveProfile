import os
from pypdf import PdfReader

# Paths
pdf_path = r"d:\EvolveProfile\Brochure evolvewood.pdf"
output_dir = r"d:\EvolveProfile\evolvewood-website\public\images\temp_logo"

reader = PdfReader(pdf_path)
page = reader.pages[0]

count = 0
for image_file_object in page.images:
    try:
        ext = os.path.splitext(image_file_object.name)[1]
        if not ext:
            ext = ".png"
        
        # Save all images from page 0
        filename = f"img_{count}{ext}"
        filepath = os.path.join(output_dir, filename)
        
        with open(filepath, "wb") as fp:
            fp.write(image_file_object.data)
            
        print(f"Saved {filepath} ({len(image_file_object.data)} bytes)")
        count += 1
    except Exception as e:
        print(f"Error: {e}")
