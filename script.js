
// Old template JS from: https://github.com/bradtraversy/50projects50days/blob/master/sticky-navigation/script.js
/*const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}*/

const heroElement = document.querySelector('.hero')  // Obtain the first HTML element that is of class hero (".hero" in css)

window.addEventListener('click', changePicOnClick)
// ^^^ Create event listener that waits for a click in the window and runs `changePicOnClick()` when a click occurs 

function changePicOnClick() {

    if(heroElement.classList.contains('active')){ // if the hero element contains active class (".hero.active" in css)...
        heroElement.classList.remove('active') //... then remove active class from hero element (so it's just ".hero" again in css)
    }
    else { // if the hero element does not contain the active class (just ".hero" again in css)...
        heroElement.classList.add('active') //... then add active class to the hero element (so it's now ".hero.active" in css)
    }
}