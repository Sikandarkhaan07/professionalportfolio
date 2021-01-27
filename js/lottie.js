//grab the button first
const button = document.querySelector('#btn');
const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');

//also grab the lottie container
const svgContainer = document.getElementById('lottie-svg');
const svgContainer1 = document.getElementById('lottie-svg1');
const svgContainer2 = document.getElementById('lottie-svg2');

const animateItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animtype: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets1.lottiefiles.com/packages/lf20_i6sqnxav.json'
});
const animateItem1 = bodymovin.loadAnimation({
    wrapper: svgContainer1,
    animtype: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets1.lottiefiles.com/packages/lf20_i6sqnxav.json'
});
const animateItem2 = bodymovin.loadAnimation({
    wrapper: svgContainer2,
    animtype: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets1.lottiefiles.com/packages/lf20_i6sqnxav.json'
});

button.addEventListener('click', () => {
    svgContainer.classList.remove('hide');
    animateItem.goToAndPlay(0,true);
    button.style.backgroundColor = "#fcba03";
    button.style.color = "white";
})
animateItem.addEventListener('complete', () => {
    svgContainer.classList.add('hide');
})

button1.addEventListener('click', () => {
    svgContainer1.classList.remove('hide');
    animateItem1.goToAndPlay(0,true);
    button1.style.backgroundColor = "#fcba03";
    button1.style.color = "white";
})
animateItem1.addEventListener('complete', () => {
    svgContainer1.classList.add('hide');
})


button2.addEventListener('click', () => {
    svgContainer2.classList.remove('hide');
    animateItem2.goToAndPlay(0,true);
    button2.style.backgroundColor = "#fcba03";
    button2.style.color = "white";
})
animateItem2.addEventListener('complete', () => {
    svgContainer2.classList.add('hide');
})