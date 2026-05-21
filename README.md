# YourHue 🎨

A modern color palette generator built with React and FastAPI that helps designers and developers create harmonious color schemes using color theory principles.

## Features

- **Multiple Color Schemes**: Generate palettes based on:
  - Monochromatic
  - Complementary
  - Analogous
  - Triadic
  - Split-Complementary
  - Square

- **Lock Colors**: Lock specific colors to regenerate the palette while keeping your favorites
- **Multiple Formats**: Export colors in HEX, RGB, and HSL formats
- **Copy to Clipboard**: Easily copy entire palettes in your preferred format
- **Keyboard Shortcuts**: 
  - `Enter` - Generate new palette
  - `↑/↓` - Navigate color schemes
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop

## Tech Stack

#### Frontend
- React 19
- TypeScript
- Tailwind CSS 4
- Vite 7
- Axios for API calls

#### Backend
- FastAPI
- SQLAlchemy
- PostgreSQL
- Python 3.x

## Project Structure
```
.
├── backend/
│   ├── main.py                 # FastAPI application
│   ├── models/
│   │   ├── models.py          # SQLAlchemy models
│   │   └── schemas.py         # Pydantic schemas
│   ├── utils/
│   │   ├── color_generator.py # Color generation logic
│   │   └── database.py        # Database configuration
│   └── requirements.txt
│
└── frontend/
    ├── src/
    │   ├── components/        # React components
    │   ├── types/            # TypeScript types
    │   ├── utils/            # Utility functions
    │   ├── App.tsx           # Main application
    │   └── main.tsx          # Application entry
    ├── package.json
    └── vite.config.ts
```

## Installation

### Prerequisites
- Node.js (v20.19.0 or higher)
- Python 3.x
- PostgreSQL

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```
3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the backend directory:
```python
DATABASE_URL=postgresql://username:password@localhost/dbname
```

5. Run the server:
```bash
python main.py
```

The backend will start on `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## Usage

1. **Select a Color Scheme**: Use the dropdown or arrow keys to choose your desired color scheme type
2. **Generate Palette**: Click the "Generate" button or press `Enter`
3. **Lock Colors**: Hover over a color box and click the lock icon to preserve that color in future generations
4. **Copy Colors**: Click the clipboard button to view and copy colors in different formats
5. **Share**: Use the share button to share your palette (feature in development)

## API Endpoints

### Generate Palette
```http
GET /api/generate-palette
```
**Parameters:**
- `scheme_type` (string): Type of color scheme
- `locked_colors` (optional, JSON string): Array of locked colors

**Response:**
```json
{
  "colors": [
    {
      "name": "Primary",
      "formats": {
        "hex": "#hexcode",
        "rgb": "rgb(...)",
        "hsl": "hsl(...)"
      }
    }
  ],
  "scheme_type": "Monochromatic"
}
```

### Save Palette
```http
POST /palettes/
```

### Get Palette
```http
GET /palettes/{palette_id}
```

## Acknowledgments

- Color theory algorithms based on HSL color space
- Icons from Lucide React
- Font: Sometype Mono
