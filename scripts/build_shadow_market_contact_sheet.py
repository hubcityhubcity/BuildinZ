from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets" / "candidates"
OUTPUT = ROOT / "design" / "qa" / "shadow-market" / "shadow-market-15-master-contact-sheet.png"

ROWS = [
    ("Residential", [
        ("Gloomstep Flats", "shadow-market-gloomstep-flats-stage-1-v1.png"),
        ("Veilside Habitat", "shadow-market-veilside-habitat-stage-2-v1.png"),
        ("Noctis Enclave", "shadow-market-noctis-enclave-stage-3-v1.png"),
    ]),
    ("Retail", [
        ("Lantern Row", "shadow-market-lantern-row-stage-1-v1.png"),
        ("Blackglass Bazaar", "shadow-market-blackglass-bazaar-stage-2-v1.png"),
        ("Eclipse Exchange", "shadow-market-eclipse-exchange-stage-3-v1.png"),
    ]),
    ("Technology", [
        ("Cipher Works", "shadow-market-cipher-works-stage-1-v1.png"),
        ("Umbra Array", "shadow-market-umbra-array-stage-2-v1.png"),
        ("Nightcode Nexus", "shadow-market-nightcode-nexus-stage-3-v2.png"),
    ]),
    ("Entertainment", [
        ("Backroom Stage", "shadow-market-backroom-stage-1-v1.png"),
        ("Phantom Pavilion", "shadow-market-phantom-pavilion-stage-2-v1.png"),
        ("Midnight Masquerade", "shadow-market-midnight-masquerade-stage-3-v1.png"),
    ]),
    ("Landmark", [
        ("Veil Beacon", "shadow-market-veil-beacon-stage-1-v1.png"),
        ("Obsidian Spire", "shadow-market-obsidian-spire-stage-2-v1.png"),
        ("Shadow Sovereign", "shadow-market-shadow-sovereign-stage-3-v1.png"),
    ]),
]

CANVAS_W, CANVAS_H = 1240, 2860
LEFT = 175
COL_W = 340
ROW_H = 520
TOP = 190
IMAGE_W, IMAGE_H = 300, 450


def font(size: int, bold: bool = False):
    name = "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"
    return ImageFont.truetype(f"/usr/share/fonts/truetype/dejavu/{name}", size)


def centered(draw, xy, text, fnt, fill):
    x, y = xy
    box = draw.textbbox((0, 0), text, font=fnt)
    draw.text((x - (box[2] - box[0]) / 2, y), text, font=fnt, fill=fill)


def fitted_font(draw, text: str, max_width: int, start_size: int = 19):
    size = start_size
    while size > 10:
        candidate = font(size, True)
        box = draw.textbbox((0, 0), text, font=candidate)
        if box[2] - box[0] <= max_width:
            return candidate
        size -= 1
    return font(10, True)


def main():
    canvas = Image.new("RGB", (CANVAS_W, CANVAS_H), "#0a0d16")
    draw = ImageDraw.Draw(canvas)
    draw.text((42, 30), "SHADOW MARKET — 15 BASE MASTER COLLECTION QA", font=font(34, True), fill="#f0bf73")
    draw.text((42, 82), "Equal-width review · five identities × three architectural evolution stages", font=font(20), fill="#b8c0cf")

    for i, label in enumerate(("STAGE I", "STAGE II", "STAGE III")):
        centered(draw, (LEFT + i * COL_W + COL_W / 2, 142), label, font(22, True), "#95f36b")

    for row_idx, (building_type, stages) in enumerate(ROWS):
        y = TOP + row_idx * ROW_H
        draw.rounded_rectangle((20, y + 8, LEFT - 18, y + IMAGE_H + 62), radius=14, fill="#121a28", outline="#8e623e", width=2)
        label = building_type.upper()
        label_font = fitted_font(draw, label, LEFT - 58)
        centered(draw, ((LEFT - 18) / 2 + 10, y + 220), label, label_font, "#e6b87c")
        for col_idx, (name, filename) in enumerate(stages):
            path = ASSETS / filename
            if not path.exists():
                raise FileNotFoundError(path)
            with Image.open(path) as src:
                if src.size != (1024, 1536) or src.mode != "RGB":
                    raise ValueError(f"Unexpected source format: {filename}: {src.size} {src.mode}")
                thumb = src.resize((IMAGE_W, IMAGE_H), Image.Resampling.LANCZOS)
            x = LEFT + col_idx * COL_W + (COL_W - IMAGE_W) // 2
            canvas.paste(thumb, (x, y))
            draw.rectangle((x, y, x + IMAGE_W, y + IMAGE_H), outline="#7d8796", width=2)
            centered(draw, (x + IMAGE_W / 2, y + IMAGE_H + 12), name, font(17, True), "#ffffff")
            centered(draw, (x + IMAGE_W / 2, y + IMAGE_H + 37), filename, font(10), "#8f99aa")

    draw.text((42, 2815), "Candidate masters only — this sheet is QA evidence, not final NFT certification.", font=font(16), fill="#b8c0cf")
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(OUTPUT, format="PNG", optimize=True)
    print(OUTPUT)


if __name__ == "__main__":
    main()
