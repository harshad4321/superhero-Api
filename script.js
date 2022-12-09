// const { json, response } = require("express")
// require('dotenv').config();
 const SUPERHERO_TOKEN='1431840433956040'
const BASE_URL=
`https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const newHeroButton =
document.getElementById('newHeroButton')
 const heroImage = document.getElementById('heroImage')

const  searchButton = document.getElementById('searchButton')

const searchInput = document.getElementById('searchInput').innerText

const getSuperHero=(id,name)=>{
  // console.log(searchInput)
  
    fetch(`${BASE_URL}/${id}`)
    .then(reponse=>reponse.json())
    .then(json=>{  
      // const hero = json.result[0]
            // console.log(hero)
        heroImage.innerHTML+=`<img
        src="${json.image.url}" heigh=200 width=200/>`
      
        })
    }
const getSearchSuperHero=(name)=>{
    fetch(`${BASE_URL}/search/${name}`)
   
    .then(reponse=>reponse.json())
    .then(json=>{  
      const hero = json.results[0]
        heroImage.innerHTML+=`<img
        src="${hero.image.url}" heigh=200 width=200/>`
  })
}
const randomHero =()=>{
    const numberOfHeroes = 731
    return Math.floor(Math.random()*numberOfHeroes)+1
}
newHeroButton.onclick=()=>getSuperHero(randomHero())

searchButtontton.onclick=()=>getSearchSuperHero(searchInput.value)
// const PORT = process.env.PORT || 3000;

// server.listen(PORT, console.log(`Listening on port ${PORT}!!!!.`));