// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import netlify from '@astrojs/netlify';
//import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()
    //, auth()
  ],
  output: "server",
  adapter: 
  // node( {
  //   mode: 'standalone'
  // } ),
  netlify({
    edgeMiddleware: true
  }),
  devToolbar: {
    enabled: false
  }
});