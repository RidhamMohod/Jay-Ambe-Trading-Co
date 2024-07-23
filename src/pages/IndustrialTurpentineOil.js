import React from 'react'
import { Container, Row } from 'react-bootstrap'
import p6 from '../img/p6.webp';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function IndustrialTurpentineOil() {
  return (
    <div className='acme-regular'>
      
    <br></br>
    <br></br>
    <br></br>

    <Container fluid>
      <Row>
        <Col md={4}>
            <img src={p6} style={{height:"400px",width:"100%"}} />
        </Col>
        <Col md={8}>
        <h1>Industrial Turpentine Oil</h1>
              <table class="table table-hover">
                
                  <tbody>
                    <tr>
                      <td>Business Type</td>
                      <td>Manufacturer, Supplier</td>
                    </tr>
                    <tr>
                      <td>Country of Origin</td>
                      <td>India</td>
                    </tr>
                    <tr>
                      <td>Application</td>
                      <td>Industrial</td>
                    </tr>
                    <tr>
                        <td>Grade</td>
                        <td>Industrial Grade</td>
                      </tr>
                      <tr>
                        <td>Location</td>
                        <td>Ahmedabad</td>
                      </tr>
                  </tbody>
                </table>
        </Col>
      </Row>
    </Container>
    <br/>
  <p class="fs20 ml20">Products Details</p>

<div class="container-fluid">
  <div class="row">
      <div class="col-md-6">
          <table class="table table-hover">
            
              <tbody>
                <tr>
                  <td>Color</td>
                  <td>White</td>
                </tr>
                <tr>
                  <td>Packaging Size</td>
                  <td>1000- 24000 Litres</td>
                </tr>
                <tr>
                  <td>Form</td>
                  <td>Liquid</td>
                </tr>
              </tbody>
            </table>

      </div>
      <div className="col-md-6">
          <table className="table table-hover">
           
              <tbody>
                <tr>
                  <td>Packaging Type</td>
                  <td>	Barrel, Tanker</td>
                </tr>
                <tr>
                  <td>Purity</td>
                  <td>99%</td>
                </tr>
              </tbody>
            </table>
      </div>
  </div>
</div>
<br/>
<br/>
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
