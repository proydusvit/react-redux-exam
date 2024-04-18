import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import BasketListDisplay from './basket-list-display';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('BasketListDisplay', () => {
    it('should display info alert when no items in basket', () => {

        const props = {
            items: []
        };

        act(() => {
            ReactDOM.render(<BasketListDisplay {...props} />, container);
        });

        expect(container.querySelector('.alert-info')).toBeInTheDocument();
    })

    it('should display items and no info alert when one item in basket', () => {

        const props = {
            items: [{ product: { id: 1 }, quantity: 1 }]
        };

        act(() => {
            ReactDOM.render(<BasketListDisplay {...props} />, container);
        });

        expect(container.querySelector('.alert-dark')).toBeInTheDocument();
        expect(container.querySelector('.alert-info')).toBeNull()
    })

    it('should display items and no info alert when multiple items in basket', () => {

        const props = {
            items: [
                { product: { id: 1, name: "1" }, quantity: 1 },
                { product: { id: 2, name: "2" }, quantity: 1 },
                { product: { id: 3, name: "3" }, quantity: 1 }
            ]
        };

        const wrapper = mount(<BasketListDisplay {...props} />);

        expect(wrapper.find('.alert-dark')).toHaveLength(3);
        expect(wrapper.find('.alert-info')).toHaveLength(0);
    })

    it('should trigger remove event when child remove event occurs', () => {
        const item1 = {
            product: { id: 1 },
            quantity: 1
        };
        const item2 = {
            product: { id: 2 },
            quantity: 1
        };

        const props = {
            items: [item1, item2],
            onItemRemoved: jest.fn()
        };

        const wrapper = shallow(<BasketListDisplay {...props} />);

        // uses default because that's what React renders the items as
        const listItemComponent = wrapper.find('_default').at(1);
        listItemComponent.prop('onRemoveClicked')(item2);

        expect(props.onItemRemoved).toHaveBeenCalledTimes(1);
        expect(props.onItemRemoved).toHaveBeenCalledWith(item2);
    })
})