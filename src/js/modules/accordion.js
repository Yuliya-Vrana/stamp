const accordion = () => {
    const accordeon = document.querySelector('.accordeon')
    const contents = accordeon.querySelectorAll('.element')
      
    contents.forEach((elem) => {
        const question = elem.querySelector('.title')  
        
        question.addEventListener("click", () => {
            contents.forEach(elems => {
                const answer = elems.querySelector('.element-content')

                if (elem == elems) {
                    answer.classList.toggle('accordeon-active')
                    elems.classList.toggle('active')
                } else {
                    answer.classList.remove('accordeon-active')
                    elems.classList.remove('active')
                }
            })
        })
        
    })
    
}

export default accordion