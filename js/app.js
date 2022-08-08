const day = Array.from(document.querySelectorAll('.footer-section__day'))
const amount = Array.from(document.querySelectorAll('.footer-section__amount'))

if(day){
    const getElement = async (element)=>{
        const days = []

        try{
            const res = await axios.get('/data.json')
            //EXTRAER LOS DATOS DEL ARCHIVO JSON
            if(res.status !== 200) throw new Error(res.statusText)
            
            if(res.data){
                res.data.forEach(item => {
                    (element === 'day')
                    ? days.push(item.day)
                    : days.push(item.amount)
                })
            }
            //PINTAR LOS ELEMENTOS DEL JSON EN EL HTML PARA VISUALIZAR EL DIA
            // Y EL MONTO ACTUAL
            if(element == 'day'){
                for(let i = 0; i < day.length; i++){
                    for(let j = 0; j < days.length; j++){
                        day[i].innerHTML = days[i]
                    }
                }
            }else if(element == 'amount'){
                for(let i = 0; i < amount.length; i++){
                    for(let j = 0; j < days.length; j++){
                        amount[i].innerHTML = '$' + days[i]
                    }
                }
            }
        }catch(err){
            console.log(err)
        }
    }

    getElement('day')
    getElement('amount')
}

const progress = document.querySelectorAll('.footer-section__progress')

//RECORRER ARRAY SEGUN EL DIA SELECCIONADO
const days = {
    'mon': () =>{
        for(let i = 0; i < amount.length;i++){
            amount[0].classList.add('opacity')
        }
    },
    'tue': () =>{
        for(let i = 0; i < amount.length;i++){
            amount[1].classList.add('opacity')
        }
    },
    'wed': () =>{
        for(let i = 0; i < amount.length;i++){
            amount[2].classList.add('opacity')
        }
    },
    'thu': () =>{
        for(let i = 0; i < amount.length;i++){
            amount[3].classList.add('opacity')
        }
    },
    'fri': () =>{
        for(let i = 0; i < amount.length;i++){
            amount[4].classList.add('opacity')
        }
    },
    'sat': () =>{
        for(let i = 0; i < amount.length;i++){
            amount[5].classList.add('opacity')
        }
    },
    'sun': () =>{
        for(let i = 0; i < amount.length;i++){
            amount[6].classList.add('opacity')
        }
    },
}

if(progress){
    progress.forEach(item => {
        item.addEventListener('mouseover',(e)=>{
             (e.target.classList.contains('footer-section__progress'))
             && days[e.target.nextElementSibling.innerHTML]()
             
        })
        item.addEventListener('mouseout',(e)=>{
            (e.target.previousElementSibling.classList.contains('opacity'))
            && amount.forEach(value => value.classList.remove('opacity'))
              
        })
    })
}
    