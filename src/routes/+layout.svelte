<script lang="ts">
	import favicon from "$lib/assets/favicon.png";
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
<footer>
	<div class="container">
		<small>
			Sebastian 2026<br />
			<i> favicon - Anggara @ flaticon </i>
		</small>
	</div>
</footer>
