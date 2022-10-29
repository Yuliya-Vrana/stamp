import { animate } from "./helpers";

const mobailMenu = () => {
    const menuBtn = document.querySelector('.mob-menu-btn')
    const mobailMenu = document.querySelector('.mobile-menu')
    const overlay = document.querySelector('.overlay')
    //const servisesBtn = document.querySelector('.services-elements')

    const modalOpen = (e) => {
        e.preventDefault()
        mobailMenu.style.right = "0"
        overlay.style.opacity = 1
        overlay.style.zIndex = 999
        animate({
            duration: 300,
            timing(timeFraction){
                return timeFraction
            },
            draw(progress){
                mobailMenu.style.opacity = progress 
                overlay.style.opacity = progress  
            }
        })
    }
    
    menuBtn.addEventListener('click', (e) => modalOpen(e)) 
  
    overlay.addEventListener('click', (e) => {
        e.preventDefault()

        if(e.target.closest('.mobile-menu-close') || e.target.matches('.overlay')
          || e.target.matches('.mobile-menu > ul > li > a')){
           
            mobailMenu.style.right = "-400px"
            overlay.style.opacity = 0
            overlay.style.zIndex = -100
        }
    })
}

export default mobailMenu



