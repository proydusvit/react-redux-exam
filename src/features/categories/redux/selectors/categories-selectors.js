import { pipe } from "../../../../utils/functional-helpers";

const selectCategories = (state) => state.categories;

const selectCategoriesList = pipe(
    selectCategories,
    categories => categories.list
);

export const selectCategoriesListItems = pipe(
    selectCategoriesList,
    list => list.items
);

export const selectCategoryWithId = (id) => pipe(
    selectCategoriesListItems,
    items => items.find(x => x.id === parseInt(id)) || null
);

export const selectCategoriesListIsLoading = pipe(
    selectCategoriesList,
    list => list.isLoading
);