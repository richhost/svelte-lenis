<script lang="ts">
	const { children } = $props();
</script>

<article class="prose prose-invert mx-auto px-6 py-10">
	{@render children()}
</article>
