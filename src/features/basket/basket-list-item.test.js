import React from 'react';
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import BasketListItem from './basket-list-item';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('BasketListItem', () => {
    it('should trigger remove event when button clicked', () => {
        
        const item = {
            product: { id: 1 },
            quantity: 1
        };

        const props = {
            item: item,
            onRemoveClicked: jest.fn()
        };

        act(() => {
            ReactDOM.render(<BasketListItem {...props} />, container);
        });

        const removeButton = container.querySelector('button');

        act(() => {
            Simulate.click(removeButton);
        });

        expect(props.onRemoveClicked).toHaveBeenCalledTimes(1);
        expect(props.onRemoveClicked).toHaveBeenCalledWith(item);
    })

    it('should trigger change quantity event when dropdown value changed', () => {
        
        const item = {
            product: { id: 1 },
            quantity: 2
        };

        const props = {
            item: item,
            onQuantityChanged: jest.fn()
        };

        act(() => {
            ReactDOM.render(<BasketListItem {...props} />, container);
        });

        const dropdown = container.querySelector('select');

        const newQuantity = 3;
        act(() => {
            Simulate.change(dropdown, { target: { value: newQuantity } });
        });

        expect(props.onQuantityChanged).toHaveBeenCalledTimes(1);
        expect(props.onQuantityChanged).toHaveBeenCalledWith(item, newQuantity);
    })
});