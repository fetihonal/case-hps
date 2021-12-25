import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import onClickOutside from "react-onclickoutside";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';


const Order = () => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    const [modal, setModal] = useState(false);
    const [deleteItem, setDeleteItem] = useState({});
    const toggle = () => setActive(!active);

    Order.handleClickOutside = () => {
        setActive(false);
    };

    const cart = useSelector(content => content.cart);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    const deleteToCart = () => {
        setTimeout(function () {
            dispatch({ type: 'DELETE_TO_CART', count: cart.count - 1, data: deleteItem })
            setModal(false)
        }, 100);
    }

    return (
        <>

            <div className={cn("order-box", active && 'active')} >
                {cart.count > 0 && <span className="order-count">{cart.count}</span>}
                <span className="text" onClick={toggle}>Sepetim</span>
                <div className="order-detail">
                    {cart.count > 0 ? cart.data.sort((a, b) => a.lastUpdated - b.lastUpdated).map((i, key) => <div key={key} className="order-item">
                        <div className="order-img">
                            <img src={i.images || "http://www.vizyonferre.com/images/noproduct.png"} />
                        </div>
                        <div className="order-info">
                            <span>{i.name}</span>
                            <button onClick={(() => { setDeleteItem(i); setModal(true); })}>Kaldır</button>
                        </div>
                    </div>) : 'Sepetinizde ürün bulunmamaktadır.'}

                </div>
            </div>
            <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>Ürünü silmek istediğinize emin misiniz?</ModalHeader>
                <ModalBody>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall....
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => deleteToCart()}>Evet</Button>{' '}
                    <Button color="danger" toggle={() => setModal(!modal)}>Hayır</Button>
                </ModalFooter>
            </Modal>
        </>

    );
};
const clickOutsideConfig = {
    handleClickOutside: () => Order.handleClickOutside,
};

export default onClickOutside(Order, clickOutsideConfig);
