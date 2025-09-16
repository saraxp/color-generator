import api from '../api';

interface GenerateColorsProps {
  schemeType: string;
}

const fetchColors = async ({schemeType}:GenerateColorsProps) => {
    try {
      const response = await api.get('/api/generate-palette', {
        params: { scheme_type: schemeType }
      });
      return response.data.colors;
    } catch (error) {
      console.error("Error fetching colors", error);
      throw error;
    }
};

export default fetchColors;