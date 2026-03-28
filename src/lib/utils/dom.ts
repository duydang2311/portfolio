import type { ElementOrSelector } from 'motion';
import { inView as motionInView } from 'motion';

export function pageInView(
	elementOrSelector: ElementOrSelector,
	onStart: (element: Element, entry: IntersectionObserverEntry) => void | VoidFunction
): VoidFunction {
	let stop: void | VoidFunction;
	let cleanup: void | VoidFunction;
	let visible = !document.hidden;

	function handleVisibilityChange() {
		visible = !document.hidden;
		if (visible) {
			startWatching();
		} else {
			stopWatching();
		}
	}

	function startWatching() {
		stop = motionInView(elementOrSelector, (element, entry) => {
			cleanup = onStart(element, entry);
			return () => {
				if (cleanup) {
					cleanup();
					cleanup = void 0;
				}
			};
		});
	}

	function stopWatching() {
		if (cleanup) {
			cleanup();
			cleanup = void 0;
		}
		if (stop) {
			stop();
			stop = void 0;
		}
	}

	if (visible) {
		startWatching();
	}

	document.addEventListener('visibilitychange', handleVisibilityChange);
	return () => {
		document.removeEventListener('visibilitychange', handleVisibilityChange);
		stopWatching();
	};
}
