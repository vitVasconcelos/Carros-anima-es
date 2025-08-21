let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let fistPosition =0
let lastPosition = items.length - 1

nextButton.onclick = () =>{
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
   
    indicator.querySelector('.number').innerHTML = active + 1
    if(active +1 > lastPosition){
        active =0
        items[active].classList.add('active')
        dots[active].classList.add('active')
       
    }else{
        active= active +1
        items[active].classList.add('active') 
        dots[active].classList.add('active')  
    }
    indicator.querySelector('.number').innerHTML =  '0' + (active + 1)
}
prevButton.onclick = () =>{
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')

    if(active == 0){
        active = items.length -1
        items[active].classList.add('active')
        dots[active].classList.add('active')
        indicator.querySelector('.number').innerHTML =  '0' + (active + 1)
          
    }else{
        active = active -1
        items[active].classList.add('active')
        dots[active].classList.add('active')  
        indicator.querySelector('.number').innerHTML =  '0' + (active + 1)
    }

  
}