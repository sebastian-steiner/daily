import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true,
        }),
        paths: {
            base: process.argv.includes('dev') ? '/this-is-another-more-important-path' : process.env.BASE_PATH,
        },
    },
};

export default config;
