import os
from pypdf import PdfReader
from PIL import Image
import io

# Paths
pdf_path = r"d:\EvolveProfile\Brochure evolvewood.pdf"
output_dir = r"d:\EvolveProfile\evolvewood-website\public\images\pages"

# Verify PDF exists
if not os.path.exists(pdf_path):
    print(f"Error: PDF not found at {pdf_path}")
    exit(1)

# Ensure output directory exists
os.makedirs(output_dir, exist_ok=True)

reader = PdfReader(pdf_path)

# We want to extract the full page as an image.
# pypdf doesn't render pages to images directly effectively without external tools like poppler/pdf2image.
# However, I only have pypdf and Pillow installed.
# I might not be able to "render" the text and layout perfectly if I don't have a renderer.
# BUT, looking at the previous extraction, the "screenshots" might actually be just BIG images embedded in the PDF if the brochure was made in Photoshop.
# If the brochure is vector text + images, I can't render it with just pypdf.

# Alternative: The user uploaded screenshots. I can't access them directly?
# Wait, I don't have access to the user's uploaded files (image.png, etc) on the filesystem unless they put them there.
# The prompt says "this is photos save it". Usually this implies the user expects me to use the images shown in the chat context.
# I cannot "download" images from the chat image content directly to a file.
# I MUST ask the user to strictly place the images or I have to try to reconstruct them.

# HOWEVER, I successfully extracted individual images earlier.
# If I cannot render the pages, maybe I should revert to the "Grid" layout which effectively *recreated* the page?
# The user said "no card formate just put this image as it is".
# This strongly implies they want the screenshot image itself.

# STRATEGY: 
# 1. Create the React page assuming `application1.png` and `application2.png` exist in `public/images/`.
# 2. Tell the user "I have created the page. Please save your screenshots as `public/images/application1.png` and `public/images/application2.png`".
# This is the safest way if I can't generate the page render.

# But wait, maybe I can find the existing images if they are extraction artifacts?
# Let's try to see if there are larg(er) images in the PDF that represent full pages (backgrounds?).
# I'll check the largest extracted images from my previous run.

pass
