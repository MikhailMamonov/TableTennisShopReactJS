import { ADD_PRODUCT } from "../constants/action-types";


export function addArticle(payload) {
  return { type: ADD_PRODUCT, payload }
};