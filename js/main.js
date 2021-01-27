const logo = document.querySelectorAll('#home-logo path');
// alert(1);
for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    
}
// scroll effect
var header = document.querySelector('#scroll');
window.addEventListener('scroll', function(){
    if(window.scrollY > 500){
        header.classList.add('check');
    }else{
        header.classList.remove('check');
    }
})
