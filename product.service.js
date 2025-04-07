import axios from 'axios';

export const getProducts = async (callback) => {
    try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res);
        if (typeof callback === 'function') {
            callback(res.data);
        } else {
            console.warn("Callback is not a function");
        }
    } catch (err) {
        console.error("Error fetching products:", err.message);
    }
};

export const getDetailProduct = async (id, callback) => {
    try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log(res);
        if (typeof callback === 'function') {
            callback(res.data);
        } else {
            console.warn("Callback is not a function");
        }
    } catch (err) {
        console.error(`Error fetching product with ID ${id}:`, err.message);
    }
};


