import Carousel from 'react-bootstrap/Carousel';
import Trek3 from '../Images/Trek3.jpg';
import Trek2 from '../Images/Trek2.jpg';
import Trek1 from '../Images/Trek1.jpg';

import '../CSS/Style.css';


function CarouselFadeExample() {
  return (
   
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 c-Carouselimg"
          src={Trek1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-Carouselimg"
          src={Trek2}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-Carouselimg"
          src={Trek3}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    
  );
}

export default CarouselFadeExample;