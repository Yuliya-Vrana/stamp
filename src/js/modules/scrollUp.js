const scrollUp = () => {
    const upBtn = document.querySelector('.up')

    window.onscroll = () => {
        if(window.scrollY > 600){
            upBtn.classList.remove('hideUp')
        }
    }
   
    upBtn.addEventListener('click', () => { 
        let scrolled = window.pageYOffset
        let interval


        const scrollToTop = () => {
            if(scrolled > 0){
                window.scrollTo(0, scrolled)
                scrolled = scrolled - 300
                interval = setTimeout(scrollToTop, 50)
            }else {
                clearTimeout(interval)
                window.scrollTo(0, 0)
            }
        }
        scrollToTop()   
    })
}

export default scrollUp