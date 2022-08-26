import React from 'react';
import Container from './Container';
import Gallery from './Gallery';

const Modal = ({ showModal, setShowModal, ...props }) => (
    <>
        <div
            // onClick={() => { setShowModal(false) }}
            style={{
                display: showModal ? '' : 'none',
                position: 'absolute',
                left: '0',
                top: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: 2,
            }}
        >
            <Container
                center={true}
                style={{
                    position: 'relative',
                }}
            >


                <Gallery setShowModal={setShowModal} {...props} modalMode={true}></Gallery>
            </Container>
        </div>
    </>
);

export default Modal;
