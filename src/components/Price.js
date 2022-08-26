import React from 'react';
import Tag from './Tag';

const Price = ({ isNarrowScreen }) => (
    <div style={{
        display: isNarrowScreen ? 'flex' : '',
        alignItems: 'center',
        justifyContent: 'space-between'

    }}>
        <div
            style={{
                marginTop: '20px',
                display: 'flex',
            }}
        >
            <h2
                style={{
                    fontSize: '22px',
                    color: 'var(--very-dark-blue)',
                    marginRight: '10px'
                }}
            >
                $125.00
            </h2>
            <Tag>50%</Tag>

        </div>
        <p style={{
            textDecoration: 'line-through',
            color: 'var(--grayish--blue )',
            fontSize: '14px',
            fontWeight: 'bold',
            margin: 'auto 0px'
        }}>
            $250.00
        </p>
    </div>
);

export default Price;
