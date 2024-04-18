import React from 'react';
import Form from './category-edit-form';
import { loadCategory, editCategory } from './redux/actions/categories-action-creators';
import { selectCategoryWithId } from './redux/selectors/categories-selectors';
import { connect } from 'react-redux';

class CategoryEditComponent extends React.Component {

    componentDidMount() {
        this.props.loadCategory(this.props.match.params.categoryId);
    }

    handleSave(category) {
        this.props.editCategory(category);
    }

    render() {
        if (this.props.category == null) {
            return null;
        }

        return (
            <Form category={this.props.category} onSave={(category, e) => this.handleSave(category, e)}></Form>
        )
    }

}

const mapStateToProps = (state, ownProps) => ({
    category: selectCategoryWithId(ownProps.match.params.categoryId)(state)
})

const mapDispatchToProps = {
    loadCategory,
    editCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEditComponent);