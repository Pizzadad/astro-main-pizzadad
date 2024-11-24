/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent, F as Fragment } from '../../chunks/astro/server_B0MYJDGu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as actions } from '../../chunks/_astro_actions_BLFI3Ixd.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_GECNgTTW.mjs';
import 'clsx';
import { b as $$Whatsapp, a as $$MainLayout } from '../../chunks/MainLayout_CKwuUFj8.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$c = createAstro();
const $$SunIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SunIcon;
  const { fillColor = "#b51818", fillPercentage = 100 } = Astro2.props;
  Math.random().toString(36).substring(2, 15);
  const maxSexteen = fillPercentage > 60 ? true : false;
  const realColor = maxSexteen ? fillColor : "#999999";
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block w-10 h-10"> <!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    class="absolute top-0 left-0"
  >
    <path
      fill="none"
      stroke={fillColor}
      stroke-width="1"
      d="m8.443 3.619l2.336 1.64a2 2 0 0 0 2.328-.02l2.306-1.683l.492 2.812a2 2 0 0 0 1.662 1.63l2.82.442l-1.64 2.337a2 2 0 0 0 .02 2.328l1.683 2.306l-2.812.492a2 2 0 0 0-1.631 1.661l-.441 2.82l-2.337-1.64a2 2 0 0 0-2.328.021l-2.306 1.683l-.492-2.812a2 2 0 0 0-1.661-1.631l-2.82-.442l1.64-2.336a2 2 0 0 0-.021-2.328L3.558 8.593L6.37 8.1a2 2 0 0 0 1.631-1.66zM16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0"
    ></path>
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    class="absolute top-0 left-0"
  >
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset={\`\${fillPercentage}%\`} stop-color={fillColor}></stop>
        <stop offset={\`\${fillPercentage}%\`} stop-color="transparent"></stop>
      </linearGradient>
    </defs>
    <path fill={\`url(#\${gradientId})\`} d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0"
    ></path>
    <path
      fill={\`url(#\${gradientId})\`}
      fill-rule="evenodd"
      d="M9.017 2.8a1 1 0 0 0-1.562.664l-.442 2.82a1 1 0 0 1-.815.831l-2.812.493a1 1 0 0 0-.636 1.574l1.683 2.306a1 1 0 0 1 .01 1.164l-1.64 2.337a1 1 0 0 0 .664 1.562l2.82.442a1 1 0 0 1 .83.815l.493 2.812a1 1 0 0 0 1.574.636l2.307-1.683a1 1 0 0 1 1.164-.01l2.336 1.64a1 1 0 0 0 1.563-.664l.44-2.82a1 1 0 0 1 .817-.83l2.812-.493a1 1 0 0 0 .635-1.574l-1.682-2.307a1 1 0 0 1-.011-1.164l1.64-2.336a1 1 0 0 0-.663-1.563l-2.821-.441a1 1 0 0 1-.83-.816l-.493-2.812a1 1 0 0 0-1.574-.635L12.518 4.43a1 1 0 0 1-1.164.01zM17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0"
      clip-rule="evenodd"></path>
  </svg> --> <!--OTRA OPCION--> ${maxSexteen ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"> <path${addAttribute(fillColor, "fill")} d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391l-19.9 107.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391L13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256L2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121l19.9-107.9c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1l90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6M160 256a96 96 0 1 1 192 0a96 96 0 1 1-192 0m224 0a128 128 0 1 0-256 0a128 128 0 1 0 256 0"></path> </svg>` : renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"> <path${addAttribute(realColor, "fill")} d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391l-19.9 107.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391L13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256L2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121l19.9-107.9c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1l90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6M160 256a96 96 0 1 1 192 0a96 96 0 1 1-192 0m224 0a128 128 0 1 0-256 0a128 128 0 1 0 256 0"></path> </svg>`} </div>`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/ParfamInfo/icons/SunIcon.astro", void 0);

const $$Astro$b = createAstro();
const $$MoonIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MoonIcon;
  const { fillColor = "#b51818", fillPercentage = 100 } = Astro2.props;
  Math.random().toString(36).substring(2, 15);
  const maxSexteen = fillPercentage > 60 ? true : false;
  const realColor = maxSexteen ? fillColor : "#999999";
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block w-10 h-10"> <!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    class="absolute top-0 left-0"
  >
    <path
      fill="none"
      stroke={fillColor}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"></path>
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    class="absolute top-0 left-0"
  >
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset={\`\${fillPercentage}%\`} stop-color={fillColor}></stop>
        <stop offset={\`\${fillPercentage}%\`} stop-color="transparent"></stop>
      </linearGradient>
    </defs>
    <path
      fill={\`url(#\${gradientId})\`}
      d="M12 1.992a10 10 0 1 0 9.236 13.838c.341-.82-.476-1.644-1.298-1.31a6.5 6.5 0 0 1-6.864-10.787l.077-.08c.551-.63.113-1.653-.758-1.653h-.266l-.068-.006z"
    ></path>
  </svg> --> <!--OTRA OPCION--> ${maxSexteen ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" class="absolute top-0 left-0"> <path fill="none"${addAttribute(fillColor, "stroke")} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"></path> </svg>` : renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" class="absolute top-0 left-0"> <path fill="none"${addAttribute(realColor, "stroke")} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"></path> </svg>`} </div>`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/ParfamInfo/icons/MoonIcon.astro", void 0);

const $$Astro$a = createAstro();
const $$WinterIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$WinterIcon;
  const { fillColor = "#b51818", fillPercentage = 100 } = Astro2.props;
  Math.random().toString(36).substring(2, 15);
  const maxSexteen = fillPercentage > 60 ? true : false;
  const realColor = maxSexteen ? fillColor : "#999999";
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block w-10 h-10"> <!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 21 24"
    class="absolute top-0 left-0"
  >
    <path
      fill="none"
      stroke={fillColor}
      d="m20.662 14.947l-1.531.879l-1.394-.803l1.621-.939c.379-.213-.409-1.591-.788-1.364l-2.409 1.394l-1.939-1.121v-1.985l1.939-1.121l2.409 1.394c.379.213 1.167-1.151.788-1.364l-1.62-.939l1.394-.803l1.531.879c.273.167.863-.848.576-1l-.954-.546l.893-.515c.439-.257-.485-1.848-.924-1.591l-.894.515V4.811c0-.318-1.167-.318-1.167 0v1.772l-1.394.803V5.507c0-.439-1.575-.439-1.575 0v2.788L13.3 9.401l-1.727-.97V6.189l2.408-1.393c.379-.213-.409-1.591-.788-1.364l-1.619.937V2.764l1.53-.882c.273-.167-.303-1.167-.576-1l-.954.546V.386c0-.515-1.848-.515-1.848 0v1.03L8.772.87c-.273-.167-.863.848-.576 1l1.529.879v1.606l-1.622-.939c-.379-.213-1.167 1.151-.788 1.364l2.409 1.394v2.243l-1.727.969l-1.924-1.121V5.507c0-.439-1.575-.439-1.575 0v1.879l-1.394-.803V4.811c0-.318-1.167-.318-1.167 0v1.106l-.894-.515C.604 5.145-.321 6.752.119 6.993l.894.515l-.939.546c-.273.167.303 1.167.576 1l1.546-.879l1.394.803l-1.622.939c-.379.213.409 1.591.788 1.364l2.409-1.394l1.939 1.121v1.985l-1.939 1.121l-2.411-1.393c-.379-.213-1.167 1.151-.788 1.364l1.621.939l-1.394.803l-1.528-.879c-.273-.167-.863.848-.576 1l.954.546l-.894.515c-.439.257.485 1.848.924 1.591l.895-.514v1.106c0 .318 1.167.318 1.167 0v-1.774l1.396-.803v1.879c0 .439 1.575.439 1.575 0v-2.788L8.03 14.6l1.727.97v2.243l-2.409 1.394c-.379.213.409 1.591.788 1.364l1.621-.939v1.606l-1.546.894c-.273.167.303 1.167.576 1l.954-.546v1.03c0 .515 1.848.515 1.848 0v-1.03l.954.546c.273.167.863-.848.576-1l-1.531-.879v-1.606l1.621.939c.379.213 1.167-1.151.788-1.364l-2.409-1.394v-2.242l1.727-.97l1.924 1.121v2.758c0 .439 1.575.439 1.575 0v-1.879l1.394.803v1.773c0 .318 1.167.318 1.167 0v-1.105l.894.515c.439.257 1.364-1.35.924-1.591l-.894-.515l.954-.546c.259-.168-.318-1.168-.591-1.001zm-10-.591l-2.045-1.167v-2.378l2.045-1.151l2.045 1.151v2.379z"
    ></path>
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    class="absolute top-0 left-0.5"
  >
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset={\`\${fillPercentage}%\`} stop-color={fillColor}></stop>
        <stop offset={\`\${fillPercentage}%\`} stop-color="transparent"></stop>
      </linearGradient>
    </defs>
    <path
      fill={\`url(#\${gradientId})\`}
      d="m20.662 14.947l-1.531.879l-1.394-.803l1.621-.939c.379-.213-.409-1.591-.788-1.364l-2.409 1.394l-1.939-1.121v-1.985l1.939-1.121l2.409 1.394c.379.213 1.167-1.151.788-1.364l-1.62-.939l1.394-.803l1.531.879c.273.167.863-.848.576-1l-.954-.546l.893-.515c.439-.257-.485-1.848-.924-1.591l-.894.515V4.811c0-.318-1.167-.318-1.167 0v1.772l-1.394.803V5.507c0-.439-1.575-.439-1.575 0v2.788L13.3 9.401l-1.727-.97V6.189l2.408-1.393c.379-.213-.409-1.591-.788-1.364l-1.619.937V2.764l1.53-.882c.273-.167-.303-1.167-.576-1l-.954.546V.386c0-.515-1.848-.515-1.848 0v1.03L8.772.87c-.273-.167-.863.848-.576 1l1.529.879v1.606l-1.622-.939c-.379-.213-1.167 1.151-.788 1.364l2.409 1.394v2.243l-1.727.969l-1.924-1.121V5.507c0-.439-1.575-.439-1.575 0v1.879l-1.394-.803V4.811c0-.318-1.167-.318-1.167 0v1.106l-.894-.515C.604 5.145-.321 6.752.119 6.993l.894.515l-.939.546c-.273.167.303 1.167.576 1l1.546-.879l1.394.803l-1.622.939c-.379.213.409 1.591.788 1.364l2.409-1.394l1.939 1.121v1.985l-1.939 1.121l-2.411-1.393c-.379-.213-1.167 1.151-.788 1.364l1.621.939l-1.394.803l-1.528-.879c-.273-.167-.863.848-.576 1l.954.546l-.894.515c-.439.257.485 1.848.924 1.591l.895-.514v1.106c0 .318 1.167.318 1.167 0v-1.774l1.396-.803v1.879c0 .439 1.575.439 1.575 0v-2.788L8.03 14.6l1.727.97v2.243l-2.409 1.394c-.379.213.409 1.591.788 1.364l1.621-.939v1.606l-1.546.894c-.273.167.303 1.167.576 1l.954-.546v1.03c0 .515 1.848.515 1.848 0v-1.03l.954.546c.273.167.863-.848.576-1l-1.531-.879v-1.606l1.621.939c.379.213 1.167-1.151.788-1.364l-2.409-1.394v-2.242l1.727-.97l1.924 1.121v2.758c0 .439 1.575.439 1.575 0v-1.879l1.394.803v1.773c0 .318 1.167.318 1.167 0v-1.105l.894.515c.439.257 1.364-1.35.924-1.591l-.894-.515l.954-.546c.259-.168-.318-1.168-.591-1.001zm-10-.591l-2.045-1.167v-2.378l2.045-1.151l2.045 1.151v2.379z"
    ></path>
  </svg> --> ${maxSexteen ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21 24" class="absolute top-0 left-0"> <path${addAttribute(fillColor, "fill")} d="m20.662 14.947l-1.531.879l-1.394-.803l1.621-.939c.379-.213-.409-1.591-.788-1.364l-2.409 1.394l-1.939-1.121v-1.985l1.939-1.121l2.409 1.394c.379.213 1.167-1.151.788-1.364l-1.62-.939l1.394-.803l1.531.879c.273.167.863-.848.576-1l-.954-.546l.893-.515c.439-.257-.485-1.848-.924-1.591l-.894.515V4.811c0-.318-1.167-.318-1.167 0v1.772l-1.394.803V5.507c0-.439-1.575-.439-1.575 0v2.788L13.3 9.401l-1.727-.97V6.189l2.408-1.393c.379-.213-.409-1.591-.788-1.364l-1.619.937V2.764l1.53-.882c.273-.167-.303-1.167-.576-1l-.954.546V.386c0-.515-1.848-.515-1.848 0v1.03L8.772.87c-.273-.167-.863.848-.576 1l1.529.879v1.606l-1.622-.939c-.379-.213-1.167 1.151-.788 1.364l2.409 1.394v2.243l-1.727.969l-1.924-1.121V5.507c0-.439-1.575-.439-1.575 0v1.879l-1.394-.803V4.811c0-.318-1.167-.318-1.167 0v1.106l-.894-.515C.604 5.145-.321 6.752.119 6.993l.894.515l-.939.546c-.273.167.303 1.167.576 1l1.546-.879l1.394.803l-1.622.939c-.379.213.409 1.591.788 1.364l2.409-1.394l1.939 1.121v1.985l-1.939 1.121l-2.411-1.393c-.379-.213-1.167 1.151-.788 1.364l1.621.939l-1.394.803l-1.528-.879c-.273-.167-.863.848-.576 1l.954.546l-.894.515c-.439.257.485 1.848.924 1.591l.895-.514v1.106c0 .318 1.167.318 1.167 0v-1.774l1.396-.803v1.879c0 .439 1.575.439 1.575 0v-2.788L8.03 14.6l1.727.97v2.243l-2.409 1.394c-.379.213.409 1.591.788 1.364l1.621-.939v1.606l-1.546.894c-.273.167.303 1.167.576 1l.954-.546v1.03c0 .515 1.848.515 1.848 0v-1.03l.954.546c.273.167.863-.848.576-1l-1.531-.879v-1.606l1.621.939c.379.213 1.167-1.151.788-1.364l-2.409-1.394v-2.242l1.727-.97l1.924 1.121v2.758c0 .439 1.575.439 1.575 0v-1.879l1.394.803v1.773c0 .318 1.167.318 1.167 0v-1.105l.894.515c.439.257 1.364-1.35.924-1.591l-.894-.515l.954-.546c.259-.168-.318-1.168-.591-1.001zm-10-.591l-2.045-1.167v-2.378l2.045-1.151l2.045 1.151v2.379z"></path> </svg>` : renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21 24" class="absolute top-0 left-0"> <path${addAttribute(realColor, "fill")} d="m20.662 14.947l-1.531.879l-1.394-.803l1.621-.939c.379-.213-.409-1.591-.788-1.364l-2.409 1.394l-1.939-1.121v-1.985l1.939-1.121l2.409 1.394c.379.213 1.167-1.151.788-1.364l-1.62-.939l1.394-.803l1.531.879c.273.167.863-.848.576-1l-.954-.546l.893-.515c.439-.257-.485-1.848-.924-1.591l-.894.515V4.811c0-.318-1.167-.318-1.167 0v1.772l-1.394.803V5.507c0-.439-1.575-.439-1.575 0v2.788L13.3 9.401l-1.727-.97V6.189l2.408-1.393c.379-.213-.409-1.591-.788-1.364l-1.619.937V2.764l1.53-.882c.273-.167-.303-1.167-.576-1l-.954.546V.386c0-.515-1.848-.515-1.848 0v1.03L8.772.87c-.273-.167-.863.848-.576 1l1.529.879v1.606l-1.622-.939c-.379-.213-1.167 1.151-.788 1.364l2.409 1.394v2.243l-1.727.969l-1.924-1.121V5.507c0-.439-1.575-.439-1.575 0v1.879l-1.394-.803V4.811c0-.318-1.167-.318-1.167 0v1.106l-.894-.515C.604 5.145-.321 6.752.119 6.993l.894.515l-.939.546c-.273.167.303 1.167.576 1l1.546-.879l1.394.803l-1.622.939c-.379.213.409 1.591.788 1.364l2.409-1.394l1.939 1.121v1.985l-1.939 1.121l-2.411-1.393c-.379-.213-1.167 1.151-.788 1.364l1.621.939l-1.394.803l-1.528-.879c-.273-.167-.863.848-.576 1l.954.546l-.894.515c-.439.257.485 1.848.924 1.591l.895-.514v1.106c0 .318 1.167.318 1.167 0v-1.774l1.396-.803v1.879c0 .439 1.575.439 1.575 0v-2.788L8.03 14.6l1.727.97v2.243l-2.409 1.394c-.379.213.409 1.591.788 1.364l1.621-.939v1.606l-1.546.894c-.273.167.303 1.167.576 1l.954-.546v1.03c0 .515 1.848.515 1.848 0v-1.03l.954.546c.273.167.863-.848.576-1l-1.531-.879v-1.606l1.621.939c.379.213 1.167-1.151.788-1.364l-2.409-1.394v-2.242l1.727-.97l1.924 1.121v2.758c0 .439 1.575.439 1.575 0v-1.879l1.394.803v1.773c0 .318 1.167.318 1.167 0v-1.105l.894.515c.439.257 1.364-1.35.924-1.591l-.894-.515l.954-.546c.259-.168-.318-1.168-.591-1.001zm-10-.591l-2.045-1.167v-2.378l2.045-1.151l2.045 1.151v2.379z"></path> </svg>`} </div>`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/ParfamInfo/icons/WinterIcon.astro", void 0);

const $$Astro$9 = createAstro();
const $$AutummIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$AutummIcon;
  const { fillColor = "#b51818", fillPercentage = 100 } = Astro2.props;
  Math.random().toString(36).substring(2, 15);
  const maxSexteen = fillPercentage > 60 ? true : false;
  const realColor = maxSexteen ? fillColor : "#999999";
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block w-10 h-10"> <!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 128 128"
    ><path
      fill="none"
      stroke="#cd801f"
      d="M125.28 8.72c-.27-.97-.65-3.37-2.19-2.93c-1.01.29-1.78 2.3-2.52 3c-7.1 6.8-15.91 7.75-25.31 7.81c-2.38.02-11.25-.74-12.73 1.6c-.5.81.76 1.15 1.06 1.91c1.3 3.18-1.89 7.01-4.2 8.75c-2.92 2.21-7.04 3-10.36 1.19c-2.02-1.09-3.58-2.95-2.58-5.4c.4-.97 2.97-2.46 1.94-3.49c-.56-.56-1.82-.34-2.52-.26c-1.8.2-3.55.72-5.29 1.23c-4.21 1.2-8.25 2.87-12.12 4.89c-7.65 3.98-14.49 9.36-20.33 15.69c-6.1 6.59-10.04 15.04-11.7 23.84c-.66 3.55-.97 7.17-.89 10.79c.17 7.59 3.35 14.27-1.13 21.36c-.74 1.17-1.44 2.29-2.34 3.34c-1.76 2.06-3.59 3.97-5.43 5.96c-1.74 1.86-3.73 3.37-5.44 5.26c-2.12 2.34-.41 4.83 1.38 6.85c1.67 1.89 4.58 2.7 7 1.82c2.69-.98 3.43-4.22 4.7-6.47c1.34-2.38 2.73-4.72 4.27-6.96c1.18-1.7 2.42-3.59 4.17-4.76c2.48-1.66 3.91-.74 6.55-.11c1.5.35 2.94.82 4.37 1.41c2.84 1.15 5.57 2.61 8.49 3.55c8.38 2.67 17.39 3.97 26.18 3.38c1.27-.08 3.82.28 3.54-1.76c-.23-1.66-2.34-1.4-3.47-2.12c-11.26-7.16-4.64-23.14 5.52-27.83c9.56-4.41 25.11-2.73 28 9.21c.19.77-.07 2.96.59 3.46c4.21 3.12 19.49-32.06 20.72-35.97c4.76-15.06 6.37-32.89 2.07-48.24"
    >
    </path>
    <path
      fill="none"
      stroke="#cd801f"
      d="M122.35 12.63c-.13-.03-.29.02-.5.18c-.53.41-.94 1.58-1.17 2.2c-3.69 9.9-9.74 16.56-18.01 22.91c-4.42 3.39-9.29 6.14-14.15 8.84c-6.6 3.67-13.23 7.27-19.72 11.13c-7.51 4.46-17.53 9.69-24.47 14.97c-4.65 3.55-9.34 7.06-13.62 11.05c-1.45 1.36-2.87 2.76-4.2 4.25c-1.42 1.59-3.52 3.72-3.82 5.94c-.15 1.08.81 2.34 1.99 2.26c1.42-.11 2.65-2.44 3.54-3.41c1.51-1.63 3.09-3.18 4.63-4.79c2.24-2.33 4.49-4.65 6.97-6.71c5.79-4.81 12-9.27 18.36-13.31c3.64-2.3 7.34-4.48 11.12-6.54c7.24-3.95 14.49-7.9 21.58-12.11c10.36-6.16 21.15-12.92 27.45-23.55c.64-1.08 6.35-12.85 4.02-13.31"
    >
    </path>
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 128 128"
    class="absolute top-0 left-0"
  >
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset={\`\${fillPercentage}%\`} stop-color={fillColor}></stop>
        <stop offset={\`\${fillPercentage}%\`} stop-color="transparent"></stop>
      </linearGradient>
    </defs>

    <path
      fill={\`url(#\${gradientId})\`}
      d="M125.28 8.72c-.27-.97-.65-3.37-2.19-2.93c-1.01.29-1.78 2.3-2.52 3c-7.1 6.8-15.91 7.75-25.31 7.81c-2.38.02-11.25-.74-12.73 1.6c-.5.81.76 1.15 1.06 1.91c1.3 3.18-1.89 7.01-4.2 8.75c-2.92 2.21-7.04 3-10.36 1.19c-2.02-1.09-3.58-2.95-2.58-5.4c.4-.97 2.97-2.46 1.94-3.49c-.56-.56-1.82-.34-2.52-.26c-1.8.2-3.55.72-5.29 1.23c-4.21 1.2-8.25 2.87-12.12 4.89c-7.65 3.98-14.49 9.36-20.33 15.69c-6.1 6.59-10.04 15.04-11.7 23.84c-.66 3.55-.97 7.17-.89 10.79c.17 7.59 3.35 14.27-1.13 21.36c-.74 1.17-1.44 2.29-2.34 3.34c-1.76 2.06-3.59 3.97-5.43 5.96c-1.74 1.86-3.73 3.37-5.44 5.26c-2.12 2.34-.41 4.83 1.38 6.85c1.67 1.89 4.58 2.7 7 1.82c2.69-.98 3.43-4.22 4.7-6.47c1.34-2.38 2.73-4.72 4.27-6.96c1.18-1.7 2.42-3.59 4.17-4.76c2.48-1.66 3.91-.74 6.55-.11c1.5.35 2.94.82 4.37 1.41c2.84 1.15 5.57 2.61 8.49 3.55c8.38 2.67 17.39 3.97 26.18 3.38c1.27-.08 3.82.28 3.54-1.76c-.23-1.66-2.34-1.4-3.47-2.12c-11.26-7.16-4.64-23.14 5.52-27.83c9.56-4.41 25.11-2.73 28 9.21c.19.77-.07 2.96.59 3.46c4.21 3.12 19.49-32.06 20.72-35.97c4.76-15.06 6.37-32.89 2.07-48.24"
    >
    </path>
    <path
      fill="white"
      d="M122.35 12.63c-.13-.03-.29.02-.5.18c-.53.41-.94 1.58-1.17 2.2c-3.69 9.9-9.74 16.56-18.01 22.91c-4.42 3.39-9.29 6.14-14.15 8.84c-6.6 3.67-13.23 7.27-19.72 11.13c-7.51 4.46-17.53 9.69-24.47 14.97c-4.65 3.55-9.34 7.06-13.62 11.05c-1.45 1.36-2.87 2.76-4.2 4.25c-1.42 1.59-3.52 3.72-3.82 5.94c-.15 1.08.81 2.34 1.99 2.26c1.42-.11 2.65-2.44 3.54-3.41c1.51-1.63 3.09-3.18 4.63-4.79c2.24-2.33 4.49-4.65 6.97-6.71c5.79-4.81 12-9.27 18.36-13.31c3.64-2.3 7.34-4.48 11.12-6.54c7.24-3.95 14.49-7.9 21.58-12.11c10.36-6.16 21.15-12.92 27.45-23.55c.64-1.08 6.35-12.85 4.02-13.31"
    >
    </path>
  </svg> --> ${maxSexteen ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 128 128"> <path${addAttribute(fillColor, "fill")} d="M125.28 8.72c-.27-.97-.65-3.37-2.19-2.93c-1.01.29-1.78 2.3-2.52 3c-7.1 6.8-15.91 7.75-25.31 7.81c-2.38.02-11.25-.74-12.73 1.6c-.5.81.76 1.15 1.06 1.91c1.3 3.18-1.89 7.01-4.2 8.75c-2.92 2.21-7.04 3-10.36 1.19c-2.02-1.09-3.58-2.95-2.58-5.4c.4-.97 2.97-2.46 1.94-3.49c-.56-.56-1.82-.34-2.52-.26c-1.8.2-3.55.72-5.29 1.23c-4.21 1.2-8.25 2.87-12.12 4.89c-7.65 3.98-14.49 9.36-20.33 15.69c-6.1 6.59-10.04 15.04-11.7 23.84c-.66 3.55-.97 7.17-.89 10.79c.17 7.59 3.35 14.27-1.13 21.36c-.74 1.17-1.44 2.29-2.34 3.34c-1.76 2.06-3.59 3.97-5.43 5.96c-1.74 1.86-3.73 3.37-5.44 5.26c-2.12 2.34-.41 4.83 1.38 6.85c1.67 1.89 4.58 2.7 7 1.82c2.69-.98 3.43-4.22 4.7-6.47c1.34-2.38 2.73-4.72 4.27-6.96c1.18-1.7 2.42-3.59 4.17-4.76c2.48-1.66 3.91-.74 6.55-.11c1.5.35 2.94.82 4.37 1.41c2.84 1.15 5.57 2.61 8.49 3.55c8.38 2.67 17.39 3.97 26.18 3.38c1.27-.08 3.82.28 3.54-1.76c-.23-1.66-2.34-1.4-3.47-2.12c-11.26-7.16-4.64-23.14 5.52-27.83c9.56-4.41 25.11-2.73 28 9.21c.19.77-.07 2.96.59 3.46c4.21 3.12 19.49-32.06 20.72-35.97c4.76-15.06 6.37-32.89 2.07-48.24"></path> <path fill="white" d="M122.35 12.63c-.13-.03-.29.02-.5.18c-.53.41-.94 1.58-1.17 2.2c-3.69 9.9-9.74 16.56-18.01 22.91c-4.42 3.39-9.29 6.14-14.15 8.84c-6.6 3.67-13.23 7.27-19.72 11.13c-7.51 4.46-17.53 9.69-24.47 14.97c-4.65 3.55-9.34 7.06-13.62 11.05c-1.45 1.36-2.87 2.76-4.2 4.25c-1.42 1.59-3.52 3.72-3.82 5.94c-.15 1.08.81 2.34 1.99 2.26c1.42-.11 2.65-2.44 3.54-3.41c1.51-1.63 3.09-3.18 4.63-4.79c2.24-2.33 4.49-4.65 6.97-6.71c5.79-4.81 12-9.27 18.36-13.31c3.64-2.3 7.34-4.48 11.12-6.54c7.24-3.95 14.49-7.9 21.58-12.11c10.36-6.16 21.15-12.92 27.45-23.55c.64-1.08 6.35-12.85 4.02-13.31"></path> </svg>` : renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 128 128"> <path${addAttribute(realColor, "fill")} d="M125.28 8.72c-.27-.97-.65-3.37-2.19-2.93c-1.01.29-1.78 2.3-2.52 3c-7.1 6.8-15.91 7.75-25.31 7.81c-2.38.02-11.25-.74-12.73 1.6c-.5.81.76 1.15 1.06 1.91c1.3 3.18-1.89 7.01-4.2 8.75c-2.92 2.21-7.04 3-10.36 1.19c-2.02-1.09-3.58-2.95-2.58-5.4c.4-.97 2.97-2.46 1.94-3.49c-.56-.56-1.82-.34-2.52-.26c-1.8.2-3.55.72-5.29 1.23c-4.21 1.2-8.25 2.87-12.12 4.89c-7.65 3.98-14.49 9.36-20.33 15.69c-6.1 6.59-10.04 15.04-11.7 23.84c-.66 3.55-.97 7.17-.89 10.79c.17 7.59 3.35 14.27-1.13 21.36c-.74 1.17-1.44 2.29-2.34 3.34c-1.76 2.06-3.59 3.97-5.43 5.96c-1.74 1.86-3.73 3.37-5.44 5.26c-2.12 2.34-.41 4.83 1.38 6.85c1.67 1.89 4.58 2.7 7 1.82c2.69-.98 3.43-4.22 4.7-6.47c1.34-2.38 2.73-4.72 4.27-6.96c1.18-1.7 2.42-3.59 4.17-4.76c2.48-1.66 3.91-.74 6.55-.11c1.5.35 2.94.82 4.37 1.41c2.84 1.15 5.57 2.61 8.49 3.55c8.38 2.67 17.39 3.97 26.18 3.38c1.27-.08 3.82.28 3.54-1.76c-.23-1.66-2.34-1.4-3.47-2.12c-11.26-7.16-4.64-23.14 5.52-27.83c9.56-4.41 25.11-2.73 28 9.21c.19.77-.07 2.96.59 3.46c4.21 3.12 19.49-32.06 20.72-35.97c4.76-15.06 6.37-32.89 2.07-48.24"></path> <path fill="white" d="M122.35 12.63c-.13-.03-.29.02-.5.18c-.53.41-.94 1.58-1.17 2.2c-3.69 9.9-9.74 16.56-18.01 22.91c-4.42 3.39-9.29 6.14-14.15 8.84c-6.6 3.67-13.23 7.27-19.72 11.13c-7.51 4.46-17.53 9.69-24.47 14.97c-4.65 3.55-9.34 7.06-13.62 11.05c-1.45 1.36-2.87 2.76-4.2 4.25c-1.42 1.59-3.52 3.72-3.82 5.94c-.15 1.08.81 2.34 1.99 2.26c1.42-.11 2.65-2.44 3.54-3.41c1.51-1.63 3.09-3.18 4.63-4.79c2.24-2.33 4.49-4.65 6.97-6.71c5.79-4.81 12-9.27 18.36-13.31c3.64-2.3 7.34-4.48 11.12-6.54c7.24-3.95 14.49-7.9 21.58-12.11c10.36-6.16 21.15-12.92 27.45-23.55c.64-1.08 6.35-12.85 4.02-13.31"></path> </svg>`} </div>`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/ParfamInfo/icons/AutummIcon.astro", void 0);

const $$Astro$8 = createAstro();
const $$SummerIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SummerIcon;
  const { fillColor = "#b51818", fillPercentage = 100 } = Astro2.props;
  Math.random().toString(36).substring(2, 15);
  const maxSexteen = fillPercentage > 60 ? true : false;
  const realColor = maxSexteen ? fillColor : "#999999";
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block w-10 h-10"> <!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 576 512"
  >
    <path
      fill="none"
      stroke={fillColor}      
      stroke-width="15"
      d="m346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1l67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4M462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5zm-354.8 13.8c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8l3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z"
    >
    </path>
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 576 512"
    class="absolute top-0 left-0"
  >
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset={\`\${fillPercentage}%\`} stop-color={fillColor}></stop>
        <stop offset={\`\${fillPercentage}%\`} stop-color="transparent"></stop>
      </linearGradient>
    </defs>

    <path
      fill={\`url(#\${gradientId})\`}
      d="m346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1l67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4M462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5zm-354.8 13.8c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8l3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z"
    >
    </path>
  </svg> --> ${maxSexteen ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 576 512"> <path${addAttribute(fillColor, "fill")} stroke-width="15" d="m346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1l67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4M462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5zm-354.8 13.8c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8l3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z"></path> </svg>` : renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 576 512"> <path${addAttribute(realColor, "fill")} stroke-width="15" d="m346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1l67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4M462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5zm-354.8 13.8c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8l3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z"></path> </svg>`} </div>`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/ParfamInfo/icons/SummerIcon.astro", void 0);

const $$Astro$7 = createAstro();
const $$SpringIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SpringIcon;
  const { fillColor = "#b51818", fillPercentage = 100 } = Astro2.props;
  Math.random().toString(36).substring(2, 15);
  const maxSexteen = fillPercentage > 60 ? true : false;
  const realColor = maxSexteen ? fillColor : "#999999";
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block w-10 h-10"> <!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    ><path
      fill="none"
      stroke={fillColor}
      d="M3 13a9 9 0 0 0 9 9c0-5-4.03-9-9-9m9-7.5A2.5 2.5 0 0 1 14.5 8a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 8A2.5 2.5 0 0 1 12 5.5m-6.4 4.75a2.5 2.5 0 0 0 2.5 2.5c.53 0 1.02-.17 1.4-.44v.19A2.5 2.5 0 0 0 12 15a2.5 2.5 0 0 0 2.5-2.5v-.19c.38.27.87.44 1.4.44a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25c.84-.4 1.43-1.26 1.43-2.25a2.5 2.5 0 0 0-2.5-2.5c-.53 0-1.02.16-1.4.44V3.5A2.5 2.5 0 0 0 12 1a2.5 2.5 0 0 0-2.5 2.5v.19c-.38-.28-.87-.44-1.4-.44a2.5 2.5 0 0 0-2.5 2.5c0 .99.59 1.85 1.43 2.25c-.84.4-1.43 1.25-1.43 2.25M12 22a9 9 0 0 0 9-9c-5 0-9 4-9 9"
    >
    </path>
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    class="absolute top-0 left-0"
  >
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset={\`\${fillPercentage}%\`} stop-color={fillColor}></stop>
        <stop offset={\`\${fillPercentage}%\`} stop-color="transparent"></stop>
      </linearGradient>
    </defs>

    <path
      fill={\`url(#\${gradientId})\`}
      d="M3 13a9 9 0 0 0 9 9c0-5-4.03-9-9-9m9-7.5A2.5 2.5 0 0 1 14.5 8a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 8A2.5 2.5 0 0 1 12 5.5m-6.4 4.75a2.5 2.5 0 0 0 2.5 2.5c.53 0 1.02-.17 1.4-.44v.19A2.5 2.5 0 0 0 12 15a2.5 2.5 0 0 0 2.5-2.5v-.19c.38.27.87.44 1.4.44a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25c.84-.4 1.43-1.26 1.43-2.25a2.5 2.5 0 0 0-2.5-2.5c-.53 0-1.02.16-1.4.44V3.5A2.5 2.5 0 0 0 12 1a2.5 2.5 0 0 0-2.5 2.5v.19c-.38-.28-.87-.44-1.4-.44a2.5 2.5 0 0 0-2.5 2.5c0 .99.59 1.85 1.43 2.25c-.84.4-1.43 1.25-1.43 2.25M12 22a9 9 0 0 0 9-9c-5 0-9 4-9 9"
    >
    </path>
  </svg> --> ${maxSexteen ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"> <path${addAttribute(fillColor, "fill")} d="M3 13a9 9 0 0 0 9 9c0-5-4.03-9-9-9m9-7.5A2.5 2.5 0 0 1 14.5 8a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 8A2.5 2.5 0 0 1 12 5.5m-6.4 4.75a2.5 2.5 0 0 0 2.5 2.5c.53 0 1.02-.17 1.4-.44v.19A2.5 2.5 0 0 0 12 15a2.5 2.5 0 0 0 2.5-2.5v-.19c.38.27.87.44 1.4.44a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25c.84-.4 1.43-1.26 1.43-2.25a2.5 2.5 0 0 0-2.5-2.5c-.53 0-1.02.16-1.4.44V3.5A2.5 2.5 0 0 0 12 1a2.5 2.5 0 0 0-2.5 2.5v.19c-.38-.28-.87-.44-1.4-.44a2.5 2.5 0 0 0-2.5 2.5c0 .99.59 1.85 1.43 2.25c-.84.4-1.43 1.25-1.43 2.25M12 22a9 9 0 0 0 9-9c-5 0-9 4-9 9"></path> </svg>` : renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"> <path${addAttribute(realColor, "fill")} d="M3 13a9 9 0 0 0 9 9c0-5-4.03-9-9-9m9-7.5A2.5 2.5 0 0 1 14.5 8a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 8A2.5 2.5 0 0 1 12 5.5m-6.4 4.75a2.5 2.5 0 0 0 2.5 2.5c.53 0 1.02-.17 1.4-.44v.19A2.5 2.5 0 0 0 12 15a2.5 2.5 0 0 0 2.5-2.5v-.19c.38.27.87.44 1.4.44a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25c.84-.4 1.43-1.26 1.43-2.25a2.5 2.5 0 0 0-2.5-2.5c-.53 0-1.02.16-1.4.44V3.5A2.5 2.5 0 0 0 12 1a2.5 2.5 0 0 0-2.5 2.5v.19c-.38-.28-.87-.44-1.4-.44a2.5 2.5 0 0 0-2.5 2.5c0 .99.59 1.85 1.43 2.25c-.84.4-1.43 1.25-1.43 2.25M12 22a9 9 0 0 0 9-9c-5 0-9 4-9 9"></path> </svg>`} </div>`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/ParfamInfo/icons/SpringIcon.astro", void 0);

const $$Astro$6 = createAstro();
const $$HeartIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeartIcon;
  const { fillColor = "#b51818", isFilled = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block lg:w-10 w-7 lg:h-10 h-7"> ${isFilled ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" class="absolute top-0 left-0"> <path${addAttribute(fillColor, "fill")} stroke-width="2" d="M18.494 3.801c2.095 1.221 3.569 3.7 3.504 6.592c-.081 3.61-2.89 6.794-7.679 9.638c-.71.422-1.458.969-2.319.969c-.845 0-1.625-.557-2.32-.97c-4.787-2.843-7.597-6.028-7.678-9.637c-.065-2.892 1.409-5.37 3.504-6.592C7.466 2.66 9.928 2.653 12 4.338c2.072-1.685 4.534-1.679 6.494-.537"></path> </svg>` : renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" class="absolute top-0 left-0"> <path fill="none"${addAttribute(fillColor, "stroke")} stroke-width="2" d="M18.494 3.801c2.095 1.221 3.569 3.7 3.504 6.592c-.081 3.61-2.89 6.794-7.679 9.638c-.71.422-1.458.969-2.319.969c-.845 0-1.625-.557-2.32-.97c-4.787-2.843-7.597-6.028-7.678-9.637c-.065-2.892 1.409-5.37 3.504-6.592C7.466 2.66 9.928 2.653 12 4.338c2.072-1.685 4.534-1.679 6.494-.537"></path> </svg>`} </div>`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/ParfamInfo/icons/HeartIcon.astro", void 0);

const $$Astro$5 = createAstro();
const $$MaleIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MaleIcon;
  const { fillColor = "#b51818", fillPercentage = 100 } = Astro2.props;
  Math.random().toString(36).substring(2, 15);
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block lg:w-7 w-5 lg:h-7 h-5"> <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"> <path${addAttribute(fillColor, "fill")} d="M212 96a84 84 0 1 0-96 83.13V196H88a12 12 0 0 0 0 24h28v20a12 12 0 0 0 24 0v-20h28a12 12 0 0 0 0-24h-28v-16.87A84.12 84.12 0 0 0 212 96M68 96a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60"></path> </svg> </div>`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/ParfamInfo/icons/MaleIcon.astro", void 0);

const $$Astro$4 = createAstro();
const $$WomenIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$WomenIcon;
  const { fillColor = "#b51818", fillPercentage = 100 } = Astro2.props;
  Math.random().toString(36).substring(2, 15);
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block lg:w-7 w-5 lg:h-7 h-5"> <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path${addAttribute(fillColor, "fill")} d="M216 28h-48a12 12 0 0 0 0 24h19l-32.72 32.74a84 84 0 1 0 17 17L204 69v19a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12m-69.59 166.46a60 60 0 1 1 0-84.87a60.1 60.1 0 0 1 0 84.87"></path></svg> </div>`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/ParfamInfo/icons/WomenIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$UnisexIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$UnisexIcon;
  const { fillColor = "#b51818", fillPercentage = 100 } = Astro2.props;
  Math.random().toString(36).substring(2, 15);
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block lg:w-7 w-5 lg:h-7 h-5"> <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path${addAttribute(fillColor, "fill")} d="M208 20h-40a12 12 0 0 0 0 24h11l-15.64 15.67A68 68 0 1 0 108 178.92V192H88a12 12 0 0 0 0 24h20v16a12 12 0 0 0 24 0v-16h20a12 12 0 0 0 0-24h-20v-13.08a67.93 67.93 0 0 0 46.9-100.84L196 61v11a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12m-88 136a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></path></svg> </div>`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/ParfamInfo/icons/UnisexIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$InfoStats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$InfoStats;
  const { hour, season, text } = Astro2.props;
  const data = hour || season;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<p class="text-sm title-font text-gray-500 tracking-widest mb-4">${text}</p><div class="flex flex-row">${Object.entries(data).map(([key, value]) => renderTemplate`<div class="flex flex-col w-1/2 items-center gap-2">${key === "d\xEDa" && renderTemplate`${renderComponent($$result2, "SunIcon", $$SunIcon, { "fillPercentage": Math.ceil(value) })}`}${key === "noche" && renderTemplate`${renderComponent($$result2, "MoonIcon", $$MoonIcon, { "fillPercentage": Math.ceil(value) })}`}${key === "invierno" && renderTemplate`${renderComponent($$result2, "WinterIcon", $$WinterIcon, { "fillPercentage": Math.ceil(value) })}`}${key === "oto\xF1o" && renderTemplate`${renderComponent($$result2, "AutummIcon", $$AutummIcon, { "fillPercentage": Math.ceil(value) })}`}${key === "primavera" && renderTemplate`${renderComponent($$result2, "SpringIcon", $$SpringIcon, { "fillPercentage": Math.ceil(value) })}`}${key === "verano" && renderTemplate`${renderComponent($$result2, "SummerIcon", $$SummerIcon, { "fillPercentage": Math.ceil(value) })}`}<span class="text-sm title-font text-gray-500 tracking-widest capitalize">${key}</span></div>`)}</div>` })}`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/ParfamInfo/InfoStats.astro", void 0);

const $$Astro$1 = createAstro();
const $$InfoType = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InfoType;
  const { price, size } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-iyeoqhnz": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="lg:w-1/4 md:w-1/3 xs:w-1/2 w-full" data-astro-cid-iyeoqhnz><div class="h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden borderUnSelected" data-astro-cid-iyeoqhnz><h2 class="text-sm tracking-widest title-font mb-1 font-medium" data-astro-cid-iyeoqhnz>
PRESENTACIÓN
</h2><h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200" data-astro-cid-iyeoqhnz><span${addAttribute(size, "data-size")} data-astro-cid-iyeoqhnz>${size}</span><span class="text-lg ml-1 font-normal text-gray-500" data-astro-cid-iyeoqhnz>/ML</span></h1><p class="flex items-center text-gray-600" data-astro-cid-iyeoqhnz>S/ ${price}</p></div></div>` })}`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/components/ParfamInfo/InfoType.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const { data, error } = await Astro2.callAction(
    actions.getParfamsBySlug,
    slug ?? ""
  );
  if (error) {
    return Astro2.redirect("/");
  }
  const { parfam } = data;
  const phoneNumber = "991177495";
  const message = "Hola quisiera conocer el stock de parfam en la presentacion size ml";
  const joinNotes = (items) => {
    if (items.length === 0) return "";
    if (items.length === 1) return items[0];
    const allButLast = items.slice(0, -1).join(", ");
    const last = items[items.length - 1];
    return `${allButLast} y ${last}`;
  };
  const getNotesText = (parfam2) => {
    const sections = [];
    if (parfam2.topNotes.length > 0) {
      const topNotes = joinNotes(parfam2.topNotes);
      sections.push(`Las Notas de Salida son ${topNotes}`);
    }
    if (parfam2.midNotes.length > 0) {
      const midNotes = joinNotes(parfam2.midNotes);
      sections.push(`las Notas de Corazón son ${midNotes}`);
    }
    if (parfam2.baseNotes.length > 0) {
      const baseNotes = joinNotes(parfam2.baseNotes);
      sections.push(`las Notas de Fondo son ${baseNotes}`);
    }
    return sections.join("; ") + ".";
  };
  const textNotes = getNotesText(parfam);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="overflow-hidden"> <div class="flex lg:flex-row flex-col w-full mx-auto"> <div class="flex-col flex w-1/3 max-w-[26rem] relative self-center
          rounded-xl bg-gradient-to-tr from-red-800 to-red-600
          bg-clip-border shadow-xl shadow-red-700/40"> ${renderComponent($$result3, "Image", $$Image, { "src": parfam.image, "alt": parfam.name, "inferSize": true, "quality": 80, "loading": "lazy", "class": "object-cover object-center w-full h-full block" })} <!-- <img
            alt={parfam.name}
            class="w-full h-auto object-cover object-center rounded"
            src={parfam.image}
          /> --> <button class="!absolute lg:top-4 top-0 lg:right-4 right-0 h-8 max-h-[32px] w-8 max-w-[32px]"> <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform"> ${parfam.gender === "Hombres" && renderTemplate`${renderComponent($$result3, "MaleIcon", $$MaleIcon, {})}`} ${parfam.gender === "Mujeres" && renderTemplate`${renderComponent($$result3, "WomenIcon", $$WomenIcon, {})}`} ${parfam.gender === "Hombres y Mujeres" && renderTemplate`${renderComponent($$result3, "UnisexIcon", $$UnisexIcon, {})}`} </span> </button> </div> <div class="flex flex-col gap-4 lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"> <div class="flex justify-between"> <h1 class="font-extrabold text-title lg:text-3xl text-xl mb-1"> ${parfam.name} </h1> <button class="lg:top-4 top-0 lg:right-4 right-0 max-h-[48px] max-w-[48px] select-none rounded-full text-center align-middle
              font-sans text-xs font-medium uppercase text-principal transition-all hover:bg-red-500/10 active:bg-principalHover/30
              disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-dark="true"> ${renderComponent($$result3, "HeartIcon", $$HeartIcon, { "isFilled": true })} </button> </div> <h2 class="text-sm title-font text-gray-500 tracking-widest lg:mb-0 mb-4"> ${parfam.desiger} </h2> <div class="flex lg:flex-row flex-col gap-4 mb-2"> <div class="flex flex-col lg:w-2/3 w-full"> ${renderComponent($$result3, "ParfamInfoStats", $$InfoStats, { "text": "Temporada", "season": parfam.season })} </div> <div class="flex flex-col lg:w-1/3 w-full"> ${renderComponent($$result3, "ParfamInfoStats", $$InfoStats, { "text": "Tiempo", "hour": parfam.hour })} </div> </div> <!-- <div class="flex flex-col gap-2">
            <p class="leading-relaxed">Descripción</p>
            <p class="text-justify leading-relaxed">
              {parfam.description}
            </p>
          </div> --> <div class="flex flex-row items-center w-full mx-auto px-2"> <div class="text-4xl text-principal rotate-12"> <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M9.583 17.321C8.553 16.227 8 15 8 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179"></path></svg> </div> <p class="md:text-sm text-base text-gray-600 md:text-justify text-center italic"> ${textNotes} </p> <div class="text-4xl text-principal rotate-12"> <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M14.417 6.679C15.447 7.773 16 9 16 10.989c0 3.5-2.456 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.248-5.621c-.537.278-1.24.375-1.93.311C9.591 12.323 8.17 10.842 8.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.1.49 2.748 1.179"></path></svg> </div> </div> <div class="flex sm:flex-row flex-col gap-4"> ${parfam.types.map((type) => renderTemplate`${renderComponent($$result3, "InfoType", $$InfoType, { "size": type.size, "price": type.price })}`)} </div> </div> </div> </section>  ${renderComponent($$result3, "Whatsapp", $$Whatsapp, { "phoneNumber": phoneNumber, "message": message.replace("parfam", `${parfam.name}`) })} ` })} ` })}`;
}, "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/pages/parfam/[...slug].astro", void 0);
const $$file = "C:/Users/christian.romero/Desktop/Projects/ParfamPE/astro-main/src/pages/parfam/[...slug].astro";
const $$url = "/parfam/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
