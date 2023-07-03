
// For cached results
export const TEN_MINUTES = 600000;         //milliseconds in ten minutes

// Test Url
export const url = 'http://localhost:4000'

// local storage keys
export const SEARCH_KEY = "MOVIE_APP_SEARCH_STRING";
export const MOVIE_KEY = "MOVIE_APP_MOVIE_KEY";


const key = '1982aef0e1f11c0677b20dc7b708bb87';

const request = {
    requestPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&page=1',
    requestTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&page=1',
    requestTrending: 'https://api.themoviedb.org/3/movie/popular?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&page=2',
    requestHorror: 'https://api.themoviedb.org/3/search/movie?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&query=horror&page=1&include_adult=false',
    requestUpcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&page=1',
    movieInfo: 'https://api.themoviedb.org/3/movie/343611?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US'
}

export default request;