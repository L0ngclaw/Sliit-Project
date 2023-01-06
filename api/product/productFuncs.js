import axios from "axios";
import {toast} from "react-toastify";

export const addProductHandler = async (product) => {
    await axios.post('/api/product/addProduct', {product: product}).then(res => {

        res.data.success ? toast.success('Product added successfully') : toast.error('Product add Error');

    }).catch(err => {
        toast.error(err.response.data.message);
    })
}

export const fetchProducts = async () => {
    return new Promise((resolve, reject) => {
        axios.get('/api/product/fetchProducts').then(res => {
            resolve(res.data.products);
        }).catch(err => {
            reject(err);
        })
    })
}

export const deleteProduct = async (productId) => {
    return new Promise((resolve, reject) => {
        axios.delete('/api/product/deleteProduct', {params: {productId: productId}}).then(res => {
            resolve(res.data.message);
        }).catch(err => {
            reject(err);
        })
    })

}

export const getProductDetails = async (productId) => {
    console.log(productId);

    return new Promise((resolve, reject) => {
        axios.get('/api/product/fetch-single-Product', {params: {productId: productId}}).then(res => {
            resolve(res.data.product);
        }).catch(err => {
            reject(err);
        })
    })
}

export const updateProduct = async (id, product) => {
    return new Promise((resolve, reject) => {
        axios.put('/api/product/updateProduct', {productId: id, product: product}).then(res => {
            resolve(res.data.message);
        }).catch(err => {
            reject(err);
        })
    })
}
