<script lang="ts">
    import { resolve } from "$app/paths";
    import NumberGrid from "$lib/components/numberGrid.svelte";
    import { getCodeForMonth } from "$lib/dates";
    import { onMount } from "svelte";

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    
    let months = $state<number[]>([]);

    let currentMonth = $state(0);
    let isDone = $state(false);

    let guessing = $state(true);
    let isCorrect = $state(true);
    let totalCount = $state(0);
    let doneCount = $state(0);

    let onGuess = function (guess: number): void {
        guessing = false;

        let monthCode = getCodeForMonth(currentMonth);
        if (guess == monthCode) {
            isCorrect = true;
            doneCount += 1;
            if (months.length == 0) {
                isDone = true;
            }
        } else {
            isCorrect = false;
            months = [...months, currentMonth];
        }
    };

    let onNext = function (): void {
        guessing = true;
        currentMonth = popRandomMonth();
    };

    let popRandomMonth = function (): number {
        const randomIndex = Math.floor(Math.random() * months.length);
        const month = months[randomIndex];
        months = months.filter((m) => m !== month);
        return month;
    };

    let init = function (): void {
        months = Array.from(Array(12).keys());
        totalCount = months.length;
        doneCount = 0;
        currentMonth = popRandomMonth();
        guessing = true;
    };

    onMount(init);
</script>

<header class="container">
    <hgroup>
        <h1><a href={resolve("/")}>daily</a> - <i>Practice</i></h1>
        <p>What's the month's code?</p>
    </hgroup>
</header>
<main class="container">
    <section>
        <div role="group">
            {#if !isDone}
                <h3>{monthNames[currentMonth]}</h3>
            {:else}
                <h3>Congrats! You're done!</h3>
            {/if}
            {#if !guessing && !isDone}
                <h3>{getCodeForMonth(currentMonth)} {isCorrect ? "✅" : "❌"}</h3>
            {/if}
        </div>

        <NumberGrid active={guessing} onClick={onGuess} />

        <div role="group">
            <p>
                {doneCount}/{totalCount} done {"(" +
                    String((doneCount / totalCount) * 100) +
                    "%)"}
            </p>
            <button
                class="secondary"
                onclick={onNext}
                disabled={guessing || isDone}>Next</button
            >
        </div>
    </section>
</main>
