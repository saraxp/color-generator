import api from '../api';

interface GenerateColorsProps {
  schemeType: string;
  lockedColors?: Array<any>; // Adjust type as needed
}

const fetchColors = async ({schemeType, lockedColors}:GenerateColorsProps) => {
    try {
      const response = await api.get('/api/generate-palette', {
        params: { scheme_type: schemeType, lockedColors }
      });
      return response.data.colors;
    } catch (error) {
      console.error("Error fetching colors", error);
      throw error;
    }
};

export default fetchColors;