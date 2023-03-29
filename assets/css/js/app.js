const cartFilm=document.querySelector('.cart-film')
const mainFilm=document.querySelector('.main-film')
const cartCarusel=document.querySelector('.cart-carusel')
const mainFilmName=document.querySelector('.main-film-name')
fetch("https://api.tvmaze.com/shows").then(data=>data.json())
.then(arr=>{
for (let i = 0; i < arr.length; i++) {
    mainFilm.innerHTML+=
    `
    <div class="cart-film mt-1">
    <img class="w-100 h-75" src="${arr[i].image.medium}" alt="">
    <p class="pt-4"><a class="text-decoration-none text-black " href=""><b>${arr[i].name}</b></a></p>
</div>
    `
    
}
})
fetch("https://api.tvmaze.com/shows").then(data3=>data3.json())
.then(arrCarusel=>{
for (let i = 0; i < 23; i++) {
    cartCarusel.innerHTML+=
    `
    <div class="cart">
    <img class="w-100 h-50" src="${arrCarusel[i].image.medium}" alt="">
    <p><a class="text-decoration-none text-black" href="">${arrCarusel[i].name}</a></p>
</div>

    `
}
})
fetch("https://api.tvmaze.com/shows").then(data2=>data2.json())
.then(arr2=>{
for (let i = 0; i <arr2.length; i++) {
    mainFilmName.innerHTML+=
    `
    <div class="d-flex justify-content-between">
    <p class="hoverr "><a class="text-decoration-none  " href="">${arr2[i].name} ${arr2[i].id}(sezon))</a></p>
    <p>${arr2[i].runtime} bolum</p>
</div>
    `
    
    
}
})

const film=document.querySelector('.film')
const filmTik=document.querySelector('.zzz')
const serial=document.querySelector('.serial')
const cizgifilm=document.querySelector('.cizgifilm')
const comedi=document.querySelector('.komedi')
film.addEventListener('click',function (e) {
    filmTik.classList.toggle('d-none')
    e.preventDefault()
})
serial.addEventListener('click',function (e) {
    filmTik.classList.toggle('d-none')
    e.preventDefault()
})
cizgifilm.addEventListener('click',function (e) {
    filmTik.classList.toggle('d-none')
    e.preventDefault()
})
comedi.addEventListener('click',function (e) {
    filmTik.classList.toggle('d-none')
    e.preventDefault()
})
const  dispNone=document.querySelector('.dispNone')
fetch("https://api.tvmaze.com/shows").then(dataDisp=>dataDisp.json())
.then(arrDispNone=>{
for (let i = 0; i <32; i++) {
    dispNone.innerHTML+=
    `
    <a class="text-decoration-none padd-left  text-black" href="geyim.html">${arrDispNone[i].name}</a>
    `
    
    
}
})