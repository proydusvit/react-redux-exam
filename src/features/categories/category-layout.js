import React from 'react';
import CategoryRoutes from './routes/category';
import Navbar from './category-navbar';
import { connect } from 'react-redux';
import { selectCategoryWithId } from './redux/selectors/categories-selectors';
import { loadCategory } from './redux/actions/categories-action-creators';
import ErrorBoundary from '../../components/errors/basic-error-boundary'

class CategoryLayoutComponent extends React.Component {

    componentDidMount() {
        this.props.loadCategory(this.props.match.params.id);
    }

    render() {
        if (this.props.category == null) {
            return null;
        }

        return (
            <>
                <Navbar category={this.props.category}></Navbar>
                <ErrorBoundary>
                    <div className="container mt-2">
                        <CategoryRoutes category={this.props.category}></CategoryRoutes>
                    </div>
                </ErrorBoundary>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    category: selectCategoryWithId(ownProps.match.params.id)(state)
});

const mapDispatchToProps = {
    loadCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryLayoutComponent);