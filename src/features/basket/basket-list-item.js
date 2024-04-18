import React from 'react';
import { Alert, Col, Row, Button, Form } from 'react-bootstrap';

export default (props) => (
    <Alert variant="dark">
        <Row>
            <Col xs={7}>
                <h4>{props.item.product.name}</h4>
            </Col>
            <Col xs={2}>
                <Form.Label className="float-right">Quantity</Form.Label>
            </Col>
            <Col xs={2}>
                <Form.Control as="select" value={props.item.quantity} onChange={(e) => props.onQuantityChanged(props.item, parseInt(e.target.value))}>
                    {[...Array(10).keys()].map(n => <option key={n + 1}>{n + 1}</option>)}
                </Form.Control>
            </Col>
            <Col xs={1}>
                <Button variant="danger float-right" size="sm" onClick={() => props.onRemoveClicked(props.item)}>X</Button>
            </Col>
        </Row>
    </Alert>
)