import React from 'react';

const Container = ({ children, isNarrowScreen, center, style }) => (
    <>
        <div
            style={{
                display: isNarrowScreen ? 'block' : 'flex',
                padding: isNarrowScreen ? '0px' : '20px',
                paddingBottom: '0px',
                // alignItems: 'center'
                justifyContent: center ? 'center' : '',
                ...style

            }}
        >
            {children}
        </div>
    </>
);

export default Container;
