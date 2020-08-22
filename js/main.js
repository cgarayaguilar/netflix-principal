const row = document.querySelector('.carousel-container')
const movies = document.querySelectorAll('.movie')

const leftArrow = document.querySelector('#left-arrow')
const rightArrow = document.querySelector('#right-arrow')

rightArrow.addEventListener('click', () => {
  row.scrollLeft += row.offsetWidth

  const activeIndicator = document.querySelector('.indicators .active')

  if (activeIndicator.nextSibling) {
    activeIndicator.nextSibling.classList.add('active')
    activeIndicator.classList.remove('active')
  }
})

leftArrow.addEventListener('click', () => {
  row.scrollLeft -= row.offsetWidth

  const activeIndicator = document.querySelector('.indicators .active')

  if (activeIndicator.previousSibling) {
    activeIndicator.previousSibling.classList.add('active')
    activeIndicator.classList.remove('active')
  }
})

//Pagination
const numPages = movies.length / 5

console.log(Math.ceil(numPages))

for (let i = 0; i < numPages; i++) {
  const indicator = document.createElement('button')
  if (i === 0) {
    indicator.classList.add('active')
  }

  document.querySelector('.indicators').appendChild(indicator)

  indicator.addEventListener('click', e => {
    row.scrollLeft = i * row.offsetWidth
    document.querySelector('.indicators .active').classList.remove('active')
    e.target.classList.add('active')
  })
}

////Hover de imagen

movies.forEach(movie => {
  movie.addEventListener('mouseenter', e => {
    const element = e.currentTarget

    setTimeout(() => {
      movies.forEach(movie => movie.classList.remove('hover'))
      element.classList.add('hover')
    }, 150)
  })
})

row.addEventListener('mouseleave', () => {
  movies.forEach(movie => movie.classList.remove('hover'))
})
