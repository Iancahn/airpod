const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const mainText = intro.querySelector('h1');
//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h2');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .addTo(controller);
