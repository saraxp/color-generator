from pydantic import BaseModel
from typing import List, Optional

# Base Models

class ColorFormat(BaseModel):
    hex: str
    rgb: str
    hsl: str

class Color(BaseModel):
    name: str # Primary, Secondary, Accent, Light or Dark
    formats: ColorFormat
    locked: bool = False

class PaletteResponse(BaseModel):
    colors: List[Color]
    scheme_type: str # Monochromatic, Square, Complementary, Split-Complementary, Triadic, Analogous

class GeneratePaletteRequest(BaseModel):
    scheme_type: str
    locked_colors: Optional[List[dict]] = None
