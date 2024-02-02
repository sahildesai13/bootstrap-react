import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Slider1.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Slider1() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='Slider1'>
      <Carousel.Item>
        <img src={require('./img/1.jpg')} />
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption className='backgroundCover'>
          <h2>Digital<br/>Design Awards</h2>
          <p>If you need to re-Design your project, New Visual Strategy, Ux Structure or you <br/>
          Do have some cool ideas for Collaboration.</p>
          <Button variant="outline-light" className='S1Btn'>Look More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={require('./img/3.jpg')} />
        <Carousel.Caption className='backgroundCover'>
          <h2>Digital<br/>Design Awards</h2>
          <p>If you need to re-Design your project, New Visual Strategy, Ux Structure or you <br/>
          Do have some cool ideas for Collaboration.</p>
          <Button variant="outline-light" className='S1Btn'>Look More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={require('./img/2.jpg')} />
        <Carousel.Caption className='backgroundCover'>
          <h2>Digital<br/>Design Awards</h2>
          <p>If you need to re-Design your project, New Visual Strategy, Ux Structure or you <br/>
          Do have some cool ideas for Collaboration.</p>
          <Button variant="outline-light" className='S1Btn'>Look More</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider1;
