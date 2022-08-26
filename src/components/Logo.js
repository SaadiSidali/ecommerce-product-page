import React from 'react';

const Logo = ({ isNarrowSize }) => (
    <>
        <a
            href='#'
            style={{
                fontWeight: 'bold',
                fontSize: '32px',
                margin: isNarrowSize ? '0px' : '30px',
                color: 'var(--black)',
            }}
        >
            sneakers
        </a>
    </>
);

export default Logo;
