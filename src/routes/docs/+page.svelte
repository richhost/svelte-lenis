<script lang="ts">
	import CodeBlock from '$docs/components/code-block.svelte';
	import GetStarted from '$docs/components/get-started.svelte';
</script>

<GetStarted />

<h2>Requirements</h2>
<p>Supports projects created using Svelte 5.</p>

<h2>Install</h2>
Install Svelte Lenis using your package manager of choice.

<CodeBlock
	lang="bash"
	code={`
pnpm add lenis svelte-lenis
npm install lenis svelte-lenis
`}
/>

<h2>Usage</h2>

<CodeBlock
	lang="svelte"
	code={`
<script>
  import { SvelteLenis } from 'svelte-lenis'
</script>

<SvelteLenis root>
  <!-- content -->
</SvelteLenis>
`}
/>

<h2>Props</h2>
<ul>
	<li>
		<code>options</code>
		{': '}
		<a
			href="https://github.com/darkroomengineering/lenis#instance-settings"
			target="_blank"
			rel="noreferrer">Lenis options</a
		>.
	</li>
	<li>
		<code>root</code>
		{': '}
		Lenis will be instanciate using <code>html</code> scroll. Default: <code>false</code>.
	</li>
	<li>
		<code>autoRaf</code>
		{': '}
		if <code>false</code>, <code>lenis.raf</code> needs to be called manually. Default:
		<code>true</code>.
	</li>
	<li>
		<code>rafPriority</code>
		{': '}
		<a target="_blank" rel="noreferrer" href="https://github.com/darkroomengineering/tempus#readme"
			>Tempus
		</a>
		{' '}execution priority. Default:
		<code>0</code>.
	</li>
	<li>
		<code>class</code>
		{': '}
		class name for the wrapper div. Default: <code>undefined</code>.
	</li>
</ul>

<style>
	code {
		&::before,
		&::after {
			content: '';
		}
		background-color: var(--color-neutral-800);
		border-radius: 4px;
		padding-inline: 6px;
	}
</style>
