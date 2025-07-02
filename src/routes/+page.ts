import { browser } from '$app/environment';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Lenis from 'lenis';

if (browser) {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.8 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
}
