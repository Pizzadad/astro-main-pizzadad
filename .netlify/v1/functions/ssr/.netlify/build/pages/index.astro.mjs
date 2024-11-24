/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B0MYJDGu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$MainLayout } from '../chunks/MainLayout_CKwuUFj8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>SIGUIENTE PERFUME</h1> ` })}`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/pages/index.astro", void 0);

const $$file = "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
