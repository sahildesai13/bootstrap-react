import './Portfolio.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Portfolio () {
  return (
    <div className='Portfolio'>
      <div className='MainHeader'>
        <h6>OUR PORTFOLIO</h6>
        <h3>Unlimited Experience</h3>
      </div>

      <Container fluid className='ProjectImg px-3'>
        <Row className='px-4 gap-3  py-5 align-items-center ProjectRow'>
          <Col className='column col-md-5 col-lg' md>
            <div className='colImg'>
              <img src={require(`./img/1.jpg`)} width={'100%'} />
            </div>
          </Col>
          <Col className='column col-md-5 col-lg' md>
            <div className='columnFlex d-flex gap-3 flex-column align-items-center justify-content-center'>
              <div className='colImg'>
                <img src={require(`./img/2.jpg`)} width={'100%'} />
              </div>
              <div className='colImg'>
                <img src={require(`./img/3.jpg`)} width={'100%'} />
              </div>
            </div>
          </Col>
          <Col className='column col-md-5 col-lg' md >
            <div className='columnFlex d-flex gap-3 flex-column align-items-center justify-content-center'>
              <div className='colImg'>
                <img src={require(`./img/4jpg.jpg`)} width={'100%'} />
              </div>
              <div className='colImg'>
                <img src={require(`./img/5.jpg`)} width={'100%'} />
              </div>
            </div>
          </Col>
          <Col className='column col-md-5 col-lg' md>
            <div className='columnFlex d-flex gap-3 flex-column align-items-center justify-content-center'>
              <div className='colImg'>
                <img src={require(`./img/6.jpg`)} width={'100%'} />
              </div>
              <div className='colImg'>
                <img src={require(`./img/7.jpg`)} width={'100%'} />
              </div>
            </div>
          </Col>
          <Col className='column col-md-5 col-lg' md>
            <div className='colImg'>
              <img src={require(`./img/8.jpg`)} width={'100%'} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Portfolio
