import React from 'react';
import Form from './product-create-form';
import { connect } from 'react-redux';
import { createProductAction } from './redux/actions/products-actions';
import { Product } from './redux/types/products-types';

class ProductCreateComponent extends React.Component<{ createProduct: (p: Product) => void, categoryId: number }> {

    handleSave(product: Product, e: Event) {
        e.preventDefault();
        this.props.createProduct(product);
    }

    render() {

        if (this.props.categoryId == null) {
            return null;
        }

        return (
            <Form categoryId={this.props.categoryId} onSave={(product: Product, e: Event) => this.handleSave(product, e)}></Form>
        )
    }

}

const mapStateToProps = (_: any, { match: { params } }) => ({
    categoryId: params.categoryId
})

const mapDispatchToProps = {
    createProduct: createProductAction.create
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductCreateComponent);