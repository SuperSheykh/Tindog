// import { } from './utils/js'

class Dog {
    constructor(dogData){
        Object.assign(this, dogData)
        this.positionStyle = "static"
    }

    setDogState = () => {
        // Reveils if dog is liked or disliked.
        this.positionStyle = "relative"
        this.hasBeenSwiped = true
    }

    getModalHtml(){
        const {hasBeenSwiped,hasBeenLiked} = this
        const displayStyle = hasBeenSwiped ? "Block" : "None"
        const badgeLink = hasBeenLiked ? "./images/badge-like.png" :"./images/badge-nope.png"

        return `
        <div id="modal-pic-ctn" style="display: ${displayStyle}">
            <img id="modal-pic" src="${badgeLink}" alt="the badge of pic">
        </div>
        `
    }

    getDogHtml(){
        const {name, avatar, age, bio, positionStyle} = this  
        return `
        <div id="profile-area" style="position: ${positionStyle}">
            <div class="main-pic-ctn" style="background-image: url('${avatar}');">
                <h2>${name}, ${age}</h2>
                <h3>${bio}</h3>
            </div>
            ${this.getModalHtml()}
        </div>
        `
    }
    
}

export {Dog}