import React from 'react';

const Pages = ({ page, setPage }) => {
    const onChangePage = (id) => {

        setPage(id);
    }
    return (
        <div className="pages">
            <span className={page == 1 ? "disable" : ""} onClick={() => onChangePage(page - 1)}>◀</span>
            {[...Array(10)].map((item, id) => (
                <span className={page == id + 1 ? "page-numbers selected" : "page-numbers"} onClick={() => onChangePage(id + 1)}>{id + 1}</span>
            ))}
            <span className={page == 10 ? "disable" : ""} onClick={() => onChangePage(page + 1)}>▶</span>
        </div>
    )
};

export default Pages;