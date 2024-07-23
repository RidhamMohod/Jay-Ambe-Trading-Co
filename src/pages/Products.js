import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import p1 from '../img/p1.jpg';
import p2 from '../img/p2.jpeg';
import p3 from '../img/p3.jpeg';
import p4 from '../img/p4.jpeg';
import p5 from '../img/p5.webp';
import p6 from '../img/p6.webp';


export default function Products() {
  return (
    <div className='acme-regular'>
         <br/><br/>
         <br/>

            <div>
                <center>
                   
                    <p style={{fontSize:"40px"}}> <span style={{color:"black"}}>Products</span> </p>
                    <hr style={{height:"8px",width:"20%",backgroundColor:"#db3b13",opacity:"1"}} className='rounded' />
                </center>
            </div>
            <br/>

            
            <Container>
      <Row >
        <Col >
        <center>
        <Card style={{ width: '18rem',height:"505px" }} className='m-2'   >
      <Card.Img variant="top" src={p1} style={{height:"250px"}}/>
      <Card.Body style={{textAlign:"start"}} >
        <Card.Title >Industrial Kerosene Oil</Card.Title>
        <br/>
        <Card.Text >
        Country of origin: India
        </Card.Text>
        <Card.Text >
        Color:white
        </Card.Text>
        <Card.Text >
        Grade:Industrial Grade
        </Card.Text>
        <Card.Text >Usage: Paints,Cleaning
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
    </center>
        </Col>
        <Col >
        <Col >
        <center>
        <Card style={{ width: '18rem',height:"505px"  }} className='m-2'>
      <Card.Img variant="top" src={p2} style={{height:"250px"}}/>
      <Card.Body style={{textAlign:"start"}}>
        <Card.Title >Low Aromatic White Spirit</Card.Title>
        <br/>
        <Card.Text >
        Country of origin: India
        </Card.Text>
        <Card.Text >
        Application:Industrial
        </Card.Text>
        <Card.Text >
        State:Liquid
        </Card.Text>
        <Card.Text >
        Packaging Type:Taker
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
    </center>
        </Col>
        </Col>
        <Col >
        <Col >
        <center>
        <Card style={{ width: '18rem',height:"505px"  }} className='m-2'>
      <Card.Img variant="top" src={p3} style={{height:"250px"}}/>
      <Card.Body style={{textAlign:"start"}}>
        <Card.Title>White C9 Chemical Solvent</Card.Title>
        <br/>
        <Card.Text>
        Country of origin: India
        </Card.Text>
        <Card.Text>
        Grade Standard:Chemical Grade
        </Card.Text>
        <Card.Text>
        Type:Hydrocarbon Solvent
        </Card.Text>
        <Card.Text>
        Usage/Application: Paints,Cleaning
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
    </center>
        </Col>
        </Col>



        <Col >
        <center>
        <Card style={{ width: '18rem',height:"505px" }} className='m-2'   >
      <Card.Img variant="top" src={p4} style={{height:"250px"}}/>
      <Card.Body style={{textAlign:"start"}} >
        <Card.Title >Yellow C9 Chemical Solvent</Card.Title>
        <br/>
        <Card.Text >
        Country of origin: India
        </Card.Text>
        <Card.Text >
        Grade Standard:Chemical Grade
        </Card.Text>
        <Card.Text >
        Type:Hydrocarbon Solvent
        </Card.Text>
        <Card.Text >Usage: Paints,Cleaning
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
    </center>
        </Col>
        <Col >
        <Col >
        <center>
        <Card style={{ width: '18rem',height:"505px"  }} className='m-2'>
      <Card.Img variant="top" src={p5} style={{height:"250px"}}/>
      <Card.Body style={{textAlign:"start"}}>
        <Card.Title >Mineral Turpentine Oil</Card.Title>
        <br/>
        <Card.Text >
        Country of origin: India
        </Card.Text>
        <Card.Text >
        Grade Standard:Chemical Grade
        </Card.Text>
        <Card.Text >
        Type:Hydrocarbon Solvent
        </Card.Text>
        <Card.Text >
        Usage/Application: Paints,Cleaning
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
    </center>
        </Col>
        </Col>
        <Col >
        <Col >
        <center>
        <Card style={{ width: '18rem',height:"505px"  }} className='m-2'>
      <Card.Img variant="top" src={p6} style={{height:"250px"}}/>
      <Card.Body style={{textAlign:"start"}}>
        <Card.Title>Industrial Turpentine Oil</Card.Title>
        <br/>
        <Card.Text>
        Country of origin: India
        </Card.Text>
        <Card.Text>
        Usage/Application: Paints,Cleaning
        </Card.Text>
        <Card.Text>
        Grade:Industrial Grade
        </Card.Text>
        <Card.Text>
        Packaging Type:Barrel,Taker
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
    </center>
        </Col>
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
