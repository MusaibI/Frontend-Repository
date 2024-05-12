import React, { useState, useEffect } from 'react';
import Pages from './Pages';

const Pagination = () => {

    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1);
    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/product?skip=${(page - 1) * 10}&limit=10`);
        const data = await response.json();
        console.log(data);
        if (data && data.products)
            setProducts(data.products);
    }

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <>
            <div className="products">
                {products.length > 0 &&
                    products.map(item => (
                        < div className="product-single" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <span>{item.title}</span>
                        </div>
                    ))}
            </div>
            <Pages page={page} setPage={setPage} />
        </>
    )
};

export default Pagination;