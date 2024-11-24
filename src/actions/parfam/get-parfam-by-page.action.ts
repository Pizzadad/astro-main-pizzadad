import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

import type { ParfamWithImages } from "@/interfaces/";
import { getParfamJson } from "@/Util";

// import { count, db, eq, Product, ProductImage, sql } from 'astro:db';

export const getParfamsByPage = defineAction({
  accept: 'json',
  input: z.object({
    page: z.number().optional().default(1),
    limit: z.number().optional().default(6),
  }),
  handler: async (
    { page, limit }
  ) => {
    page = page <= 0 ? 1 : page;

    const parfams =  await getParfamJson();

    const totalPages = Math.ceil(parfams.length / limit);

    if (page > totalPages) {
      return {
        parfams: [] as ParfamWithImages[],
        totalPages: totalPages,
      };
    }

    const offset = (page - 1) * limit;
    const data = parfams.slice(offset, offset + limit);

    return {
        parfams: data as ParfamWithImages[],
        totalPages: totalPages,
    };
  },
});