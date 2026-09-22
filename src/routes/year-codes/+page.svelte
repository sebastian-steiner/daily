<script lang="ts">
    import { resolve } from "$app/paths";
    import NumberGrid from "$lib/components/numberGrid.svelte";
    import { getCodeForYear } from "$lib/dates";
    import { onMount } from "svelte";

    let years = $state<number[]>([]);
    let currentYear = $state(0);
    let isDone = $state(false);

    let wrongs = $state<number[]>([]);

    let guessing = $state(true);
    let isCorrect = $state(true);
    let totalCount = $state(0);
    let doneCount = $state(0);

    let onGuess = function (guess: number): void {
        guessing = false;

        let yearCode = getCodeForYear(currentYear);
        if (guess == yearCode) {
            isCorrect = true;
            doneCount += 1;
            if (years.length == 0) {
                isDone = true;
            }
        } else {
            isCorrect = false;
            wrongs = [...wrongs, currentYear];
            years = [...years, currentYear];
        }
    };

    let onNext = function (): void {
        guessing = true;
        currentYear = popRandomYear();
    };

    let popRandomYear = function (): number {
        const randomIndex = Math.floor(Math.random() * years.length);
        const year = years[randomIndex];
        years = years.filter((_, i) => i !== randomIndex);
        return year;
    };

    let init = function (): void {
        years = Array.from(Array(100).keys());
        wrongs = [];
        totalCount = years.length;
        doneCount = 0;
        currentYear = popRandomYear();
        guessing = true;
        isDone = false;
    };

    let redoWrongs = function (): void {
        years = wrongs.slice();
        wrongs = [];
        totalCount = years.length;
        doneCount = 0;
        currentYear = popRandomYear();
        guessing = true;
        isDone = false;
    };

    onMount(init);
</script>

<header class="container">
    <hgroup>
        <h1><a href={resolve("/")}>daily</a> - <i>Practice</i></h1>
        <p>What's the year code?</p>
    </hgroup>
</header>
<main class="container">
    <section>
        <div role="group">
            {#if !isDone}
                <h3>{currentYear}</h3>
            {:else}
                <h3>Congrats! You're done! ({wrongs.length} {wrongs.length === 1 ? 'error' : 'errors'})</h3>
            {/if}
            {#if !guessing && !isDone}
                <h3>{getCodeForYear(currentYear)} {isCorrect ? "✅" : "❌"}</h3>
            {/if}
        </div>

        <NumberGrid active={guessing} onClick={onGuess} />

        <div role="group">
            {#if !isDone}
                <p>
                    {doneCount}/{totalCount} done {"(" +
                        Number((doneCount / totalCount) * 100).toFixed(0) +
                        "%)"}
                </p>
                <button class="secondary" onclick={onNext} disabled={guessing}
                    >Next</button
                >
            {:else}
                <button onclick={redoWrongs} class="secondary">Redo Wrongs</button>
                <button onclick={init}>Reset</button>
            {/if}
        </div>
    </section>
</main>
