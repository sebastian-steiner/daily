<script lang="ts">
    import { resolve } from "$app/paths";
    import NumberGrid from "$lib/components/numberGrid.svelte";
    import { getCodeForDayMonth } from "$lib/dates";
    import { randomDate } from "$lib/utils";
    import { onMount } from "svelte";

    const minDate = new Date(2000, 0, 1);
    const maxDatePlusOne = new Date(2001, 0, 1);

    let date = $state(minDate);

    let guessing = $state(true);
    let isCorrect = $state(true);
    let totalCount = $state(0);
    let correctCount = $state(0);

    let onGuess = function (guess: number): void {
        guessing = false;
        totalCount += 1;

        let code = getCodeForDayMonth(date.getDate(), date.getMonth());
        if (guess == code) {
            isCorrect = true;
            correctCount += 1;
        } else {
            isCorrect = false;
        }
    };

    let onNext = function (): void {
        guessing = true;
        date = randomDate(minDate, maxDatePlusOne);
    };

    let init = function (): void {
        date = randomDate(minDate, maxDatePlusOne);
        totalCount = 0;
        correctCount = 0;
        guessing = true;
    };

    onMount(init);
</script>

<header class="container">
    <hgroup>
        <h1><a href={resolve("/")}>daily</a> - <i>Practice</i></h1>
        <p>What's this date's code?</p>
    </hgroup>
</header>
<main class="container">
    <section>
        <div role="group">
            <h3>{date.getDate()}.{date.getMonth() + 1}.</h3>
            {#if !guessing}
                <h3>
                    {getCodeForDayMonth(date.getDate(), date.getMonth())}
                    {isCorrect ? "✅" : "❌"}
                </h3>
            {/if}
        </div>

        <NumberGrid active={guessing} onClick={onGuess} />

        <div role="group">
            <p>
                {correctCount}/{totalCount} correct {totalCount > 0
                    ? "(" + Number((correctCount / totalCount) * 100).toFixed(2) + "%)"
                    : ""}
            </p>
            <button class="secondary" onclick={onNext} disabled={guessing}
                >Next</button
            >
        </div>
    </section>
</main>
