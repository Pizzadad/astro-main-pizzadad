
			import { onRequest } from "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/.netlify/build/middleware.mjs";
			import { createContext, trySerializeLocals } from 'astro/middleware';

			export default async (request, context) => {
				const ctx = createContext({ 
					request,
					params: {}
				});
				ctx.locals = { netlify: { context } }
				// https://docs.netlify.com/edge-functions/api/#return-a-rewrite
				ctx.rewrite = (target) => {
					if(target instanceof Request) {
						// We can only mutate headers, so if anything else is different, we need to fetch
						// the target URL instead.
						if(target.method !== request.method || target.body || target.url.origin !== request.url.origin) {
							return fetch(target);
						}
						// We can't replace the headers object, so we need to delete all headers and set them again
						request.headers.forEach((_value, key) => {
							request.headers.delete(key);
						});
						target.headers.forEach((value, key) => {
							request.headers.set(key, value);
						});
						return new URL(target.url);
					}
					return new URL(target, request.url);
				};
				const next = () => {
					const { netlify, ...otherLocals } = ctx.locals;
					request.headers.set("x-astro-locals", trySerializeLocals(otherLocals));
					request.headers.set("x-astro-middleware-secret", "d779c540-5321-43da-89ed-cd74a6a0b405");
					return context.next();
				};
			
				return onRequest(ctx, next);
			}

			export const config = {
				name: "Astro Middleware",
				generator: "@astrojs/netlify@5.5.4",
				path: "/*", excludedPath: ["/_astro/*", "/.netlify/images/*"]
			};
			