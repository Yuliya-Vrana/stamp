import { animate } from "./helpers";

const modal = () => {
    const modalBtn = document.querySelectorAll('.callback-btn')
    const modalOverlay = document.querySelector('.modal-overlay')
    const buttonServices = document.querySelector('.button-services ')
    const servisesBtn = document.querySelector('.services-elements')
    const form = document.getElementById('form')
    const formElements =form.querySelectorAll('input')
    
    const modalOpen = (e) => {
        e.preventDefault()
        modalOverlay.style.display = "block"
        
        animate({
            duration: 500,
            timing(timeFraction){
                return timeFraction
            },
            draw(progress){
                modalOverlay.style.opacity = progress  
            }
        })
    }
    
    modalBtn.forEach(btn => {
        btn.addEventListener('click', (e) => modalOpen(e)) 
    })

    servisesBtn.addEventListener('click', (e) =>{
           if(e.target.closest('.absolute')){
              modalOpen(e)  
           }   
        } ) 
    
        

    buttonServices.addEventListener('click', (e) => modalOpen(e))
    
    modalOverlay.addEventListener('click', (e) => {
        e.preventDefault()

        if(e.target.closest('.modal-close') || !e.target.closest('.modal-callback ')){
            
            formElements.forEach(input => {
                const inputs = form.querySelectorAll('.form-control')
                inputs.forEach(input => input.value = '')              
            }   
        ) 
            modalOverlay.style.display = "none"
        }
    })
}

export default modal



