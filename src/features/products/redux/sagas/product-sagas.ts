import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as client from '../../../../client/fake-client';
import * as actions from '../actions/products-actions';
import { showAlertAction } from '../../../../components/alert/redux/alert-actions';
import { push } from "connected-react-router";
import routes from '../../../categories/routes/routes';
import { AnyAction } from 'redux';

function* createProductSaga() {
    yield takeLatest(actions.createProductAction.type, createProduct);
}

export function* createProduct(action: AnyAction) {
    try {
        yield call(client.post, 'products', action.payload);

        yield all([
            put(actions.createProductSuccessAction.create(action.payload)),
            put(push(routes.details(action.payload.categoryId)))
        ]);
    } catch (e) {
        yield put(showAlertAction.create({ style: 'danger', message: 'error!' }));
    }
}

function* loadProductsSaga() {
    yield takeLatest(actions.loadProductsAction.type, loadProducts);
}

export function* loadProducts(action: AnyAction) {
    try {
        const products = yield call(client.get, `categories/${action.payload.categoryId}/products`);

        yield put(actions.loadProductsSuccessAction.create(products));
        
    } catch (e) {
        yield put(showAlertAction.create({ style: 'danger', message: 'error!' }));
    }
}

function* loadProductsByIdSaga() {
    yield takeLatest(actions.loadProductsByIdAction.type, loadProductsById);
}

export function* loadProductsById(action: AnyAction) {
    try {
        const products = yield call(client.get, `products`, action.payload);

        yield put(actions.loadProductsByIdSuccessAction.create(products));
        
    } catch (e) {
        console.log(e);
        yield put(showAlertAction.create({ style: 'danger', message: 'error!' }));
    }
}

export default function* rootSaga() {
    yield all([
        createProductSaga(),
        loadProductsSaga(),
        loadProductsByIdSaga()
    ])
}