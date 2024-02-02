import Container from 'react-bootstrap/esm/Container'
import './Footer.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5';
import { PiTelegramLogoDuotone } from "react-icons/pi";
function Footer () {
  return (
    <div className='footer py-5 px-5'>
      <Container>
        <div className='footerCover px-5 py-5'>
          <Row className='gap-3'>
            <Col lg className='footerCol'>
              <div className='ContactUs'>
                <h3>Contact Us</h3>
              </div>
              <div className='FdtlCover py-3'>
                <div className='contactDtl  d-flex'>
                  <div className='ContactLogo'>
                    <CiLocationOn className='conLogo' />
                  </div>
                  <div className='ContactText'>
                    <h6>Official Address</h6>
                    <p>504, White St.Dowsonville, GA 30540, New York</p>
                  </div>
                </div>
                <div className='contactDtl d-flex'>
                  <div className='ContactLogo'>
                    <CiMail className='conLogo' />
                  </div>
                  <div className='ContactText'>
                    <h6>Email Us</h6>
                    <p>Support@gmail.com</p>
                  </div>
                </div>
                <div className='contactDtl d-flex'>
                  <div className='ContactLogo'>
                    <IoCallOutline className='conLogo' />
                  </div>
                  <div className='ContactText'>
                    <h6>Call Us</h6>
                    <p>+91 9737834842</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg className='footerCol'>
              <div className='ContactUs'>
                <h3>Recent News</h3>
              </div>
              <div className='FdtlCover py-3'>
                <div className='contactDtl footerPart2Img  d-flex'>
                    <img src={require(`./Img/1.jpg`)} />
                    <div className='ContactText footerPart2'>
                    <p>The start-Up Ultimate Guide to Make Your Wordpress Journal.</p>
                    <span>14 Jan 2023</span>
                  </div>
                </div>
                <div className='contactDtl py-3 footerPart2Img  d-flex'>
                    <img src={require(`./Img/2.jpg`)} />
                    <div className='ContactText footerPart2'>
                    <p>The start-Up Ultimate Guide to Make Your Wordpress Journal.</p>
                    <span>14 Jan 2023</span>
                  </div>
                </div>
                <div className='ContactEmail'>
                    <input type="email" className='email' placeholder='Enter Your Email'/>
                    <button className='ContEmail'><PiTelegramLogoDuotone /></button>
                </div>
              </div>
            </Col>
            {/* <Col lg className='footerCol'>
              3
            </Col> */}
          </Row>
        </div>
      </Container>
    </div>
  )
}
export default Footer
