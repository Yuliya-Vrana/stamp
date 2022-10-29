const validate = () => {
    const fio = document.getElementsByName('fio')
    const tel = document.getElementsByName('tel')

    fio.forEach(item => {
        item.addEventListener('input', (e) => item.value = e.target.value.replace(/[^а-яА-Я\s]/gi, ''))
    }) 
    tel.forEach((item) => {
        item.addEventListener('input', (e) => item.value = e.target.value.replace(/[^+\d]/g, ''))
    })  
}

export default validate