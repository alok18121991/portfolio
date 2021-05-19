import { Power2, TweenMax } from "gsap";

export default function callParallax(event, containerClass, ...classNames) {
    let movement = -50;
    classNames.forEach(className => {
        parallaxIt(event, containerClass, className, movement);
        movement = movement + 20;
    })
}

let parallaxIt = function (e, containerClass, target, movement) {
    // var $this = document.getElementsByClassName(`${containerClass}`);
    let test = document.getElementsByClassName(`${target}`);
    var relX = e.pageX - 200;
    var relY = e.pageY - 200;
    TweenMax.to(test, 1, {
        x: (relX - 100 / 2) / 100 * movement,
        y: (relY - 100 / 2) / 100 * movement,
        ease: Power2.easeOut
    })
}