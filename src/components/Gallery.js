import React, { useState, useContext } from 'react';

import { ModalContext, MobileContext } from '../Context/MyContext'

const Gallery = ({ images, modalMode }) => {

    const { setShowModal } = useContext(ModalContext);
    const { isNarrowScreen } = useContext(MobileContext);


    let [currentImage, setCurrentImage] = useState(images[0]);
    let carousel = images.map((link) => {
        return Image(link, setCurrentImage, currentImage === link);
    });

    const changeImage = (forward) => {
        const imgIndex = images.findIndex((el) => el === currentImage);
        let nextImgIndex = forward ? imgIndex + 1 : imgIndex - 1;
        if (nextImgIndex < 0) nextImgIndex = images.length - 1;
        else if (nextImgIndex >= images.length) nextImgIndex = 0;

        setCurrentImage(images[nextImgIndex]);
    };

    return (
        <div
            style={{
                userSelect: 'none',
                display: 'flex',
                flexDirection: 'column',
                position: isNarrowScreen || modalMode ? 'relative' : '',
                marginTop: modalMode ? '60px' : '0px'
            }}
        >
            {modalMode ? (
                <div
                    onClick={() => {
                        setShowModal(false);
                    }}
                    style={{
                        position: 'absolute',
                        right: '0',
                        top: '-10px',
                        cursor: 'pointer',
                        padding: '10px',
                        transform: 'translateX(-50%) ',
                    }}
                >
                    <svg width='14' height='15' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
                            fill='#ff7d1a'
                            fillRule='evenodd'
                        />
                    </svg>
                </div>
            ) : null}
            <img
                onClick={() => {
                    if (!isNarrowScreen) setShowModal(true);
                }}
                src={currentImage}
                style={{
                    height: isNarrowScreen ? '300px' : '',
                    width: isNarrowScreen ? '100%' : '400px',
                    borderRadius: isNarrowScreen ? '0' : '10px',
                    margin: isNarrowScreen ? '0px' : '20px',
                    objectFit: 'cover',
                }}
            ></img>
            {isNarrowScreen || modalMode ? (
                <>
                    <div
                        onClick={() => {
                            changeImage(false);
                        }}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '0',
                            padding: '10px',
                            height: '25px',
                            width: '25px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            margin: '0px 10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M11 1 3 9l8 8'
                                stroke='#1D2026'
                                strokeWidth='3'
                                fill='none'
                                fillRule='evenodd'
                            />
                        </svg>
                    </div>
                    <div
                        onClick={() => {
                            changeImage(true);
                        }}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '0',
                            padding: '10px',
                            height: '25px',
                            width: '25px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            margin: '0px 10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='m2 1 8 8-8 8'
                                stroke='#1D2026'
                                strokeWidth='3'
                                fill='none'
                                fillRule='evenodd'
                            />
                        </svg>
                    </div>
                </>
            ) : null}
            <div
                style={{
                    display: isNarrowScreen ? 'none' : 'flex',
                    margin: '0px 20px',
                    placeContent: 'space-between',
                }}
            >
                {carousel}
            </div>
        </div>
    );
};

export default Gallery;

function Image(link, setCurrentImage, active) {
    const [hover, setHover] = useState(false);
    const hoverStyle = {
        opacity: '0.7',
    };
    const activeStyle = {
        border: '2px solid var(--orange)',
        opacity: '0.5',
    };
    let imageStyle = {
        height: '85px',
        width: '85px',
        borderRadius: '10px',
        cursor: 'pointer',
        boxSizing: 'border-box',
    };
    if (hover) imageStyle = { ...imageStyle, ...hoverStyle };
    if (active) imageStyle = { ...imageStyle, ...activeStyle };
    return (
        <img
            key={link}
            src={link}
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
            style={imageStyle}
            onClick={() => setCurrentImage(link)}
        >
            {/* (if(hover || active) <div style={{ backgroundColor: 'white' }}></div>) */}
        </img>
    );
}
