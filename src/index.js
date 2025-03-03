import 'normalize.css';
import './styles/styles.css';

import * as ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');

const section = document.querySelector('section');
const end = section.querySelector('h1');

const controller = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
  duration: 15000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

const textAnim = selectorValue =>
  new TimelineMax()
    .to(selectorValue, 1, { opacity: 1, y: '-120%' })
    .to(selectorValue, 1, { y: '-150%' })
    .to(selectorValue, 1, { opacity: 0, y: '-180%' });

const textAnimScale = (selectorValue, colorChange = false) => {
  const colorChangingParameters = colorChange
    ? { scaleX: 2, scaleY: 2, color: 'white' }
    : { scaleX: 2, scaleY: 2 };
  return new TimelineMax()
    .to(selectorValue, 1, { scaleX: 1, scaleY: 1 })
    .to(selectorValue, 1, colorChangingParameters)
    .to(selectorValue, 1, { scaleX: 20, scaleY: 20, opacity: 0 });
};

const sectScrollAnim = selectorValue =>
  new TimelineMax().to(selectorValue, 1, {
    height: '0%',
  });

const sectOpacityAnim = new TimelineMax()
  .to('.black', 1, { opacity: 0 })
  .to('.white1', 1, { opacity: 0 })
  .to('.white2', 1, { opacity: 0 })
  .to('.white3', 1, { opacity: 0 });

const sceneText1 = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim('.title1'))
  .addTo(controller);

const sceneText2 = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: intro,
  triggerHook: 0,
  offset: 2000,
})
  .setTween(textAnim('.title2'))
  .addTo(controller);

const sceneCount1 = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: intro,
  triggerHook: 0,
  offset: 3500,
})
  .setTween(textAnimScale('.count1'))
  .addTo(controller);

const sceneCount2 = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: intro,
  triggerHook: 0,
  offset: 5000,
})
  .setTween(textAnimScale('.count2', true))
  .addTo(controller);

const sceneCount3 = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: intro,
  triggerHook: 0,
  offset: 6500,
})
  .setTween(textAnimScale('.count3'))
  .addTo(controller);

const sceneSect1 = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: intro,
  triggerHook: 0,
  offset: 3500,
})
  .setTween(sectScrollAnim('.white1'))
  .addTo(controller);

const sceneSect2 = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: intro,
  triggerHook: 0,
  offset: 5000,
})
  .setTween(sectScrollAnim('.white2'))
  .addTo(controller);

const sceneSect3 = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: intro,
  triggerHook: 0,
  offset: 6500,
})
  .setTween(sectScrollAnim('.white3'))
  .addTo(controller);

const sceneOpacity = new ScrollMagic.Scene({
  duration: 100,
  triggerElement: intro,
  triggerHook: 0,
  offset: 8000,
})
  .setTween(sectOpacityAnim)
  .addTo(controller);

let accelAmount = 0.3;
let scrollPos = 0;
let delay = 0;

scene1.on('update', e => {
  scrollPos = (e.scrollPos - 8100) / 1000;
});

setInterval(() => {
  delay += (scrollPos - delay) * accelAmount;

  video.currentTime = delay;
}, 40);
