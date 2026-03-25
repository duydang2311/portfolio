import { type AnimationPlaybackControlsWithThen } from 'motion';
import { animate as motionAnimate } from 'motion/mini';
import type { TransitionConfig } from 'svelte/transition';

export function motion(
	node: HTMLElement,
	props: (node: HTMLElement, animate: typeof motionAnimate) => AnimationPlaybackControlsWithThen
) {
	const animation = props(node, motionAnimate);
	return {
		duration: animation.iterationDuration * 1000
	} satisfies TransitionConfig;
}
