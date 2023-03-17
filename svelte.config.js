import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import azure from 'svelte-adapter-azure-swa'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		//adapter: adapter()
		adapter: azure({			
			customStaticWebAppConfig: {
				routes: [
					{
						route: '/api/testapi',
						methods: [
							"POST",
							"GET"
						],
						allowedRoles: ['anonymous']
					}

				],
				mimeTypes: {
					'.json': 'text/json'
				}
			}
		})
	},	

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
