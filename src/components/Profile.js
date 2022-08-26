import React, { useState } from 'react';

const Profile = ({ img }) => {
    const [hover, setHover] = useState(false);
    const hoverStyle = {
        border: '2px solid var(--orange)',
    };

    let imageStyle = {
        borderRadius: '50%',
        backgroundImage: `url("${img}")`,
        height: '38px',
        width: '38px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box',
    };
    if (hover) imageStyle = { ...imageStyle, ...hoverStyle };
    return (
        <>
            <a
                href='#'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={imageStyle}
            ></a>
        </>
    );
};

export default Profile;
