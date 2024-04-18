import React from 'react';
import { Switch, Route } from 'react-router';
import routes from '.';
import BasketLayout from '../basket-layout';
import BasketList from '../basket-list';

export default () => {
    return (
        <BasketLayout>
            <Switch>
                <Route path={routes.basket} component={BasketList}></Route>
            </Switch>
        </BasketLayout>
    )
}