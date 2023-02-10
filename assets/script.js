let layout = document.getElementById('layout')
let menu = document.getElementById('menu')
let hamburger = document.getElementById('hamburger')
let img = '<img src="./assets/images/icon-menu-close.svg" alt="">'

function hideDiv(){
    if(window.matchMedia("(max-width: 1124px)").matches){
        menu.style.display = 'none'
        hamburger.addEventListener('click', () => {
            if(menu.style.display == 'none'){
                menu.style.display ='block'
                hamburger.innerHTML = img
                layout.style.display = 'block'
            }else{
                menu.style.display ='none'
                hamburger.innerHTML = '<img src="./assets/images/icon-menu.svg" alt="">'
                layout.style.display = 'none'
            }
        })
    }else{
        menu.style.display = 'block'
    }
}

hideDiv()

window.addEventListener('resize', hideDiv)