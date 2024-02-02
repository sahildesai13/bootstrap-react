import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import './aboutUs.css';
function AboutUs () {
  return (
    <div className='AboutUS my-5 py-5'>
      <Container fluid>
        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row>
          <Col lg className='AboutUsDtl cont'>
            <div className='AdtlCover'>
              <h5>About Us</h5>
              <h3 className='gr-text'>
                Creative Design <br /> for your brand
              </h3>
              <p className='fw-300'>
                Nullam imperdiet, sem at fringilla lobortis, sem  nibhfiah ingilt
                dictum nisi maimp erdiet, sem at fringilnibhfiah ingil
              </p>
          <Button variant="outline-light" className='S1Btn'>Look More</Button>
            </div>
          </Col>
          <Col lg className='AboutUsImg'>
            <img src={require(`./Img/aboutUs.jpg`)} width={'100%'} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUs
