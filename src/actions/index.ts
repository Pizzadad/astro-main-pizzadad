import { getParfamsByPage } from './parfam/get-parfam-by-page.action';
import { getParfamsBySlug } from './parfam/get-parfam-by-slugs.action';

export const server = {
  // actions


  // Parfams
  getParfamsByPage,
  getParfamsBySlug

};
