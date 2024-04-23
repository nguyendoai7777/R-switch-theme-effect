import { useEffect, useRef } from 'react';
import { removeCSS, updateCSS } from 'rc-util/lib/Dom/dynamicCSS';

const viewTransitionStyle = `
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

.dark::view-transition-old(root) {
  z-index: 1;
}

.dark::view-transition-new(root) {
  z-index: 999;
}

::view-transition-old(root) {
  z-index: 999;
}

::view-transition-new(root) {
  z-index: 1;
}
`;

(function injectCSS() {
	const style = document.createElement('style');
	style.innerHTML = `
  * {
    transition: none !important;
  }
  [data-prefers-color='dark'] {
    -webkit-print-color-scheme: dark;
    color-scheme: dark;
  }
  [data-prefers-color='light'] {
    -webkit-print-color-scheme: light;
    color-scheme: light;
  }
  `;
	document.head.appendChild(style);
})();

document.querySelector('html')?.setAttribute('data-prefers-color', localStorage.getItem('theme') === 'light' ? 'light' : 'dark');
const useThemeAnimation = () => {
	const startAnimationTheme = (clipPath: string[], isDark: boolean) => {
		const animationProps = isDark ? [...clipPath].reverse() : clipPath;
		console.log('animationProps: ', animationProps);
		document.documentElement.animate(
			{
				clipPath: animationProps,
			},
			{
				duration: 500,
				easing: 'ease-in',
				pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)',
			}
		);
	};

	const toggleAnimationTheme = (event: React.MouseEvent<HTMLElement, MouseEvent>, isDark: boolean) => {
		// @ts-ignore
		if (!(event && typeof document.startViewTransition === 'function')) {
			return;
		}
		const time = Date.now();
		const x = event.clientX;
		const y = event.clientY;
		const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
		updateCSS(
			`
      [data-prefers-color='dark'] {
        color-scheme: light !important;
      }

      [data-prefers-color='light'] {
        color-scheme: dark !important;
      }
    `,
			'color-scheme'
		);
		document.querySelector('html')?.setAttribute('data-prefers-color', isDark ? 'light' : 'dark');
		(document as any)
			.startViewTransition(async () => {
				await new Promise((resolve) => {
					setTimeout(resolve, 1000 / 60);
				});

				const root = document.documentElement;
				root.classList.remove(isDark ? 'dark' : 'light');
				root.classList.add(isDark ? 'light' : 'dark');
			})
			.ready.then(() => {
				const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
				removeCSS('color-scheme');
				startAnimationTheme(clipPath, isDark);
			});
	};

	// inject transition style
	useEffect(() => {
		// @ts-ignore
		if (typeof document.startViewTransition === 'function') {
			updateCSS(viewTransitionStyle, 'view-transition-style');
		}
	}, []);

	return toggleAnimationTheme;
};

export default useThemeAnimation;
