<script lang="ts">
	import type { BuiltinLanguage, SpecialLanguage } from 'shiki';
	import { page } from '$app/stores';

	type Props = {
		code: string;
		lang: BuiltinLanguage;
	};

	let { code, lang = 'javascript' }: Props = $props();

	const renderedCode = $derived(
		$page.data.highlighter.codeToHtml(code.trim(), {
			lang,
			theme: 'vesper'
		})
	);
</script>

<div>
	{@html renderedCode}
</div>
