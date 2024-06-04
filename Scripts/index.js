const Cards = document.querySelectorAll('.Card');
Cards.forEach(el =>{
    let CI = el.getAttribute('data-index');
    console.log(CI);
    el.querySelector('.Card-before').innerText = CI;
})
