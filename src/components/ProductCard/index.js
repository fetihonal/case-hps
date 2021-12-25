import React from 'react';
import cn from 'classnames';
import currencyTextMask from '../../utils/currency';

import './index.scss'
import img from '../../assets/images/phone.png';

const ProductCard = (props) => {
    const { addToCart, deleteToCart, data, notBuy } = props;
    const { name, brand, color, price, discount, images } = data;
    return (
        <div className="product-card">
            <div className="product-card-image">
                <picture>
                    <img src={images} />
                </picture>
            </div>
            <div className="product-card-info" >
                <h2>{name}</h2>
                <span><strong>Marka: </strong> {brand}</span>
                <span><strong>Renk: </strong> {color}</span>
                <div className="product-card-price">
                    <span>{currencyTextMask(
                        parseFloat(price).toFixed(2).toString(),
                        2,
                        ',',
                        '.',
                        false,
                    ).maskedValue} TL</span>
                    <del>{currencyTextMask(
                        parseFloat(Number(price) + (Number(5 / 100) * Number(price))).toFixed(2).toString(),
                        2,
                        ',',
                        '.',
                        false,
                    ).maskedValue} TL <small>{5} %</small></del>
                </div>
                <div className="product-action">
                    {!notBuy ? <button className="addToCart" onClick={addToCart}>Sepete Ekle</button> : <button disabled className="passive" onClick={deleteToCart}>Bu ürünü sepete ekleyemezsiniz.</button>}
                </div>
            </div>

        </div>

    );
};
export default ProductCard;