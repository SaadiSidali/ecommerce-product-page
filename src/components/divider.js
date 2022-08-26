import React from 'react';

const Divider = ({ full }) => {
    const margin = full ? '0px' : '0px 20px';
    return (
        <>
            <div
                style={{
                    width: 'auto',
                    height: '1px',
                    backgroundColor: 'var(--grayish--blue)',
                    margin,
                    borderRadius: '50% vbaq11',
                }}
            ></div>
        </>
    )
};

export default Divider;
