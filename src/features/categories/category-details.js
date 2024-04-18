import React from 'react';
import { connect } from 'react-redux';
import { loadCategory } from './redux/actions/categories-action-creators';
import ProductList from '../products/products-list';
import { selectProductsListItems, selectProductsListIsLoading } from '../products/redux/selectors/products-selectors';
import productRoutes from '../products/routes/routes';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Spinner from '../../components/spinner/spinner';
import { loadProductsAction } from '../products/redux/actions/products-actions';
import permission from '../../security/permissions';
import PermissionContainer from '../../components/containers/permission-container';
import { addItemToBasketAction } from '../basket/redux/actions/basket-actions';

class CategoryComponent extends React.Component {

    componentDidMount() {
        this.props.loadCategory(this.props.match.params.categoryId);
        this.props.loadProductsForCategory({ categoryId: this.props.match.params.categoryId });
    }

    render() {
        return (
            <>
                <PermissionContainer permission={permission.product.add}>
                    <Button as={Link} variant="primary" to={productRoutes.create(this.props.id)} className="mb-2 float-right">Add product</Button>
                </PermissionContainer>
                <div className="clearfix"></div>
                <Spinner isLoading={this.props.isLoading} />
                <ProductList {...this.props} onProductAddClicked={this.props.addProductToBasket}></ProductList>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.categoryId,
    products: selectProductsListItems(state),
    isLoading: selectProductsListIsLoading(state)
});

const mapDispatchToProps = {
    loadCategory,
    loadProductsForCategory: loadProductsAction.create,
    addProductToBasket: addItemToBasketAction.create
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);