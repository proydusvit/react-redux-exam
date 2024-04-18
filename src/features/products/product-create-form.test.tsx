import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate, act } from 'react-dom/test-utils';
import ProductCreateForm from './product-create-form';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('ProductCreateForm', () => {

    it('can submit valid form and calls onSave', () => {
        const props = {
            onSave: jest.fn()
        };

        act(() => {
            ReactDOM.render(<ProductCreateForm {...props} />, container);
        });

        const nameInput = container.querySelector('#name');
        const descriptionInput = container.querySelector('#description');

        nameInput.value = 'Name';
        Simulate.change(nameInput);

        descriptionInput.value = 'Description';
        Simulate.change(descriptionInput);

        const submitButton = container.querySelector('button[type=submit]');

        act(() => {
            Simulate.click(submitButton);
        });

        expect(props.onSave).toHaveBeenCalledTimes(1);
    })

    describe('does not allow submit if form invalid', () => {
        it('is invalid if no name given', () => {
            const props = {
                onSave: jest.fn()
            };

            act(() => {
                ReactDOM.render(<ProductCreateForm {...props} />, container);
            });

            const submitButton = container.querySelector('button[type=submit]');

            act(() => {
                Simulate.click(submitButton);
            });

            const nameInput = container.querySelector('#name');
            const descriptionInput = container.querySelector('#description');

            nameInput.value = '';
            Simulate.change(nameInput);

            descriptionInput.value = 'Description';
            Simulate.change(descriptionInput);

            expect(nameInput.className).toContain('is-invalid');

            expect(props.onSave).toHaveBeenCalledTimes(0);
        })

        it('is invalid if no description given', () => {
            const props = {
                onSave: jest.fn()
            };

            act(() => {
                ReactDOM.render(<ProductCreateForm {...props} />, container);
            });

            const submitButton = container.querySelector('button[type=submit]');

            act(() => {
                Simulate.click(submitButton);
            });

            const nameInput = container.querySelector('#name');
            const descriptionInput = container.querySelector('#description');

            nameInput.value = 'Name';
            Simulate.change(nameInput);

            descriptionInput.value = '';
            Simulate.change(descriptionInput);

            expect(descriptionInput.className).toContain('is-invalid');

            expect(props.onSave).toHaveBeenCalledTimes(0);
        })
    })
});

