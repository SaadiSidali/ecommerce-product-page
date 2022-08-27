import './App.css';
import Container from './components/Container';
import { useState, useEffect } from 'react';

import { CartContext, MobileContext, ModalContext } from './Context/MyContext';

import Details from './components/Details';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const mediaWatcher = window.matchMedia(
      'only screen and (max-width: 600px)'
    );
    setIsNarrowScreen(mediaWatcher.matches);

    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }
    mediaWatcher.addEventListener('change', updateIsNarrowScreen);

    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateIsNarrowScreen);
    };
  });

  const images = [
    '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg',
  ];

  const [cart, setCart] = useState(undefined);

  return (
    <CartContext.Provider value={{ cart, setCart }}>

      <MobileContext.Provider value={{ isNarrowScreen, setIsNarrowScreen }}>

        <div className='App'>
          <Header />
          <ModalContext.Provider value={{ showModal, setShowModal }}>
            <Modal images={images}></Modal>
            <Container isNarrowScreen={isNarrowScreen}>
              <Gallery images={images} />
              <Details />
            </Container>
            {/* <Button block >Heyyy</Button> */}
          </ModalContext.Provider>
        </div>
      </MobileContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
