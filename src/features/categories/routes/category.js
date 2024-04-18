import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Category from '../category-details';
import EditCategory from '../category-edit';
import CreateProduct from '../../products/product-create';
import categoryRoutes from './routes';
import productRoutes from '../../products/routes/routes';
import ProtectedRoute from '../../../security/protected-route';
import permissions from '../../../security/permissions';

export default class CategoryRoutesComponent extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={categoryRoutes.details(":categoryId(\\d+)")} component={Category}></Route>
                <ProtectedRoute path={categoryRoutes.edit(":categoryId(\\d+)")} component={EditCategory} permission={permissions.category.edit}></ProtectedRoute>
                <ProtectedRoute path={productRoutes.create(":categoryId(\\d+)")} component={CreateProduct} permission={permissions.product.add}/>
            </Switch>
        )
    }
}