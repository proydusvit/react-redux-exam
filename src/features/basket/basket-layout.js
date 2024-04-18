import React from 'react';
import { Container } from 'react-bootstrap';
import BasicErrorBoundary from '../../components/errors/basic-error-boundary';

export default (props) => (
    <Container className="mt-2">
        <BasicErrorBoundary>
            { props.children }
        </BasicErrorBoundary>
    </Container>
)