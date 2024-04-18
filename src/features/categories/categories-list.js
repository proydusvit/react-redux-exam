import React from 'react';
import CategorySquare from './categories-list-item';
import { Button } from 'react-bootstrap';
import routes from './routes/routes';
import { Link } from 'react-router-dom';
import permission from '../../security/permissions';
import PermissionContainer from '../../components/containers/permission-container';

class CategoriesListComponent extends React.Component {
    render() {
        return (
            <>
                <div>
                    {
                        this.props.list.map(element => (
                            <CategorySquare key={element.id} category={element}></CategorySquare>
                        ))
                    }
                </div>
                <PermissionContainer permission={permission.category.add}>
                    <Button as={Link} variant="primary" to={routes.create} className="mb-2 float-right">Add category</Button>
                </PermissionContainer>
            </>
        )
    }
}

export default CategoriesListComponent;