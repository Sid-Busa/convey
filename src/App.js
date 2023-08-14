/* eslint-disable jsx-a11y/img-redundant-alt */

import './App.css';
import CustomCarousel from './component/Carousel';
import Header from './component/Header';
import Swip from './component/Swipable';
import SwipeableCarousel from './component/Swipable';


const carouselItems = [
  <img src="https://picsum.photos/id/237/200/300" alt="Image 1" width='100%' height='100%' />,
  <img src="https://picsum.photos/seed/picsum/200/300" alt="Image 2" width='100%' height='100%' />,
  <img src="https://picsum.photos/200/300?grayscale" alt="Image 3" width='100%' height='100%' />,
];

function App() {
  return (
    <>
    <Header />
    <div className="App">
      <CustomCarousel />
      <div className='swip-cards' >
        <Swip />
      </div>
    </div>
    </>
  );
}

export default App;
