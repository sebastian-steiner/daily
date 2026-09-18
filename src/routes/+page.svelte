<script lang="ts">
    import DayGrid from "$lib/components/dayGrid.svelte";
    import CalculationDetails from "$lib/components/calculationDetails.svelte";
    import { getDateCode, getWeekDay } from "$lib/dates";
    import { randomDate } from "$lib/utils";
    import { onMount } from "svelte";

    const minDate = new Date(1900, 0, 1);
    const maxDatePlusOne = new Date(2100, 0, 1);

    let date = $state(minDate);
    let guessing = $state(true);
    let isCorrect = $state(true);
    let totalCount = $state(0);
    let correctCount = $state(0);

    let onGuess = function (guess: number): void {
        guessing = false;
        totalCount += 1;

        let weekday = getDateCode(date);
        if (guess == weekday) {
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
    }

    onMount(init);
</script>

<section>
    <div role="group">
        <h3>{date.toLocaleDateString("default")}</h3>
        {#if !guessing}
            <h3>{getWeekDay(date)} {isCorrect ? "✅" : "❌"}</h3>
        {/if}
    </div>

    <DayGrid active={guessing} onClick={onGuess} />

    <div role="group">
        <p>
            {correctCount}/{totalCount} correct {totalCount > 0
                ? "(" + String((correctCount / totalCount) * 100) + "%)"
                : ""}
        </p>
        <button class="secondary" onclick={onNext} disabled={guessing}>Next</button>
    </div>

    <details>
        <summary>Calculation Details</summary>

        {#if !guessing}
        <CalculationDetails {date} />
        {:else}
        <p>Once you've guessed you will be able to see a breakdown of how to calculate the correct weekday given the current date.</p>
        {/if}
    </details>
</section>

<hr />

<section>
    <details>
        <summary>How to practice?</summary>

        <p>
            Here you can practice mental weekday calculation for Memoriad style
            quizzes. The calculation details are based on the advanced method
            described <a
                href="https://worldmentalcalculation.com/how-to-calculate-calendar-dates/"
                >here</a
            >.
        </p>

        <p>
            This page is (currently) only aimed at practice and not at learning
            the initial steps.
        </p>

        <div class="grid">
            <button disabled>🚧 Practice Month codes</button>
            <button disabled>🚧 Practice Day-Month combos</button>
            <button disabled>🚧 Practice Years</button>
        </div>
    </details>
</section>
