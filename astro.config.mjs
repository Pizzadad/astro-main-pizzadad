// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import netlify from '@astrojs/netlify/functions';
//import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()
    //, auth()
  ],
  output: "server",
  adapter: 
  netlify({
    edgeMiddleware: true
  }),
  devToolbar: {
    enabled: false
  }
});