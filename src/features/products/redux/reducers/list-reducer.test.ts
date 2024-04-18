import sut from './list-reducer';
import * as actions from '../actions/products-actions';

const createProductWithId = (id: number) => ({ id, categoryId: 1, name: '', description: '' })

describe('products reducer', () => {

    it('should return the initial state', () => {
        expect(sut(undefined, { type: '' })).toEqual({
            items: [],
            isLoading: false
        })
    })

    describe(actions.createProductAction.type, () => {
        it('should set loading flag only', () => {
            expect(
                sut({
                    isLoading: false,
                    items: [createProductWithId(1)]
                },
                    actions.createProductAction.create(createProductWithId(2)))
            ).toEqual({
                isLoading: true,
                items: [createProductWithId(1)]
            })
        })
    })

    describe(actions.createProductSuccessAction.type, () => {
        it('should set loading flag and add product to list', () => {
            expect(
                sut({
                    isLoading: true,
                    items: []
                },
                    actions.createProductSuccessAction.create(createProductWithId(1)))
            ).toEqual({
                isLoading: false,
                items: [createProductWithId(1)]
            })
        })
    })

    describe(actions.loadProductsAction.type, () => {
        it('should set loading flag and clear list', () => {
            expect(
                sut({
                    isLoading: false,
                    items: [createProductWithId(1)]
                },
                    actions.loadProductsAction.create({ categoryId: 1 }))
            ).toEqual({
                isLoading: true,
                items: []
            })
        })
    })

    describe(actions.loadProductsSuccessAction.type, () => {
        it('should set loading flag and set list', () => {
            expect(
                sut({
                    isLoading: true,
                    items: []
                },
                    actions.loadProductsSuccessAction.create([createProductWithId(1)]))
            ).toEqual({
                isLoading: false,
                items: [createProductWithId(1)]
            })
        })
    });
});