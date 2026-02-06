import os
from pypdf import PdfReader

# Paths
pdf_path = r"d:\EvolveProfile\Brochure evolvewood.pdf"
output_dir = r"d:\EvolveProfile\evolvewood-website\public\images\applications"

# Verify PDF exists
if not os.path.exists(pdf_path):
    print(f"Error: PDF not found at {pdf_path}")
    exit(1)

# Ensure output directory exists
os.makedirs(output_dir, exist_ok=True)

reader = PdfReader(pdf_path)
count = 0

print(f"Extracting images from {pdf_path}...")

for page_num, page in enumerate(reader.pages):
    for image_file_object in page.images:
        try:
            # Filter for small icons or logos if needed, but for now take all
            # We will rename specific ones manually later or just dump them all
            ext = os.path.splitext(image_file_object.name)[1]
            if not ext:
                ext = ".jpg"
                
            filename = f"extracted_{page_num}_{count}{ext}"
            filepath = os.path.join(output_dir, filename)
            
            with open(filepath, "wb") as fp:
                fp.write(image_file_object.data)
                
            print(f"Saved {filepath}")
            count += 1
        except Exception as e:
            print(f"Failed to extract image on page {page_num}: {e}")

print(f"Done. Extracted {count} images.")
