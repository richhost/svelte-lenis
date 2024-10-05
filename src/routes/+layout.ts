import type { Load } from '@sveltejs/kit';
import { createHighlighter } from 'shiki';

export const load: Load = async () => {
	const highlighter = await createHighlighter({
		langs: ['svelte', 'html', 'css', 'javascript', 'typescript', 'bash'],
		themes: ['vesper']
	});

	return { highlighter };
};
