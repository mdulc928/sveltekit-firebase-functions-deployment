<script lang="ts">
	import { Button } from '@wmt/svelte-base-components';
	let count = 0;
</script>

<Button
	on:click={() => {
		console.log('hello world. this is a new component in a fresh mono repo');
	}}
	class="font-bold"
>
	Hello there.
</Button>
<h1 class="font-semibold">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
