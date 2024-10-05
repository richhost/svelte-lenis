<script lang="ts">
	import CodeBlock from '$docs/components/code-block.svelte';
	import GetStarted from '$docs/components/get-started.svelte';
	import { usageCode } from './code.js';
</script>

<GetStarted />

<h2>Requirements</h2>
<p>Supports projects created using Svelte 5.</p>

<h2>Install</h2>
Install Svelte Lenis using your package manager of choice.

<CodeBlock
	lang="bash"
	code={`
pnpm add svelte-lenis
bun add svelte-lenis
npm install svelte-lenis
`}
/>

<h2>Usage</h2>

<CodeBlock lang="svelte" code={usageCode} />

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
		If <code>false</code>, <code>lenis.raf</code> needs to be called manually. Default:
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
	<li>
		<code>onSetup</code>
		{': '}
		When Lenis setup is done, this callback will be called. Read {' '}
		<a href="/docs/#onsetup">OnSetup</a>{' '}for more details.
	</li>
</ul>

<h4 id="onsetup">OnSetup</h4>
<CodeBlock
	lang="typescript"
	code={`
type OnSetup = (value: {
	lenis: Lenis;
	wrapper?: HTMLDivElement;
	content?: HTMLDivElement;
}) => void;
`}
/>
<ul>
	<li>
		<code>lenis</code>{': '}The Lenis instance
	</li>
	<li>
		<code>wrapper</code>{': '}The wrapper div element, will only be defined if <code>root</code> is
		<code>false</code>.
	</li>
	<li>
		<code>content</code>{': '}The content div element, will only be defined if <code>root</code> is
		<code>false</code>.
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
