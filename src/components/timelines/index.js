import { TimelineMax as Timeline, Power1 } from 'gsap';


const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelectorAll('h2');
  content.forEach(element => {
    timeline.fromTo(element, 0.2, {  autoAlpha: 0, delay, ease: Power1.easeIn }, {  autoAlpha: 1, ease: Power1.easeOut });
    });

  return timeline;
}

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const texts = node.querySelectorAll('h2');
     timeline
    .from(node, 0, { display: 'none', autoAlpha: 0, delay })
    .staggerFrom(texts, 0.5, { autoAlpha: 0, x: -200, ease: Power1.easeOut }, 0.125);

  return timeline;
}

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0;
  let timeline
  if (pathname === '/' || pathname === '/home' )
    timeline = getHomeTimeline(node, delay);
  else
    timeline = getDefaultTimeline(node, delay);

    timeline.play();

   window.loadPromise = new Promise(resolve => {
    requestAnimationFrame(() => timeline.play())
    })
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}
