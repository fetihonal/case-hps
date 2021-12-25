import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import './index.scss'

const Pagination = (props) => {
    const { onChange, page, data, dataLimit = 12, pageLimit = 3 } = props;
    const [pages] = useState(Math.round(data.length / dataLimit));


    const goToNextPage = () => {
        onChange((page) => page + 1);
    }

    const goToPreviousPage = () => {
        onChange((page) => page - 1);
    }
    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        onChange(pageNumber);
    }
    const getPaginationGroup = () => {
        let start = Math.floor((page - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
    return (
        <div className="pagination">

            <button
                onClick={goToPreviousPage}
                className={cn('prev', page === 1 && 'disabled')}
            >
                {'<'}
            </button>


            {getPaginationGroup().map((item, index) => (
                <button
                    key={index}
                    onClick={changePage}
                    className={cn('pagination-item', page === item ? 'active' : null)}
                >
                    <span>{item}</span>
                </button>
            ))}


            <button
                onClick={goToNextPage}
                className={cn('next', page === pages && 'disabled')}
            >
                {'>'}
            </button>
        </div>

    );
};
export default Pagination;