import React from 'react'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='acme-regular'>
            <br/><br/><br/>

        <Container>
          <Row>
            <Col>
            <h1 className='mt-2'>About US</h1>
            <p>Welcome to Jayambe Trading Co, a distinguished name in the manufacturing and supply of a wide range of industrial chemicals and oils. Established with a commitment to excellence and reliability, Jayambe Trading Co. specializes in providing high-quality products essential for various industrial applications.</p>
            <p>At Jayambe Trading Co, we take pride in our diverse product offerings which include Industrial Turpentine oils, Industrial C9 chemical solvents, light diesel oils, Industrial fuels, Industrial oils, Mixed Hydrocarbon oils, and low aromatic white spirit. Each product is meticulously formulated to meet stringent quality standards, ensuring optimal performance and reliability in industrial processes.</p>
            <p>Explore our comprehensive range of industrial solutions and experience the difference with Jayambe Trading Co. We look forward to partnering with you to enhance your industrial processes and achieve mutual success.</p>
            </Col>
          </Row>
        </Container>

    <Container>
      <Row>
        <Col>
        <table class="table table-hover">
       {/* <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
        
        </tr>
      </thead> */}
      <tbody>
        <tr>
          <td>Name of CEO</td>
          <td>Mr.Dharmpal Mohod </td>
        </tr>
        <tr>
          <td>Year of Establishment</td>
          <td>2001</td>
        </tr>
        <tr>
          <td>Nature of Business</td>
          <td>Manufacturer & Supplier</td>
        </tr>
        <tr>
            <td>Number of Employees</td>
            <td>10</td>
          </tr>
           <tr>
            <td>Market Covered</td>
            <td>India</td>
          </tr>
           <tr>
            <td>GST No</td>
            <td>123456</td>
          </tr>
          <tr>
            <td>Annual Turnover</td>
            <td>123456</td>
          </tr>
      </tbody>
    </table>
        </Col>
      </Row>
    </Container>
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
