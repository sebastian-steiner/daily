# daily

Learn a pretty simple method for calculating the weekday a specific date did/does/will/might(?) fall on built on SvelteKit.

This renders a simple non-persistent SPA tool to practice the calculation method described [here](https://worldmentalcalculation.com/how-to-calculate-calendar-dates/) in the section on a faster advanced algorithm.
The method focuses a lot on memorizing specific codes for each month, year ending, and century, so this app helps train all relevant parts.

It supports light and dark mode depending on your device preferences, as all web pages should.

## Running locally

As this is a pretty standard SvelteKit app, you can run a local dev server that will refresh when you update code.

```sh
# run local dev server
pnpm run dev --open
```

You can also build a static version of this app if you intend to host it.

```sh
# build the production ready server
pnpm run build
# preview the built app
pnpm run preview
```

## Motivation

It's kind of a fun party trick to "know" all weekdays for any date between October 1582, when the Gregorian calendar was introduced, and effectively arbitrary future dates.
However, for me it's really fun to show this to others if I can trust myself to be quick and most importantly correct most of the time.

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).
