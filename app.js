const lightOn = document.querySelector('.on')
const lightOff = document.querySelector('.off')
const balfImg = document.querySelector('.balf')

lightOn.addEventListener('click', ()=> {
     balfImg.src = "https://www.w3schools.com/js/pic_bulbon.gif"
})

lightOff.addEventListener('click',()=>{
    balfImg.src="https://www.w3schools.com/js/pic_bulboff.gif"
})


// random-color 

const ranColor = document.querySelector('.random')

const RanColor = document.querySelector('.RanColor')


ranColor.addEventListener('click',()=>{


    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)


    RanColor.style.backgroundColor = `rgb( ${red},${green},${blue})`

})


// range 


const inputRange = document.querySelector('.rge')
const heading = document.querySelector('.headinOne')

inputRange.addEventListener('input',()=>{
    heading.innerHTML = Number(inputRange.value)
    
})