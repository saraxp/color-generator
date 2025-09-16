import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.palette import ColorFormat, Color, PaletteResponse, GeneratePaletteRequest
from utils.color_generator import generate_monochromatic, generate_complementary, generate_analogous, generate_triadic, generate_split_complementary, generate_square

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def hsl_to_rgb(h, s, l):
    h = h / 360
    s = s / 100
    l = l / 100

    C = (1 - abs(2*l - 1)) * s
    X = C * (1 - abs(h * 6 % 2 - 1))
    m = l - C / 2

    if 0 <= h < 1/6:   
        R = C
        G = X
        B = 0
    elif 1/6 <= h < 2/6: 
        R = X
        G = C
        B = 0  
    elif 2/6 <= h < 3/6: 
        R = 0 
        G = C
        B = X
    elif 3/6 <= h < 4/6: 
        R = 0
        G = X
        B = C
    elif 4/6 <= h < 5/6: 
        R = X
        G = 0
        B = C
    elif 5/6 <= h < 1:   
        R = C
        G = 0
        B = X

    R = round((R + m) * 255)
    G = round((G + m) * 255)
    B = round((B + m) * 255)

    rgb_to_hex(R, G, B)

    return R, G, B  # Placeholder for now

def rgb_to_hex(R, G, B):
    
    R_hex = format(R, '02x')  
    G_hex = format(G, '02x')
    B_hex = format(B, '02x')

    return f"#{R_hex}{G_hex}{B_hex}"  # Placeholder for now

def convert_hsl_tuples_to_colors(hsl_tuples):
    color_names = ["Primary", "Secondary", "Accent", "Light", "Dark"]
    colors = [] 
    
    for i, (h, s, l) in enumerate(hsl_tuples):
        R, G, B = hsl_to_rgb(h, s, l)
        color = Color(
            name=color_names[i],
            formats=ColorFormat(
                hex=rgb_to_hex(R, G, B),  
                rgb=f"rgb({R}, {G}, {B})",
                hsl=f"hsl({h}, {s}%, {l}%)"
            )
        )
        colors.append(color)
    
    return colors

@app.get("/api/generate-palette", response_model=PaletteResponse)
async def generate_palette(scheme_type: str):

    if scheme_type == "Monochromatic":
        hsl_colors = generate_monochromatic()
    elif scheme_type == "Complementary":
        hsl_colors = generate_complementary()
    elif scheme_type == "Analogous":
        hsl_colors = generate_analogous()
    elif scheme_type == "Triadic":
        hsl_colors = generate_triadic()
    elif scheme_type == "Split-Complementary":
        hsl_colors = generate_split_complementary()
    elif scheme_type == "Square":
        hsl_colors = generate_square() 

    formatted_colors = convert_hsl_tuples_to_colors(hsl_colors)    
    
    return PaletteResponse(
        colors = formatted_colors,
        scheme_type=scheme_type
    )


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)