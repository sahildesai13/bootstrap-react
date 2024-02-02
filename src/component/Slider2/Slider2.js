import './Slider2.css'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { MdArrowBackIos,MdArrowForwardIos } from "react-icons/md";
function Slider2 () {
  return (
    <div className='Slider2'>
      <Container>
        <Row className='gap-2 py-5'>
          <Col lg>
            <div className='QuoteImg'>
              <img src={require(`./img/quote.png`)} width={'50px'} />
            </div>
          </Col>
          <Col lg={6}>
            <Carousel>
              <Carousel.Item>
                <div className='SliderItem'>
                    <p>
                      It was nice working with your creative team. I look
                      forward to doing more interesting projects in the future!
                      Thanks for the great experience and the opportunities that
                      you give to the new generation of designers!&lt;
                    </p>
                    <h6><span className='dash'></span> Mike Walker</h6>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='SliderItem'>
                <p>
                      It was nice working with your creative team. I look
                      forward to doing more interesting projects in the future!
                      Thanks for the great experience and the opportunities that
                      you give to the new generation of designers!&lt;
                    </p>
                    <h6><span className='dash'></span> Mike Walker</h6>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg className='d-flex flex-column-reverse gap-3 align-items-center justify-content-center'>
          <Button variant="outline-light" className='rounded-circle Slider2Btn'><MdArrowBackIos /></Button>
          <Button variant="outline-light" className='rounded-circle Slider2Btn'><MdArrowForwardIos /></Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Slider2
