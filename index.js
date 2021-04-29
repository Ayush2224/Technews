const burger=document.querySelectorAll('.burger');
console.log(burger)
const burgercontents=document.querySelectorAll('.burgercontents');

burger[0].addEventListener('click',()=>{
    console.log('clicked');
    burgercontents[0].classList.toggle('visible')
});