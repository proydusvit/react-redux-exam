import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import BasketDisplay from './basket-icon-display';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('BasketDisplay', () => {
    it('should display 0 if count from props is not a number', () => {
        const props = {
            count: 'not a number'
        };

        act(() => {
            ReactDOM.render(<BasketDisplay {...props} />, container);
        });

        const countDiv = container.querySelector('.basket-count');

        expect(countDiv.innerHTML).toEqual('0');
    })

    it('should display count from props', () => {
        const props = {
            count: 1
        };

        act(() => {
            ReactDOM.render(<BasketDisplay {...props} />, container);
        });

        const countDiv = container.querySelector('.basket-count');

        expect(countDiv.innerHTML).toEqual('1');
    })
})