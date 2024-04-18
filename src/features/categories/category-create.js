import React from 'react';
import Form from './category-edit-form';
import { loadCategory, createCategory } from './redux/actions/categories-action-creators';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';

class CategoryCreateComponent extends React.Component {

    handleSave(category) {
        this.props.createCategory(category);
    }

    render() {
        const initialFormValue = {
            name: '',
            description: '',
            colour: '#000000'
        };

        return (
            <Container className="mt-2">
                <Form category={initialFormValue} onSave={(category, e) => this.handleSave(category, e)}></Form>
            </Container>
        )
    }

}

const mapDispatchToProps = {
    loadCategory,
    createCategory
};

export default connect(null, mapDispatchToProps)(CategoryCreateComponent);