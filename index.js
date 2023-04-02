import { Dog } from "./dog.js";
import { getCurrentDog, resetBtns } from "./utils.js";

// THE BUTTON SELECTORS
const nopeBtn = document.getElementById('nope-btn')
const likeBtn = document.getElementById('like-btn')
let currentDog = new Dog(getCurrentDog())
console.log(currentDog.getDogHtml())

render()

function render(){
    document.getElementById('profile-area').innerHTML = currentDog.getDogHtml()
}

function dislikePic(){
    // This function should display the Nope Badge on the Picture of currentDog
    nopeBtn.classList.add('disliked')
    currentDog.hasBeenLiked = false
    currentDog.setDogState()
    render()
    setTimeout(()=>{
        resetBtns(nopeBtn)
        currentDog = new Dog(getCurrentDog())
        render()
        
    },1200)
}

function likePic(){
    // This function should display the Nope Badge on the Picture of currentDog
    likeBtn.classList.add('liked')
    currentDog.hasBeenLiked = true
    currentDog.setDogState()
    render()
    setTimeout(()=>{
        resetBtns(likeBtn)
        currentDog = new Dog(getCurrentDog())
        render()
        
    },1200)
}

nopeBtn.addEventListener('click', dislikePic)
likeBtn.addEventListener('click', likePic)