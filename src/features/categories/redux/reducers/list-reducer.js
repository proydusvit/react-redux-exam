import * as actions from "../actions/categories-actions";

const initialState = {
    items: [],
    isLoading: false
}

const reducer = (state = initialState, action) => {

    if (actions.loadCategoryAction.matches(action) ||
        actions.editCategoryAction.matches(action) ||
        actions.createCategoryAction.matches(action)
    ) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (actions.createCategorySuccessAction.matches(action)) {
        return {
            ...state,
            items: state.items.concat(action.payload),
            isLoading: false
        }
    }

    if (actions.editCategorySuccessAction.matches(action) ||
        actions.loadCategorySuccessAction.matches(action)
    ) {

        const items = state.items;

        if (items.length === 0) {
            return {
                ...state,
                items: [action.payload],
                isLoading: false
            }
        }

        let newItems = [];
        const indexToReplace = items.findIndex(x => x.id === action.payload.id);

        if (indexToReplace < 0) {
            return state;
        }

        if (indexToReplace === 0) {
            newItems = [
                action.payload,
                ...items.slice(indexToReplace + 1)
            ];
        } else if (indexToReplace === items.length - 1) {
            newItems = [
                ...items.slice(0, indexToReplace),
                action.payload
            ];
        }
        else {
            newItems = [
                ...items.slice(0, indexToReplace),
                action.payload,
                ...items.slice(indexToReplace + 1)
            ]
        }

        return {
            ...state,
            items: newItems,
            isLoading: false
        };
    }

    if (actions.loadCategoriesAction.matches(action)) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (actions.loadCategoriesSuccessAction.matches(action)) {
        return {
            ...state,
            items: action.payload,
            isLoading: false
        };
    }

    return state;
}

export default reducer;