import './App.css';
import Container from './components/Container';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Header from './components/Header';
import { useState, useEffect } from 'react'
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
    <div className='App'>
      <Header myCart={cart} setCart={setCart} isNarrowScreen={isNarrowScreen}></Header>
      <Modal setShowModal={setShowModal} showModal={showModal} images={images} isNarrowScreen={isNarrowScreen} ></Modal>
      <Container isNarrowScreen={isNarrowScreen}>
        <Gallery images={images} isNarrowScreen={isNarrowScreen} setShowModal={setShowModal}></Gallery>
        <Details cart={cart} setCart={setCart} isNarrowScreen={isNarrowScreen}></Details>
      </Container>
      {/* <Button block >Heyyy</Button> */}
    </div>
  );
}

export default App;
