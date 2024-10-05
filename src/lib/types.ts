import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import type Lenis from 'lenis';
import type { LenisOptions } from 'lenis';

export type LenisProps = {
	/**
	 * Setup a global instance of Lenis
	 * @default false
	 */
	root?: boolean;
	/**
	 * Lenis options
	 */
	options?: LenisOptions;
	/**
	 * Auto-setup requestAnimationFrame
	 * @default true
	 */
	autoRaf?: boolean;
	/**
	 * Children
	 */
	children?: Snippet;
	/**
	 * Class name for the wrapper div
	 *
	 * When `root` is `false`, this will be applied to the wrapper div
	 */
	class?: string;
	/**
	 * Additional props for the wrapper div
	 *
	 * When `root` is `false`, this will be applied to the wrapper div
	 */
	props?: Omit<SvelteHTMLElements['div'], 'class'>;

	/**
	 * The lenis setup callback
	 */
	onSetup?: OnSetup;
};

export type OnSetup = (value: {
	/**
	 * The Lenis instance
	 */
	lenis: Lenis;
	/**
	 * The wrapper div element
	 *
	 * Will only be defined if `root` is `false`
	 */
	wrapper?: HTMLDivElement;
	/**
	 * The content div element
	 *
	 * Will only be defined if `root` is `false`
	 */
	content?: HTMLDivElement;
}) => void;
