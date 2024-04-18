import React from 'react';
import routes from './routes/routes';
import { Link } from 'react-router-dom';

export default class CategorySquareComponent extends React.Component {
    render() {
        const category = this.props.category;

        return (
            <Link to={routes.details(category.id)} className="category-container">
                <div className="category-title category-square-inner" style={{ color: category.colour }}>
                    <span>{category.name}</span>
                </div>
                <div className="category-description category-square-inner" style={{ color: category.colour }}>
                    <span>{category.description}</span>
                </div>
            </Link>
        )
    }
}