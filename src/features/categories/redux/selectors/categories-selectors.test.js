import * as sut from './categories-selectors';

describe('categories selectors', () => {

    describe('selectCategoriesListItems', () => {
        it('should return items', () => {
            expect(sut.selectCategoriesListItems({
                categories: {
                    list: {
                        items: [{ a: 1 }]
                    }
                }
            })
            ).toEqual([{ a: 1 }])
        })
    });

    describe('selectCategoryWithId', () => {

        it('should return null when items empty', () => {
            expect(sut.selectCategoryWithId(1)({
                categories: {
                    list: {
                        items: []
                    }
                }
            })
            ).toEqual(null)
        })

        it('should return category when match found', () => {
            expect(sut.selectCategoryWithId(1)({
                categories: {
                    list: {
                        items: [{ id: 1 }]
                    }
                }
            })
            ).toEqual({ id: 1 })
        })

        it('should return null when no match', () => {
            expect(sut.selectCategoryWithId(1)({
                categories: {
                    list: {
                        items: [{ id: 2 }]
                    }
                }
            })
            ).toEqual(null)
        })
    });

    describe('selectCategoriesListIsLoading', () => {
        it('should return isLoading', () => {
            expect(sut.selectCategoriesListIsLoading({
                categories: {
                    list: {
                        isLoading: true
                    }
                }
            })
            ).toEqual(true)
        })
    });
});