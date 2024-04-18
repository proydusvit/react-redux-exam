import React from 'react';
import DisplayComponent from './basket-icon-display';
import { useSelector, useDispatch } from 'react-redux';
import { selectBasketItemsCount } from './redux/selectors/basket-selectors';
import basketRoutes from './routes';
import { push } from 'connected-react-router';

export default () => {
    const basketCount = useSelector(selectBasketItemsCount)
    const dispatch = useDispatch();

    return (
        <DisplayComponent count={basketCount} onIconClicked={() => dispatch(push(basketRoutes.basket))}/>
    )
}