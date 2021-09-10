import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  SEARCH_BASE_URL1,
  POPULAR_BASE_URL1, 
  API_URL,
  API_KEY,
 
} from './config';


const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
   fetchTVs: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL1}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL1}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },

  fetchMovie: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },

  fetchTV: async tvId => {
    const endpoint = `${API_URL}tv/${tvId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },


  fetchCredits: async movieId => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },

  fetchTVCredits: async tvId => {
    const creditsEndpoint = `${API_URL}tv/${tvId}/credits?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(creditsEndpoint)).json();
  },
 
  
};

export default apiSettings;
