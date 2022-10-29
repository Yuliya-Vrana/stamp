const sendForm = (someElem = []) => {
    const form = document.getElementById('form')
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется.'
    const emptyText = 'Заполните пустые поля!'

    const validate = (list) => {
        let success = true

        list.forEach(input => {
            if (input.value == ''){
                success = false
            }
        })
        return success
    }

    const sendData = async (data) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json() 
    }

    const submitForm = () => {
        const formElements =form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        statusBlock.classList.add('titleBlock')
        statusBlock.style.color = '#333'
        form.append(statusBlock)
        
        formData.forEach((val, key) => {
            formBody[key] = val
        })

        if(validate(formElements)){
            sendData(formBody)
            .then(data => {

                statusBlock.textContent = successText  
                formElements.forEach(input => {
                    const inputs = document.querySelectorAll('.form-control')
                    inputs.value = ''}
                )               
                setTimeout(() => {
                    const modal = document.querySelector('.modal-overlay')
                    modal.style.display = 'none'
                }, 2000)
            }) 
            .catch(error => {
                statusBlock.textContent = errorText 
            }) 
        }else {
            statusBlock.textContent = emptyText
        }       
       
    }

    try {
        if(!form){
            throw new Error('Верните форму на место!')
        }else{
                form.addEventListener('click', (event) => {
                event.preventDefault()
                if (event.target.matches('.button')){
                   submitForm()  
                }
            }) 
        }
         
    } catch (error) {
        console.log(error.massege)
    }


  
}

export default sendForm

