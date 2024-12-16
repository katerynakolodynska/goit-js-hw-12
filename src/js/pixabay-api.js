import axios from 'axios'

export async function fetchImages(query, page = 1, perPage =15) {
  const API_URL = 'https://pixabay.com/api/';
    const API_KEY = '47525205-faccd6d0438e1a7a5e4c149e6'; 
  const requestParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  });

  try {
    const response = await axios.get(`${API_URL}?${requestParams}`);
    return response.data;
  } catch(error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}