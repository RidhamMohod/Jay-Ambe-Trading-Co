import React from 'react'

import { Form, Button, Container, Row, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div class="acme-regular">
      <br/><br/>
      <br/><br/>

       
       <Container>
        <Row>
            <Col md={6} xs={6}> 
              <Container fluid>
                <Row>
                  <Col md={6} >
                  <span>
                <button className="dot">
                  <i className="fa fa-user" style={{fontSize:"30px",color:"antiquewhite"}} aria-hidden="true"></i>
                </button>
                <p className="m-0">Contact Person</p>
                <p>Mr.Dharmpal Mohod</p>
              </span>
              <span>
                <button className="dot">
                  <i className="fa fa-map-marker" style={{fontSize:"30px",color:"antiquewhite"}} aria-hidden="true"></i>
                </button>
                <p className="m-0">Address</p>
                <p>C-6 Hari Krishna estate New Narol, Ahmedabad</p>
              </span>    <span>
                <button className="dot">
                  <i className="fa fa-mobile" style={{fontSize:"30px",color:"antiquewhite"}} aria-hidden="true"></i>
                </button>
                <p className="m-0">Call Us</p>
                <p>+91-9429020712,+91-9574384500</p>
              </span>
                  </Col>
                  <Col md={6} >
                  <span>
                <button className="dot">
                  <i className="fa fa-phone" style={{fontSize:"30px",color:"antiquewhite"}} aria-hidden="true"></i>
                </button>
                <p className="m-0">Call Us</p>
                <p>+91-9824068942</p>
              </span>    <span>
                <button className="dot">
                  <i className="fa fa-envelope-o" style={{fontSize:"30px",color:"antiquewhite"}} aria-hidden="true"></i>
                </button>
                <p className="m-0">E-mail</p>
                <p>JayambeTradingCo@gmail.com</p>
              </span>    <span>
                <button className="dot">
                  <i className="fa fa-globe" style={{fontSize:"30px",color:"antiquewhite"}} aria-hidden="true"></i>
                </button>
                <p className="m-0">Web Page</p>
                <p>WWW.JayambeTradingCo@gmail.com</p>
              </span>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={6} >
            <h1> <span className='fbg'>Get</span>  in Touch</h1>
          <Form  >
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className='mt-2'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className='mt-2'  >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                placeholder="Enter your message"
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className='mt-2'>
              Submit
            </Button>
          </Form>
            </Col>
        </Row>
       </Container>


    



          <br></br>
          <br/><br/>
          <hr />
<Container>
  <Row>
    <Col md={4}>
    <center>
    <button style={{border:"0px",backgroundColor:"white"}}><Link class="nav-link" to="/"  >Home</Link></button>
    <button style={{border:"0px",backgroundColor:"white"}} ><Link class="nav-link" to="/about"  >About Us</Link></button>
    <button style={{border:"0px",backgroundColor:"white"}} ><Link class="nav-link" to="/products"  >Products</Link></button>
    <button style={{border:"0px",backgroundColor:"white"}} ><Link class="nav-link" to="/contact"  >Contact</Link></button>
    </center>
    <br/>
    </Col>
    <Col md={4}>
    <center><img src="img/logo.png" style={{height:"40px"}} /></center>
    <br/>
    </Col>
    <Col md={4}>
    <center>
      <p>All Rights Reserved. <span style={{color:"#db3b13"}}>JayAmbeTradingCo </span>(Terms of Use).</p>
    </center> 
    </Col>
  </Row>
</Container>
       




    </div>
  )
}
