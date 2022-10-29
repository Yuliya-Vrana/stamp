const scroll = () => {
    const links = document.querySelectorAll('.top-menu>ul>li>a')
    const linksMobail = document.querySelectorAll('.mobile-menu>ul>li>a')

    const scrolling = (e, section) => {  
        e.preventDefault() 
                                                 
        if (section) {
            section.scrollIntoView({
                block: "start",
                behavior: "smooth"               
            })
        }  
    }
    
    links.forEach((link) => {
        const section = document.querySelector(link.getAttribute("href"))
        link.addEventListener('click', (e) => {          
            scrolling(e, section)
        })  
    })

    linksMobail.forEach((link) => {
        const section = document.querySelector(link.getAttribute("href"))
        link.addEventListener('click', (e) => {          
            scrolling(e, section)
        })  
    })
}

export default scroll