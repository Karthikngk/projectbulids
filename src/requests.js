

const API_KEY ="ff973210bba5e53275a923f0a75eb9ab"; 
const requests = {
    
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchTopRated:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;