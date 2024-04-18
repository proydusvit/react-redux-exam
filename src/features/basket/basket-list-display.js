import React from 'react';
import BasketListItem from './basket-list-item'
import { Alert } from 'react-bootstrap';
import Spinner from '../../components/spinner/spinner';

export default (props) => {

    let list = null;

    if (!props.isLoading) {
        list = props.items != null & props.items.length > 0
            ? props.items.map(item => <BasketListItem key={item.product.id}
                item={item}
                onRemoveClicked={props.onItemRemoved}
                onQuantityChanged={props.onItemQuantityChanged} />)
            : (<Alert variant="info text-center">Basket is empty!</Alert>)
    }

    return (
        <>
            <Spinner isLoading={props.isLoading} />
            {list}
        </>
    )
}