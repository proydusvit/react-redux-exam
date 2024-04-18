import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connectForm, createFormObject } from '../../forms';
import { required } from '../../forms/validation';
import { TextBox, TextArea } from '../../forms/components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl'
import { SketchPicker } from 'react-color'

const CategoryEditFormComponent = ({ form, submitForm }) => (
    <Form>
        <TextBox control={form.controls.name} />
        <TextArea control={form.controls.description} />

        <Form.Group as={Row} controlId={form.controls.colour.id}>
            <Form.Label column sm="2">{form.controls.colour.displayName}</Form.Label>
            <Col>
                <SketchPicker color={form.controls.colour.value} onChange={({ hex }) => form.controls.colour.update(form.controls.colour.id, hex)}></SketchPicker>
            {
                form.controls.colour.errors.map((error, index) => (
                    <FormControl.Feedback key={index} type="invalid">
                        {error}
                    </FormControl.Feedback>
                ))
            }
            </Col>
        </Form.Group>

    <Button variant="primary" type="submit" className="mt-2 float-right" onClick={submitForm}>
        Save category
        </Button>
    </Form >
)

export default connectForm((props) =>
    createFormObject(props.category)({
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
)(CategoryEditFormComponent)

