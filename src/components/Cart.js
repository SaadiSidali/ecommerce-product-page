import React, { useState } from 'react';
import Divider from './divider';
import ListItem from './ListItem';
import Button from './Button';

const Cart = ({ myCart, setCart, isNarrowScreen }) => {
    const [showCart, toggleCart] = useState(false);
    return (
        <div
            style={{
                position: isNarrowScreen ? '' : 'relative',
                width: '22px',
                height: '20px',
            }}
        >
            <div
                style={{
                    position: 'relative',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    toggleCart(!showCart);
                }}
            >
                <svg
                    width='22'
                    height='20'
                    xmlns='http://www.w3.org/2000/svg'
                    style={{
                        cursor: 'pointer',
                        position: 'absolute',
                        left: '0',
                        top: '0',
                    }}
                >
                    <path
                        d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
                        fill='#69707D'
                        fillRule='nonzero'
                    />
                </svg>
                <Chip myCart={myCart}></Chip>
            </div>

            {showCart ? (
                <div
                    style={{
                        boxShadow: 'rgb(136 136 136 / 29%) 0px 6px 18px 0px',
                        position: 'absolute',
                        width: isNarrowScreen ? '95vw' : '300px',
                        borderRadius: '12px',
                        left: '50%',
                        transform: 'translate(-50%, 0)',
                        top: isNarrowScreen ? '8vh' : '35px',
                        backgroundColor: 'white',
                        paddingBottom: '30px',
                        margin: isNarrowScreen ? 'auto' : '',
                        zIndex: 1,
                    }}
                >
                    <p
                        style={{
                            padding: '10px',
                            fontWeight: 'bold',
                        }}
                    >
                        Cart
                    </p>
                    <Divider full={true}></Divider>
                    <ListItem myCart={myCart} setCart={setCart}></ListItem>
                    {myCart ? (
                        <div style={{ padding: '10px' }}>
                            {' '}
                            <Button block noShadow bordered>
                                <p
                                    style={{
                                        fontSize: '12px',
                                    }}
                                >
                                    Checkout
                                </p>
                            </Button>{' '}
                        </div>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
};

export default Cart;

function Chip({ myCart }) {
    console.log(myCart);
    let Chip = <div></div>;
    if (myCart && myCart.qty > 0) {
        Chip = (
            <div
                style={{
                    backgroundColor: 'var(--orange)',
                    color: 'white',
                    borderRadius: '40%',
                    width: '18px',
                    height: '12px',
                    textAlign: 'center',
                    fontSize: '8px',
                    position: 'absolute',
                    top: '-5px',
                    left: '12px',
                    fontWeight: 'bold',
                    padding: '0px 0px',
                }}
            >
                {myCart.qty}
            </div>
        );
    }
    return Chip;
}
