const API_KEY = "07563d65a8423442823f0acb23041162";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=50`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=1000`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchUpComping: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
