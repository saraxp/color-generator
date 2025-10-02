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
    base_hue = random.randint(0, 360)
    complement_hue = (base_hue + 180) % 360
    base_sat = random.randint(55, 75)
    base_light = random.randint(40, 55)
    
    colors = [
        (base_hue, base_sat, base_light),                  # Primary
        (complement_hue, base_sat, base_light),            # Complement
        ((base_hue + 20) % 360, base_sat - 10, base_light + 15),  # Accent
        (base_hue, base_sat - 20, base_light + 25),        # Light
        (complement_hue, base_sat + 15, base_light - 20)   # Dark
    ]
    return colors


def generate_analogous():
    base_hue = random.randint(0, 360)
    base_sat = random.randint(55, 75)
    base_light = random.randint(40, 55)
    
    colors = [
        (base_hue, base_sat, base_light),                       # Primary
        ((base_hue + 30) % 360, base_sat - 5, base_light + 10), # Secondary
        ((base_hue - 30) % 360, base_sat + 5, base_light - 10), # Accent
        (base_hue, base_sat - 15, base_light + 25),             # Light
        ((base_hue + 15) % 360, base_sat + 10, base_light - 20) # Dark
    ]
    return colors


def generate_triadic():
    base_hue = random.randint(0, 360)
    secondary_hue = (base_hue + 120) % 360
    tertiary_hue = (base_hue + 240) % 360
    
    base_sat = random.randint(55, 75)
    base_light = random.randint(40, 55)
    
    colors = [
        (base_hue, base_sat, base_light),                        # Primary
        (secondary_hue, base_sat - 5, base_light + 10),          # Secondary
        (tertiary_hue, base_sat + 5, base_light - 10),           # Accent
        (base_hue, base_sat - 15, base_light + 25),              # Light
        (secondary_hue, base_sat + 10, base_light - 20)          # Dark
    ]
    return colors

def generate_split_complementary():
    base_hue = random.randint(0, 360)
    complement_base = (base_hue + 180) % 360
    split1_hue = (complement_base + 30) % 360
    split2_hue = (complement_base - 30) % 360
    
    base_sat = random.randint(55, 75)
    base_light = random.randint(40, 55)
    
    colors = [
        (base_hue, base_sat, base_light),                        # Primary
        (split1_hue, base_sat - 5, base_light + 10),             # Secondary
        (split2_hue, base_sat + 5, base_light - 10),             # Accent
        (base_hue, base_sat - 15, base_light + 25),              # Light
        (split1_hue, base_sat + 10, base_light - 20)             # Dark
    ]
    return colors


def generate_square():
    base_hue = random.randint(0, 360)
    secondary_hue = (base_hue + 90) % 360
    tertiary_hue = (base_hue + 180) % 360
    quaternary_hue = (base_hue + 270) % 360
    
    base_sat = random.randint(55, 75)
    base_light = random.randint(40, 55)
    
    colors = [
        (base_hue, base_sat, base_light),                        # Primary
        (secondary_hue, base_sat - 5, base_light + 10),          # Secondary
        (tertiary_hue, base_sat + 5, base_light - 10),           # Accent
        (quaternary_hue, base_sat - 15, base_light + 25),        # Light
        (base_hue, base_sat + 10, base_light - 20)               # Dark
    ]
    return colors
