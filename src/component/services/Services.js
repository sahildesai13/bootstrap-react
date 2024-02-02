import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Services.css'
function Services () {
  return (
    <Container className='my-5 py-5'>
      <Row className='gap-5'>
        <Col lg className='serviceDtl'>
          <p className='SNumber'>01</p>
          <h6>UI & UX Design</h6>
          <p>
            Nullam imperdiet, sem at fringilla lobortis, sem nibhfiah ingilt
            dictum nisi maimp erdiet, sem at fringilnibhfiah ingilt
          </p>
        </Col>
        <Col lg className='serviceDtl'>
          <p className='SNumber'>02</p>
          <h6>Web Development</h6>
          <p>
            Nullam imperdiet, sem at fringilla lobortis, sem nibhfiah ingilt
            dictum nisi maimp erdiet, sem at fringilnibhfiah ingilt
          </p>
        </Col>
        <Col lg className='serviceDtl'>
          <p className='SNumber'>01</p>
          <h6>Business Analysis</h6>
          <p>
            Nullam imperdiet, sem at fringilla lobortis, sem nibhfiah ingilt
            dictum nisi maimp erdiet, sem at fringilnibhfiah ingilt
          </p>
        </Col>
        
      </Row>
    </Container>
  )
}

export default Services
