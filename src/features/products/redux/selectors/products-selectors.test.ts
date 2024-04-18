import * as sut from './products-selectors';
import { SandboxState } from '../../../../redux/state';

const createProductWithId = (id: number) => ({ id, categoryId: 1, name: '', description: '' })

describe('products selectors', () => {

    describe('selectProductsListItems', () => {
        it('should return items', () => {
            expect(sut.selectProductsListItems({
                products: {
                    list: {
                        isLoading: false,
                        items: [createProductWithId(1)]
                    }
                }
            } as SandboxState)
            ).toEqual([createProductWithId(1)])
        })
    });

    describe('selectProductsListIsLoading', () => {
        it('should return isLoading', () => {
            expect(sut.selectProductsListIsLoading({
                products: {
                    list: {
                        isLoading: true,
                        items: []
                    }
                }
            } as SandboxState)
            ).toEqual(true)
        })
    });

});