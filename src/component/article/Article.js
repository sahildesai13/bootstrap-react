import './Article.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

function Article () {
  return (
    <div className='article py-5 my-5'>
      <div className='articleTitle'>
        <h6>OUR BLOGS</h6>
        <h3>Interesting Article</h3>
      </div>
      <div className='articleDtl pt-5'>
        <Container>
          <Row className='gap-4'>
            <Col lg className='ArticlePart'>
              <Card>
                <Card.Img variant='top' src={require(`./Img/1.jpg`)} />
                <Card.Body>
                  <Card.Title>
                    <div className='Atext d-flex justify-content-between align-item-center'>
                        <p>BY DEVID FABER</p>
                        <span>14 AUGUST</span>
                    </div>
                  </Card.Title>
                  <Card.Text>
                   <p className='CardText'>Why do we love our gadgets so much</p>
                   <p className='textMore'>READ MORE</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg className='ArticlePart'>
            <Card>
                <Card.Img variant='top' src={require(`./Img/2.jpg`)} />
                <Card.Body>
                  <Card.Title>
                    <div className='Atext d-flex justify-content-between align-item-center'>
                        <p>BY DEVID FABER</p>
                        <span>14 AUGUST</span>
                    </div>
                  </Card.Title>
                  <Card.Text>
                   <p className='CardText'>Why do we love our gadgets so much</p>
                   <p className='textMore'>READ MORE</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg className='ArticlePart'>
            <Card>
                <Card.Img variant='top' src={require(`./Img/3.jpg`)} />
                <Card.Body>
                  <Card.Title>
                    <div className='Atext d-flex justify-content-between align-item-center'>
                        <p>BY DEVID FABER</p>
                        <span>14 AUGUST</span>
                    </div>
                  </Card.Title>
                  <Card.Text>
                   <p className='CardText'>Why do we love our gadgets so much</p>
                   <p className='textMore'>READ MORE</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default Article
