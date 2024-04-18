import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connectForm, createFormObject } from '../../forms';
import { required } from '../../forms/validation';
import { TextBox } from '../../forms/components';

interface Props {
    form: any
    submitForm: any
}

const ProductCreateFormComponent = (props: Props) => (
    <Form>
        <TextBox control={props.form.controls.name} />
        <TextBox control={props.form.controls.description} />

        <Button variant="primary" type="submit" className="mt-2 float-right" onClick={props.submitForm}>
            Save product
        </Button>
    </Form>
)

export default connectForm((props: { categoryId: any; }) =>
    createFormObject({
        name: '',
        description: '',
        categoryId: props.categoryId
    })({
        name: {
            rules: [
                required
            ],
        },
        description: {
            rules: [
                required
            ]
        }
    })
)(ProductCreateFormComponent)