import React from "react";

const Products = ({ state, dispatch }) => {

    const handleAddToCart = (item) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id: item.id,
                qty: 1,
                title: item.title,
                price: item.price
            }
        })
    };

    const handleRemoveFromCart = (id) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id
        })
    }


    return (
        <div
            style={{
                width: '70%',
                display: 'flex',
                flexWrap: "wrap",
                justifyContent: 'space-evenly'
            }}
        >
            {state.products.map(item => (
                <div key={item.id} style={{
                    border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '30%',
                    padding: 10,
                    marginTop: 10,
                    gap: 10,
                }}>
                    <img src={item.thumbnail} style={{ height: 150, objectFit: 'cover' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>{item.title}</span>
                        <b>$ {item.price}</b>
                    </div>
                    {state.cart.some(p => p.id === item.id) ?
                        <button style={{
                            backgroundColor: 'red',
                            border: 0,
                            borderRadius: 5,
                            padding: 5,
                            color: 'white'
                        }}
                            onClick={() => handleRemoveFromCart(item.id)}
                        >
                            Remove from cart
                        </button> :
                        <button style={{
                            backgroundColor: 'green',
                            border: 0,
                            borderRadius: 5,
                            padding: 5,
                            color: 'white'
                        }}
                            onClick={() => handleAddToCart(item)}
                        >
                            Add to Cart
                        </button>
                    }
                </div>
            ))}
        </div>
    )
};

export default Products;