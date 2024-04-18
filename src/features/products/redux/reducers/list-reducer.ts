import * as actions from "../actions/products-actions";
import { AnyAction } from "redux";
import { ProductsListState } from "../types/products-types";

const initialState: ProductsListState = {
    items: [],
    isLoading: false
}

const reducer = (state: ProductsListState = initialState, action: AnyAction): ProductsListState => {

    if (actions.createProductAction.matches(action)) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (actions.createProductSuccessAction.matches(action)) {
        return {
            ...state,
            items: [
                ...state.items,
                action.payload
            ],
            isLoading: false
        };
    }

    if (actions.loadProductsAction.matches(action) ||
        actions.loadProductsByIdAction.matches(action)) {
        return {
            ...state,
            items: [],
            isLoading: true
        };
    }

    if (actions.loadProductsSuccessAction.matches(action) ||
        actions.loadProductsByIdSuccessAction.matches(action)) {
        return {
            ...state,
            items: action.payload,
            isLoading: false
        };
    }

    return state;
}

export default reducer;