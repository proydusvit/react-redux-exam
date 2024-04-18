import { SandboxState } from "../../../../redux/state";
import { typedPipe } from '../../../../utils/functional-helpers';

const selectProducts = (state: SandboxState) => state.products;

const selectProductsList = typedPipe(
    selectProducts,
    products => products.list
);

export const selectProductsListItems = typedPipe(
    selectProductsList,
    list => list.items ?? []
);

export const selectProductsListIsLoading = typedPipe(
    selectProductsList,
    list => list.isLoading
);
