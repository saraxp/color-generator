import random

def generate_monochromatic():
    # Generate 5 monochromatic colors using same hue with varying saturation/lightness
    base_hue = random.randint(0, 360)
    colors = [
        (base_hue, 70, 50),  # Primary
        (base_hue, 80, 30),  # Secondary (Dark)
        (base_hue, 60, 70),  # Accent (Medium)
        (base_hue, 50, 85),  # Light
        (base_hue, 40, 95)   # Lightest (Dark)
    ]
    return colors

def generate_complementary():
    # Generate 5 complementary colors using opposite hues on color wheel
    primary_hue = random.randint(0, 360)
    complement_hue = (primary_hue + 180) % 360
    
    colors = [
        (primary_hue, 70, 50),               # Primary
        (complement_hue, 70, 50),            # Secondary
        ((primary_hue + 30) % 360, 80, 60),  # Accent
        (primary_hue, 50, 85),               # Light
        (complement_hue, 60, 25)             # Dark
    ]
    return colors

def generate_analogous():
    primary_hue = random.randint(0, 360)
    
    # Create 5 colors using analogous hues (±30°)
    colors = [
        # Three analogous hues
        (primary_hue, 70, 50),                    # Primary
        ((primary_hue + 30) % 360, 70, 50),      # Secondary  
        ((primary_hue - 30) % 360, 70, 50),      # Accent
        
        # Light and dark variations
        (primary_hue, 50, 80),                    # Light
        ((primary_hue + 15) % 360, 80, 30)       # Dark
    ]
    
    return colors

def generate_triadic():
    # Get the 3 triadic hues (120° apart)
    primary_hue = random.randint(0, 360)
    secondary_hue = (primary_hue + 120) % 360
    tertiary_hue = (primary_hue + 240) % 360
    
    # Create 5 colors
    colors = [
        # Three triadic colors
        (primary_hue, 70, 50),        # Primary
        (secondary_hue, 70, 50),      # Secondary
        (tertiary_hue, 70, 50),       # Accent
        
        # Light and dark variations
        (primary_hue, 50, 85),        # Light
        (secondary_hue, 80, 25)       # Dark
    ]
    
    return colors

def generate_split_complementary():
    # Get primary and its split complements
    primary_hue = random.randint(0, 360)
    complement_base = (primary_hue + 180) % 360
    split1_hue = (complement_base + 30) % 360  # Complement + 30°
    split2_hue = (complement_base - 30) % 360  # Complement - 30°
    
    # Create 5 colors
    colors = [
        # Split complementary colors
        (primary_hue, 70, 50),        # Primary
        (split1_hue, 70, 50),         # Secondary
        (split2_hue, 70, 50),         # Accent
        
        # Light and dark variations
        (primary_hue, 50, 85),        # Light
        (split1_hue, 80, 25)          # Dark
    ]
    
    return colors

def generate_square():
    # Get the 4 square hues (90° apart)
    primary_hue = random.randint(0, 360)
    secondary_hue = (primary_hue + 90) % 360
    tertiary_hue = (primary_hue + 180) % 360
    quaternary_hue = (primary_hue + 270) % 360
    
    # Create 5 colors
    colors = [
        # Four square colors + one variation
        (primary_hue, 70, 50),        # Primary
        (secondary_hue, 70, 50),      # Secondary
        (tertiary_hue, 70, 50),       # Accent
        
        # Light and dark from different hues
        (quaternary_hue, 60, 80),     # Light
        (primary_hue, 80, 25)         # Dark
    ]
    
    return colors