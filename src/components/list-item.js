import React from 'react';
import cn from 'classnames';


const ListItem = ({ image,name,companyName,job, className }) => {
    return (
        <div className={cn('listItemCard', className)}>
            <img src={image} alt={name} />
            <div>
                <h2>{name}</h2>
                <span className="companyName">{companyName}</span>
                <span>{job}</span>
            </div>
        </div>
    );
};
export default  ListItem;