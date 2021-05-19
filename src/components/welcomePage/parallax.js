import { Power2, TweenMax } from "gsap";

export default function callParallax(event, containerClass, ...classNames) {
    let movement = -50;
    classNames.forEach(className => {
        parallaxIt(event, containerClass, className, movement);
        movement = movement + 20;
    })
}

let parallaxIt = function (e, containerClass, target, movement) {
    var $this = document.getElementsByClassName(`${containerClass}`);
    let targetDiv = document.getElementsByClassName(`${target}`);
    var relX = e.pageX - $this[0].offsetLeft;
    var relY = e.pageY - $this[0].offsetTop;
    TweenMax.to(targetDiv, 1, {
        x: (relX - $this[0].clientWidth / 2) / 100 * movement,
        y: (relY - $this[0].clientHeight / 2) / 100 * movement,
        ease: Power2.easeOut
    })
}