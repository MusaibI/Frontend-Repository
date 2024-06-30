import React, { useState, useEffect } from "react";

const AddCart = ({ state, dispatch }) => {
    const [total, setTotal] = useState(0);

    const chnageInQty = (id, qty) => {
        dispatch({ type: "CHANGE_IN_QTY", payload: { id, qty } });
    };

    useEffect(() => {
        setTotal(state.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
    }, [state.cart])

    return (
        <div
            style={{
                width: '30%',
                display: 'flex',
                flexDirection: "column",
                margin: 10,
                backgroundColor: 'lightGrey',
                padding: 10,
            }}
        >
            <b style={{ alignSelf: 'center', fontSize: 20 }}>Cart</b>
            <b style={{ alignSelf: 'center', fontSize: 12 }}>Subtotal: ${total}</b>
            {state.cart.map(prod => (
                <div
                    key={prod.id}
                    style={{
                        padding: 10,
                        border: '1px solid black',
                        margin: 5,
                    }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 12,
                        fontWeight: 450,
                    }}>
                        <span>{prod.title}</span>
                        <span>${prod.price}</span>
                    </div>
                    <button onClick={() => chnageInQty(prod.id, prod.qty - 1)}>-</button>
                    <span>{prod.qty}</span>
                    <button onClick={() => chnageInQty(prod.id, prod.qty + 1)}>+</button>
                </div>
            ))}
        </div >
    )
};

export default AddCart;