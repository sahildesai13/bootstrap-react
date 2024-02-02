import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import './TopNav.css';

function TopNav() {
  const [navbarBg, setNavbarBg] = useState('transparent'); // Default background color

  useEffect(() => {
    const handleScroll = () => {
      // Define a threshold for scroll position to change the color
      const threshold = 500; // Change this value as per your requirement
      console.log('Scrolling');

      if (window.scrollY > threshold) {
        setNavbarBg('dark');
        console.log('Changing to dark');
      } else {
        setNavbarBg('transparent');
        console.log('Changing to transparent'); // Reset to default or desired background color
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  return (
    <Navbar
  expand='lg'
  className={`topNav py-4 ${navbarBg === 'dark' ? 'bg-dark' : ''}`}
  data-bs-theme='dark'
>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav t-right'>
          <Col></Col>
          <Nav>
            <NavDropdown title='Home' id='basic-nav-dropdown' className='px-3 f-white'>
              <NavDropdown.Item href='#MainHome'>Main Home</NavDropdown.Item>
              <NavDropdown.Item href='#CreativeStudio'>Creative Studio</NavDropdown.Item>
              <NavDropdown.Item href='#Business Startup'>Business Startup</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#About' className='px-3 f-white'>About</Nav.Link>
            <NavDropdown title='Portfolio' id='portfolio-dropdown' className='px-3 f-white'>
              <NavDropdown.Item href='#MasonryColumn1'>Masonry Column-1</NavDropdown.Item>
              <NavDropdown.Item href='#MasonryColumn2'>Masonry Column-2</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Pinterest List</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#Blog' className='px-3 f-white'>Blog</Nav.Link>
            <Nav.Link href='#Contact' className='px-3 f-white'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
