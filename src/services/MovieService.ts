import axios from 'axios';

export const movieService = {
  getShortTeasers: async () => {
      try {
          const response = await axios.get('https://nijin-server.vercel.app/api/cineflex/short-teasers')
          return response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
      }
  },

  getMovies: async () => {
      try {
          const response = await axios.get('https://run.mocky.io/v3/4f4267b5-d056-42fb-a1fd-190456b1c1b3')
          return response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
      }
  }
}