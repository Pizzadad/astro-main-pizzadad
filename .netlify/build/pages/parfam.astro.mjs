/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../chunks/astro/server_B0MYJDGu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as actions } from '../chunks/_astro_actions_BLFI3Ixd.mjs';
import { $ as $$Pagination, a as $$MainLayout } from '../chunks/MainLayout_CKwuUFj8.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_GECNgTTW.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$ParfamCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ParfamCard;
  const { parfam } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<a${addAttribute(`/parfam/${parfam.slug}`, "href")}>${renderComponent($$result2, "Image", $$Image, { "src": parfam.image, "alt": parfam.name, "width": "300", "height": "250", "quality": 80, "loading": "lazy", "class": "object-cover object-center w-full h-full block" })}</a><span class="font-text">${parfam.desiger} - ${parfam.name}</span>` })}`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/Parfam/ParfamCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$ParfamList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ParfamList;
  const { parfams } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 place-items-center"> ${parfams.map((parfam) => renderTemplate`<div class="w-full h-90 shadow-xl shadow-red-700/40 text-center"> ${renderComponent($$result, "ParfamCard", $$ParfamCard, { "parfam": parfam })} </div>`)} </div>`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/Parfam/ParfamList.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const searchParams = Astro2.url.searchParams;
  const pageParam = Number(searchParams.get("page") ?? 1);
  const { data, error } = await Astro2.callAction(actions.getParfamsByPage, { page: pageParam });
  console.log(error);
  if (error) {
    return Astro2.redirect("/parfam");
  }
  const { parfams, totalPages } = data;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto flex flex-wrap w-full h-full gap-4"> <h1 class="text-3xl">Listado de productos</h1> ${renderComponent($$result2, "ParfamList", $$ParfamList, { "parfams": parfams })} ${renderComponent($$result2, "Pagination", $$Pagination, { "totalPages": totalPages })} </div> ` })}`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/pages/parfam/index.astro", void 0);

const $$file = "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/pages/parfam/index.astro";
const $$url = "/parfam";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
