const carousel = () => {
    let sliderToShow = 3
    const sliderToScroll = 1
    const container = document.querySelector('.services-elements')
    const track = container.querySelector('.services-carousel')
    const elements = track.querySelectorAll('.element')

    const arrowLeft = document.querySelector('.arrow-left')
    const arrowRight = document.querySelector('.arrow-right')

    const clientWidthScreen = screen.width
    
  
    if(clientWidthScreen >= 1250){
        sliderToShow = 3
    } else if(clientWidthScreen < 1250 && clientWidthScreen >= 950){
        sliderToShow = 2
    } else if(clientWidthScreen < 950 ){
        sliderToShow = 1
    }

    const elemWidth = Math.floor(container.clientWidth / sliderToShow)
    //const movePosition = sliderToScroll * elemWidth
    let position = -elemWidth
    
    
    elements.forEach(elem => { 
        elem.style.minWidth = `calc(${elemWidth}px - 7px)`
    })

    const setPosition = () => {
   
        let scroll = - (elements.length - sliderToShow) * elemWidth

        if(position > 0){
            position = scroll
        }

        if(position < scroll){
            position = 0
        }

        track.style.transform = `translateX(${position}px)`      
    }

    
    arrowLeft.addEventListener('click', () => {
        position += Math.floor(elemWidth)
        setPosition()

    })

    arrowRight.addEventListener('click', () => {
        position -= Math.floor(elemWidth)
        setPosition()

    })
}

export default carousel



