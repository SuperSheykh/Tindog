import dogs from "./data.js";

// Here I need to create a function that returns the current dog randomly
const getCurrentDog = () => dogs.length ? dogs.shift() : {}

// This function resets all buttons status
const resetBtns = (btn) => btn.className = "btn"

export {getCurrentDog, resetBtns}