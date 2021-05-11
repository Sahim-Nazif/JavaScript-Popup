const btn=document.querySelector('button')
const popup=document.querySelector('.popup-wrapper')
const closePopup=document.querySelector('.popup-close')



btn.addEventListener('click', ()=>{

    popup.style.display='block'
   
})

closePopup.addEventListener('click', ()=>{

    popup.style.display='none'
})