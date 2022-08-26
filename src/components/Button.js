import React from 'react';
import './Button.css';

const button = ({ block, children, onClick, noShadow, bordered }) => {
    let btnStyle = {
        display: block ? 'block' : 'inline-block',
        boxShadow: noShadow ? 'none' : '',
        width: block ? '100%' : '',
        borderRadius: bordered ? '15px' : '',
    };
    return (
        <>
            <button
                onClick={onClick}
                className={'btn'}
                style={{
                    display: block ? 'block' : 'inline-block',
                    margin: 'auto',
                    ...btnStyle,
                }}
            >
                {children}
            </button>
        </>
    );
};

export default button;
