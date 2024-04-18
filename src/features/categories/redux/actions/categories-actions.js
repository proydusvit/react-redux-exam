import { createReduxAction } from "../../../../redux/redux-action";

export const loadCategoryAction = createReduxAction('LOAD_CATEGORY');
export const loadCategorySuccessAction = createReduxAction('LOAD_CATEGORY_SUCCESS');

export const loadCategoriesAction = createReduxAction('LOAD_CATEGORIES');
export const loadCategoriesSuccessAction = createReduxAction('LOAD_CATEGORIES_SUCCESS');

export const editCategoryAction = createReduxAction('EDIT_CATEGORY');
export const editCategorySuccessAction = createReduxAction('EDIT_CATEGORY_SUCCESS');

export const createCategoryAction = createReduxAction('CREATE_CATEGORY');
export const createCategorySuccessAction = createReduxAction('CREATE_CATEGORY_SUCCESS');