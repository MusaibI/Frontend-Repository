import React, { useReducer, useEffect } from "react";
import axios from 'axios'
import { cartReducer } from "../../reducers/cartReducers";
import Products from "./products";
import AddCart from "./addCart";
const Cart = () => {

    const [state, dispatch] = useReducer(cartReducer, {
        products: [],
        cart: []
    });

    const fetchProduct = async () => {
        const { data } = await axios.get("https://dummyjson.com/products");
        dispatch({ type: "ADD_PRODUCTS", payload: data.products })
    }
    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            <Products state={state} dispatch={dispatch} />
            <AddCart state={state} dispatch={dispatch} />
        </div>
    )
}

export default Cart;