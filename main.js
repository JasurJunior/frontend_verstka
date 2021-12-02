const API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'
// let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'
const URLS = [
  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=`,

  `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=`,

  `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=`,
]

START()

async function START(URLpar = 0, PAGESpar = 1) {
  let data = await fetch(URLS[URLpar])
  console.log(data)
}
