<script lang="ts">
    const {
        active,
        onClick,
    }: { active: boolean; onClick: (guess: number) => void } = $props();

    const numbers = [1, 2, 3, 4, 5, 6, 0];
</script>

<div>
    {#each numbers as number (number)}
        <button disabled={!active} onclick={() => onClick(number)}
            >{number}</button
        >
    {/each}
</div>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0.5em;
        margin-bottom: 1em;
    }
    div button:last-child {
        grid-column: 1 / -1;
    }
</style>
