import React from "react";

const Tag = ({ children }) => (<>
    <div
        style={{
            color: 'var(--orange)',
            backgroundColor: 'var(--pale-orange)',
            padding: '0px 7px',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            placeItems: 'center'

        }}
    >

        {children}
    </div>
</>);

export default Tag;