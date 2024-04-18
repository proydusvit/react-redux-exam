import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasketItemsIds, selectBasketContents } from './redux/selectors/basket-selectors';
import { loadProductsByIdAction } from '../products/redux/actions/products-actions';
import DisplayComponent from './basket-list-display';
import { removeItemFromBasketAction, setItemQuantityInBasketAction } from './redux/actions/basket-actions';
import { selectProductsListIsLoading } from '../products/redux/selectors/products-selectors';

export default () => {

    const isLoading = useSelector(selectProductsListIsLoading);
    const productIds = useSelector(selectBasketItemsIds);
    const basket = useSelector(selectBasketContents);
    const dispatch = useDispatch();

    const memoizedCallback = useCallback(
        () => {
            dispatch(loadProductsByIdAction.create(productIds));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [dispatch]
    );

    useEffect(memoizedCallback, [memoizedCallback]);

    return (
        <DisplayComponent
            items={basket}
            isLoading={isLoading}
            onItemRemoved={(item) => dispatch(removeItemFromBasketAction.create(item.product.id))}
            onItemQuantityChanged={(item, quantity) => dispatch(setItemQuantityInBasketAction.create({ productId: item.product.id, quantity }))} />
    )
}