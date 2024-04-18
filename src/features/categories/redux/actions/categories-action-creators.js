import { get, put, post } from "../../../../client/fake-client";
import { push } from 'connected-react-router';
import routes from '../../routes/routes';
import * as actions from './categories-actions';
import { showSuccessAlert, showErrorAlert } from "../../../../components/alert/redux/alert-action-creators";

export const loadCategory = (id) => async (dispatch) => {
    dispatch(actions.loadCategoryAction.create(id));

    const category = await get(`categories/${id}`);

    return dispatch(actions.loadCategorySuccessAction.create(category));
}

export const loadCategories = () => async (dispatch) => {
    dispatch(actions.loadCategoriesAction.create());

    const list = await get('categories');

    return dispatch(actions.loadCategoriesSuccessAction.create(list));
}

export const editCategory = (category) => async (dispatch) => {
    dispatch(actions.editCategoryAction.create());

    try {
        await put(`categories/${category.id}`, category);

        dispatch(actions.editCategorySuccessAction.create(category));
        dispatch(push(routes.details(category.id)));
        return dispatch(showSuccessAlert('Category has been edited'));
    }
    catch (e) {
        return dispatch(showErrorAlert('Something went wrong!'));
    }
}

export const createCategory = (category) => async (dispatch) => {
    dispatch(actions.createCategoryAction.create());

    try {
        await post(`categories/${category.id}`, category);

        dispatch(actions.createCategorySuccessAction.create(category));
        dispatch(push(routes.details(category.id)));
        return dispatch(showSuccessAlert('Category has been created'));
    }
    catch (e) {
        return dispatch(showErrorAlert('Something went wrong!'));
    }
}