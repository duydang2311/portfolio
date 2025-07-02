import gsap from 'gsap';
import type { Attachment } from 'svelte/attachments';

export const gsapScrollTriggerSlideIn: Attachment<HTMLElement> = (node: HTMLElement) => {
    // const tween = gsap.from(
    //     node,
    //     {
    //         scrollTrigger: {
    //             trigger: node,
    //             start: '-20% 80%',
    //             end: '20% center',
    //             scrub: 1,
    //             markers: true,
    //             toggleActions: 'play pause resume reset',
    //         },
    //         scale: 0.96,
    //         yPercent: 10,
    //         opacity: 0,
    //     }
    // );
    // return () => {
    //     tween.kill();
    // }
};
