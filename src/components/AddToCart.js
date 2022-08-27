import React, { useState, useContext } from 'react';

import { CartContext } from '../Context/MyContext'

import Button from './Button';

const AddToCart = ({ isNarrowScreen }) => {

    const { setCart } = useContext(CartContext);

    const buttonStyle = {
        border: 'none',
        backgroundColor: 'transparent',
        color: 'var(--orange)',
        fontWeight: 'bold',
        fontSize: '22px',
        padding: '0px 20px',
        cursor: 'pointer',
    };

    const [count, setCount] = useState(0);

    return (
        <>
            <div
                style={{
                    display: isNarrowScreen ? '' : 'flex',
                    margin: '20px 0',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'var(--light-grayish-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '12px',
                        marginRight: '10px',
                        placeContent: 'space-between',
                        width: isNarrowScreen ? '100%' : '170px',
                        marginBottom: isNarrowScreen ? '20px' : ''
                    }}
                >
                    <button
                        style={buttonStyle}
                        onClick={() => {
                            if (count > 0) setCount(count - 1);
                        }}
                    >
                        -
                    </button>
                    <p
                        style={{
                            fontWeight: 'bold',
                            margin: '0px 10px',
                            padding: '10px',
                        }}
                    >
                        {count}
                    </p>
                    <button
                        style={buttonStyle}
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        +
                    </button>
                </div>
                <Button

                    block={isNarrowScreen}
                    onClick={() => {
                        setCart({
                            qty: count,
                            price: 125,
                            total: count * 125,
                            title: 'Fall Limited Edition Sneakers',
                            img: '/images/image-product-1.jpg',
                        });
                    }}
                >
                    <svg
                        width='22'
                        height='20'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{
                            cursor: 'pointer',
                            marginRight: '10px',
                        }}
                    >
                        <path
                            d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
                            fill='white'
                        />
                    </svg>
                    Add to cart
                </Button>
            </div>
        </>
    );
};

export default AddToCart;
