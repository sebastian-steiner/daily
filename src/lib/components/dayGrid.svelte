<script lang="ts">
    const {
        active,
        onClick,
    }: { active: boolean; onClick: (guess: number) => void } = $props();

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const dayCodes = [1, 2, 3, 4, 5, 6, 0];
</script>

<div>
    {#each days as day, i (day)}
        <button disabled={!active} onclick={() => onClick(dayCodes[i])}
            >{day}</button
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
