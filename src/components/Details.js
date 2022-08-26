import React from 'react';
import AddToCart from './AddToCart';
import Price from './Price';

const Details = ({ cart, setCart, isNarrowScreen }) => (
    <>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                margin: isNarrowScreen ? '20px' : '80px',
            }}
        >
            <p
                style={{
                    color: 'var(--orange)',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    marginBottom: '20px',
                }}
            >
                sneaker company
            </p>
            <h1
                style={{
                    fontSize: isNarrowScreen ? '30px' : '40px',
                    marginBottom: '20px',
                    lineHeight: isNarrowScreen ? '24pt' : '32pt',
                    color: 'var(--very-dark-blue)'
                }}
            >
                Fall Limited Edition Sneakers
            </h1>
            <p
                style={{
                    color: 'var(--dark-grayish-blue)'
                }}
            >
                These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they'll withstand everything the
                weather can offer.
            </p>
            <Price isNarrowScreen={isNarrowScreen}></Price>
            <AddToCart cart={cart} setCart={setCart} isNarrowScreen={isNarrowScreen}></AddToCart>
        </div>
    </>
);

export default Details;
