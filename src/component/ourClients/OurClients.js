import './OurClients.css'
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
function OurClients () {
    
  return (
    <div className='Clients s-100'>
      <div className='ClientsTitle'>
        <Container fluid>
          <marquee behavior='scroll' loop='infinite' direction='' scrollamount="30">
            <div className='line d-flex '>
              <h2 className='ClientsHead'>Our Clients</h2>
              <h2 className='ClientsHead'>Our Clients</h2>
              <h2 className='ClientsHead'>Our Clients</h2>
              <h2 className='ClientsHead'>Our Clients</h2>
              <h2 className='ClientsHead'>Our Clients</h2>
            </div>
          </marquee>
        </Container>
      </div>
      <div className="ClientDtl">
        <Container>
            <div className=' auto6 justify-content-center gap-5 align-item-center'>
                <div className="ClientLogo">
                    <img src={require(`./img/1.png`)} width={'100%'} />
                </div>
                <div className="ClientLogo">
                    <img src={require(`./img/2.png`)} width={'100%'} />
                </div>
                <div className="ClientLogo">
                    <img src={require(`./img/3.png`)} width={'100%'} />
                </div>
                <div className="ClientLogo">
                    <img src={require(`./img/4.png`)} width={'100%'} />
                </div>
                <div className="ClientLogo">
                    <img src={require(`./img/5.png`)} width={'100%'} />
                </div>
                <div className="ClientLogo">
                    <img src={require(`./img/6.png`)} width={'100%'} />
                </div>
                <div className="ClientLogo">
                    <img src={require(`./img/3.png`)} width={'100%'} />
                </div>
                <div className="ClientLogo">
                    <img src={require(`./img/6.png`)} width={'100px'} />
                </div>
                <div className="ClientLogo">
                    <img src={require(`./img/5.png`)} width={'100%'} />
                </div>
                <div className="ClientLogo">
                    <img src={require(`./img/1.png`)} width={'100%'} />
                </div>
                <div className="ClientLogo">
                    <img src={require(`./img/4.png`)} width={'100%'} />
                </div>
                <div className="ClientLogo">
                    <img src={require(`./img/3.png`)} width={'100%'} />
                </div>
            </div>
        </Container>
      </div>
    </div>
  )
}
export default OurClients
