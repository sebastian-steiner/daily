<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import "../app.scss";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="container">
	<hgroup>
		<h1>daily</h1>
		<p>Which weekday did this date fall on?</p>
	</hgroup>
</header>
<main class="container">
	{@render children()}
</main>