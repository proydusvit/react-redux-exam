import React from 'react';
import { Switch, Route } from 'react-router';
import Categories from '../features/categories/categories'
import CategoriesRoutes from '../features/categories/routes/categories'
import BasketRoutes from '../features/basket/routes/basket-routes';

class RoutesComponent extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Categories}></Route>
                <Route path="/categories" component={CategoriesRoutes}></Route>
                <Route path="/basket" component={BasketRoutes}></Route>
            </Switch>
        )
    }
}

export default RoutesComponent;