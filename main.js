const API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'
// let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'
const URLS = [
  `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=`,

  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=`,

  `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=`,
]
let rangePAGES = 2,
  NOWpages,
  _pages = 1

const MAINdiv = document.querySelector('.append')

//for pagination
const PREVbtn = document.querySelector('.prev')
const NEXTbtn = document.querySelector('.next')
const POGINATIONnum = document.querySelector('.title')

//for categories
const BTNS = document.querySelectorAll('.btns')

//events======
BTNS.forEach((e, i) => {
  e.onclick = () => {
    START(i)
  }
})

PREVbtn.onclick = () => {
  if (_pages == 1) return
  _pages--
  START()
}

PREVbtn.onclick = () => {
  if (_pages == 1) return
  _pages--
  POGINATIONnum.innerHTML = _pages
  START()
}

NEXTbtn.onclick = () => {
  _pages++
  POGINATIONnum.innerHTML = _pages
  START()
}
//==================== functions =======================
START()

async function START(_url = 0) {
  try {
    if (!(_pages <= rangePAGES)) return alert('range ERROR!')

    let data = await fetch(URLS[_url] + _pages)
    data = await data.json()
    rangePAGES = data?.total_pages
    renderFUN(data?.results)
  } catch (e) {
    console.log(e)
  }
}

function renderFUN(_data) {
  MAINdiv.innerHTML = null
  NOWpages = _data

  for (const i of _data) {
    MAINdiv.append(createFUN(i.title, i.vote_average, i.release_date, i.poster_path))
  }
}

function createFUN(_name, _reyting, _date, _imgURL) {
  let divMOVE = abs('div'),
    IMG = abs('img'),
    divINFO = abs('div'),
    H3 = abs('h3'),
    spanORANGE = abs('span'),
    spanDATE = abs('span')

  //class
  divMOVE.className = 'movie'
  divINFO.className = 'movie-info'
  spanORANGE.className = 'orange'
  spanDATE.className = 'date'

  //text
  H3.innerText = _name
  spanORANGE.innerText = _reyting
  spanDATE.innerText = _date

  //img
  IMG.setAttribute('src', 'https://image.tmdb.org/t/p/w500' + _imgURL)

  //append
  divINFO.append(H3, spanORANGE)
  divMOVE.append(IMG, divINFO, spanDATE)

  return divMOVE
}

function abs(htmlEL) {
  return document.createElement(htmlEL)
}
