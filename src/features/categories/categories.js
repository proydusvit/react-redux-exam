import React from 'react';
import CategoryList from './categories-list';
import { connect } from 'react-redux';
import { loadCategories } from './redux/actions/categories-action-creators';
import Container from 'react-bootstrap/Container';
import { selectCategoriesListItems, selectCategoriesListIsLoading } from './redux/selectors/categories-selectors';
import Spinner from '../../components/spinner/spinner';

class CategoriesComponent extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadCategories());
    }

    render() {
        const list = this.props.isLoading
            ? null :
            (<CategoryList list={this.props.categories}></CategoryList>)

        return (
            <Container className="mt-2">
                <Spinner isLoading={this.props.isLoading} />
                {list}
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: selectCategoriesListItems(state),
    isLoading: selectCategoriesListIsLoading(state)
})

export default connect(
    mapStateToProps
)(CategoriesComponent);