<script lang="ts">
	import IconArrowRight from 'lucide-svelte/icons/arrow-right';
	import { SvelteLenis, type Lenis, type OnSetup } from 'svelte-lenis';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Mouse from 'lucide-svelte/icons/mouse';

	let lenis = $state<Lenis>();

	const onSetup: OnSetup = ({ lenis: instance }) => {
		lenis = instance;
	};

	$effect(() => {
		function update(time: number) {
			lenis?.raf(time * 1000);
		}
		gsap.ticker.add(update);

		return () => {
			gsap.ticker.remove(update);
		};
	});

	let logo = $state<HTMLImageElement>();

	$effect(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (logo) {
			const tl = gsap.timeline({
				scrollTrigger: {
					start: 'top top',
					end: 'bottom center',
					scrub: true
				}
			});
			tl.to(logo, {
				scale: 2,
				duration: 1
			});
		}
	});
</script>

<SvelteLenis root autoRaf={false} {onSetup}>
	<div class="flex flex-col items-center px-6 relative">
		<div class="inline-flex min-h-dvh flex-col items-center justify-center">
			<img bind:this={logo} class="w-28 aspect-square" src="/favicon.svg" alt="" />
			<h1 class="text-6xl lg:text-7xl font-semibold">Svelte Lenis</h1>
			<p class="self-end uppercase text-neutral-400">Smooth scroll</p>

			<div class="flex gap-4 mt-10 font-medium">
				<a
					href="/docs"
					class="flex items-center gap-1 h-10 rounded px-3 bg-gradient-to-r from-violet-500 to-fuchsia-500"
				>
					<span>Get Started</span>
					<IconArrowRight size={17} />
				</a>
				<a
					href="https://github.com/richhost/svelte-lenis"
					target="_blank"
					rel="noreferrer"
					class="h-10 flex items-center bg-neutral-100 text-neutral-900 rounded px-3">GitHub</a
				>
			</div>
		</div>
	</div>

	<div class="fixed bottom-6 w-full pointer-events-none flex items-center justify-center">
		<Mouse />
	</div>

	<div class="h-screen"></div>
</SvelteLenis>
