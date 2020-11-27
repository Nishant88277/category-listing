import { CATEGORY_DETAILS, CATEGORY_DETAILS_SUCCESS, CATEGORY_DETAILS_FAILURE } from "../Constants";

export const CategoryDetails = (payload) => ({
  type: CATEGORY_DETAILS,
  payload,
});

export const CategoryDetailsSuccess = (payload) => ({
  type: CATEGORY_DETAILS_SUCCESS,
  payload,
});

export const CategoryDetailsFailure = (payload) => ({
  type: CATEGORY_DETAILS_FAILURE,
  payload,
});
