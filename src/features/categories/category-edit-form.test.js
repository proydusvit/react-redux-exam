import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate, act } from 'react-dom/test-utils';
import CategoryEditForm from './category-edit-form';

let container;

beforeEach(() => {
    global.window = { location: { pathname: null } };
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('CategoryEditForm', () => {

    it('can submit valid form and calls onSave', () => {
        const props = {
            category: {
                name: 'Name',
                description: 'Description',
                colour: ''
            },
            onSave: jest.fn()
        };

        act(() => {
            ReactDOM.render(<CategoryEditForm {...props} />, container);
        });

        const nameInput = container.querySelector('#name');
        const descriptionInput = container.querySelector('#description');

        expect(nameInput.value).toEqual('Name');
        expect(descriptionInput.value).toEqual('Description');

        const submitButton = container.querySelector('button[type=submit]');

        act(() => {
            Simulate.click(submitButton);
        });

        expect(props.onSave).toHaveBeenCalledTimes(1)
    })

    describe('does not allow submit if form invalid', () => {
        it('is invalid if no name given', () => {
            const props = {
                category: {
                    name: '',
                    description: 'Description',
                    colour: ''
                },
                onSave: jest.fn()
            };

            act(() => {
                ReactDOM.render(<CategoryEditForm {...props} />, container);
            });

            const submitButton = container.querySelector('button[type=submit]');

            act(() => {
                Simulate.click(submitButton);
            });

            const input = container.querySelector('#name');

            expect(input.className).toContain('is-invalid');

            expect(props.onSave).toHaveBeenCalledTimes(0)
        })

        it('is invalid if no description given', () => {
            const props = {
                category: {
                    name: 'Name',
                    description: '',
                    colour: ''
                },
                onSave: jest.fn()
            };

            act(() => {
                ReactDOM.render(<CategoryEditForm {...props} />, container);
            });

            const submitButton = container.querySelector('button[type=submit]');

            act(() => {
                Simulate.click(submitButton);
            });

            const descriptionInput = container.querySelector('#description');

            expect(descriptionInput.className).toContain('is-invalid');

            expect(props.onSave).toHaveBeenCalledTimes(0)
        })
    })
});

