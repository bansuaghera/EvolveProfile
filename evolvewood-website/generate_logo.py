from PIL import Image, ImageDraw, ImageFont

# Canvas setup
width, height = 800, 200
img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Colors
green = "#388E3C"
brown = "#5D4037"
black = "#000000"

# Draw Icon (Stylized abstract box/leaf hint)
# Left side: 0 to 200
# Simplified representation of the brochure logo
# A cube with wood grain
icon_x, icon_y = 20, 20
icon_h = 160
# Front face (Brown)
draw.polygon([(icon_x+50, icon_y+50), (icon_x+110, icon_y+50), (icon_x+110, icon_y+130), (icon_x+50, icon_y+130)], fill=None, outline=brown, width=5)
# Top face (Green rings)
draw.polygon([(icon_x+50, icon_y+50), (icon_x+80, icon_y+20), (icon_x+140, icon_y+20), (icon_x+110, icon_y+50)], fill=None, outline=green, width=5)
draw.ellipse([icon_x+75, icon_y+25, icon_x+115, icon_y+45], outline=green, width=3)
# Side face (Brown)
draw.polygon([(icon_x+110, icon_y+50), (icon_x+140, icon_y+20), (icon_x+140, icon_y+100), (icon_x+110, icon_y+130)], fill=None, outline=brown, width=5)
# "E" shape hint inside
draw.line([(icon_x+60, icon_y+70), (icon_x+100, icon_y+70)], fill=brown, width=5)
draw.line([(icon_x+60, icon_y+90), (icon_x+90, icon_y+90)], fill=brown, width=5)
draw.line([(icon_x+60, icon_y+110), (icon_x+100, icon_y+110)], fill=brown, width=5)

# Text "Evolve" (Green)
try:
    # Try to use a serif font if available, else default
    font_large = ImageFont.truetype("arial.ttf", 100)
    font_small = ImageFont.truetype("arial.ttf", 40)
except:
    font_large = ImageFont.load_default()
    font_small = ImageFont.load_default()

# "Evolve"
draw.text((180, 40), "Evolve", fill=green, font=font_large)
# "Wood" (Brown)
# Measure "Evolve" width roughly or just offset
draw.text((180 + 310, 40), "Wood", fill=brown, font=font_large)

# Slogan "Save The Nature" (Black)
draw.text((360, 140), "Save The Nature", fill=black, font=font_small)

# Underline green line
draw.line([(360, 190), (550, 190)], fill=green, width=5)

# Save
img.save("public/images/logo.png")
print("Generated logo.png")
