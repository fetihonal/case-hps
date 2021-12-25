import React from 'react';
import cn from 'classnames';

import './index.scss'

const Filter = (props) => {
    const { title, onClick, data, lengthData, active } = props;

    const handleDataLength = (lengthData, i) => {
        let length = 0;
        lengthData.map((f) => { f.value === i.value ? length = f.length : '0' })
        return `(${length})`
    }
    return (
        <div className="filter-box">
            <h2>{title}</h2>
            {data && <ul className="filter-list">
                {data?.map((i, key) => <li className={cn(active && active?.filter((a) => a.value === i.value).length > 0 && 'active')} key={key} onClick={() => onClick(i)}>{i.value} {lengthData && handleDataLength(lengthData, i)}</li>)}
            </ul>}
        </div>

    );
};
export default Filter;