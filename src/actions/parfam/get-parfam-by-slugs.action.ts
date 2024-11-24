import { defineAction } from "astro:actions";
import { z } from "astro:schema";

import { getParfamJson } from "@/Util";

// import { count, db, eq, Product, ProductImage, sql } from 'astro:db';

export const getParfamsBySlug = defineAction({
  accept: "json",
  input: z.string(),
  handler: async ( slug ) => {
    
    const parfams = await getParfamJson();

    const result = parfams.find((p) => p.slug === slug);
    if (!result) {
      throw new Error(`Perfume con slug "${slug}" no encontrado`);
    }

    return {
      parfam: result
    };
  },
});
