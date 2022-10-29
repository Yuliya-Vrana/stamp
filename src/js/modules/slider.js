const slider = () => {
    const sliderBlock = document.querySelector('.top-slider')
    const slides = document.querySelectorAll('.item')

    let current = 0
    let dot

    const addDots = () => {
        let dotBox = document.createElement('ul')

        dotBox.classList.add('slick-dots')
        sliderBlock.append(dotBox)

        for (let i=0; i < slides.length; i++){
            dot = document.createElement('li')
            dot.classList.add('dot')
            dotBox.append(dot)        
        }
    }
    const prevSlide = (elems,index, strClass) => {
        elems[index].classList.remove(strClass)
    } 

    const nextSlide = (elems,index, strClass) => {
        elems[index].classList.add(strClass)
    }
    const autoSlider = () => {
        const dots = document.querySelectorAll('.slick-dots > li')

        prevSlide(dots, current, 'slick-active')
        prevSlide(slides, current, 'active')
        current++

        if( current >= slides.length){
            current = 0

        }

        nextSlide(dots, current, 'slick-active')
        nextSlide(slides, current, 'active')   
    }

    const startSlider =() => {
        setInterval(autoSlider, 3000)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()
        const dots = document.querySelectorAll('.dot')

        prevSlide(dots, current, 'slick-active')
        prevSlide(slides, current, 'active')

        if(e.target.classList.contains('dot')){
            dots.forEach((dot, index) => {
                if(e.target === dot){
                    current = index
                }
            })
        }

        if(current >= slides.length) {
            current = 0
        }

        if(current < 0) {
            current = slides.length - 1 
        }

        nextSlide(dots, current, 'slick-active')
        nextSlide(slides, current, 'active')  
    })
    addDots()
    startSlider()
}

export default slider
