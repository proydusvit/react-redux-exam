import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Product } from './redux/types/products-types';

export default class ProductsListItemComponent extends React.Component<{ product: Product, onAddClicked: (product: Product) => void }> {
    render() {
        return (
            <Alert variant="dark">
                <Row>
                    <Col xs={11}>
                        <Row>
                            <Col xs={12}>
                                <Alert.Heading>{this.props.product.name}</Alert.Heading>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                {this.props.product.description}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <Button variant="light" onClick={() => this.props.onAddClicked(this.props.product)}>+</Button>
                    </Col>
                </Row>
            </Alert>
        );
    }
}