import Container from 'react-bootstrap/esm/Container'
import './Team.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
function Team () {
  return (
    <div className='OurTeam'>
      <div className='teamTitle'>
        <h6>OUR TEAM </h6>
        <h2>Meet Our People.</h2>
      </div>
      <div className='teamDtl px-md-3 py-5 my-5'>
        <Container fluid>
          <Row className='gap-1 pb-1 align-items-center justify-content-center'>
            <Col sm={5} lg className='teamMember'>
              <img src={require(`./Img/1.jpg`)} width={'100%'} />
            </Col>
            <Col sm={5} lg className='teamMember'>
              <img src={require(`./Img/2.jpg`)} width={'100%'} />
            </Col>
            <Col sm={5} lg className='teamMember'>
              <img src={require(`./Img/3.jpg`)} width={'100%'} />
            </Col>
            <Col sm={5} lg className='teamMember'>
              <img src={require(`./Img/4.jpg`)} width={'100%'} />
            </Col>
          </Row>
          <Row className='gap-1 align-items-center justify-content-sm-center justify-content-lg-start '>
            <Col sm={5} lg className='teamMember'>
              <img src={require(`./Img/5.jpg`)} width={'100%'} />
            </Col>
            <Col sm={5} lg className='teamMember'>
              <img src={require(`./Img/6.jpg`)} width={'100%'} />
            </Col>
            <Col sm={5} lg className='teamMember'>
            </Col>
            <Col sm={5} lg className='teamMember'>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default Team
