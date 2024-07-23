import React from 'react'
import Layout  from './Layout'
import Carouselpage from './Carouselpage'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import p1 from '../img/p1.jpg';
import p2 from '../img/p2.jpeg';
import p3 from '../img/p3.jpeg';
import p4 from '../img/p4.jpeg';
import p5 from '../img/p5.webp';
import p6 from '../img/p6.webp';

import bg2 from '../img/bg2.jpg';
import vision from '../img/vision.png';
import mission from '../img/mission.png';
import a2 from '../img/a2.jpg';
import owner from '../img/owner.png';
import money from '../img/money.png';
import globe from '../img/globe.png';
import building from '../img/building.png';
import shop from '../img/shop.png';
import emp from '../img/emp.png';



export default function Home() {
  return (
    < >
        
     <div className='acme-regular'>
     <br/><br/>

            <Carouselpage/>
            <br/><br/>
            <div>
                <center>
                   
                    <p style={{fontSize:"40px"}}> <span style={{color:"#db3b13"}}>Latest</span> Products</p>
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
        <Link class="nav-link" to="IndustrialKeroseneOil"  ><Button variant="primary">More Details</Button> </Link>
        
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
        <Link class="nav-link" to="LowAromaticWhiteSpirit"  ><Button variant="primary">More Details</Button> </Link>

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
        <Link class="nav-link" to="WhiteC9ChemicalSolvent"  ><Button variant="primary">More Details</Button> </Link>

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
        <Link class="nav-link" to="YellowC9ChemicalSolvent"  ><Button variant="primary">More Details</Button> </Link>

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
        <Link class="nav-link" to="MineralTurpentineOil"  ><Button variant="primary">More Details</Button> </Link>

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
        <Link class="nav-link" to="industrialturpentineoil"  ><Button variant="primary">More Details</Button> </Link>

      </Card.Body>
    </Card>
    </center>
        </Col>
        </Col>
      </Row>
    </Container>

<br/><br/>

<div className='bg2 br10'>
  <Container>
    <Row>
      <Col md={6} xs={6}>
          <div style={{width:"100%",backgroundColor:"whitesmoke"}} className='mt-5'>
              <center>
                  <img src={vision} style={{height:"80px"}} className='mt-3' />
                  <p style={{fontSize:"20px"}} className='mt-3'>Our Vision</p>
                  <p><b>To be successful, you have to have your heart in your business, and your business in your heart.</b></p>
              </center>
          </div>
      </Col>
      <Col md={6} xs={6}>
      <div style={{width:"100%",backgroundColor:"whitesmoke"}} className='mt-5'>
      <center>
                  <img src={mission} style={{height:"80px"}} className='mt-3' />
                  <p style={{fontSize:"20px"}} className='mt-3'>Why Choose us?</p>
                  <p><b>By providing quality product and having experienced knowledge of the market, we have been able to attain huge client base...</b></p>
              </center>
            </div>
      </Col>
    </Row>
  </Container>
</div>

<br/><br/>

<Container fluid="md">
      <Row>
        <Col md={6} >
        <div style={{border:"solid 2px",height:"400px",width:"100%"}} className='rounded'><img src={a2} style={{height: "387px",width: "98%",borderRadius:"1%",marginLeft:"5px"}} className='mt-1' /></div>
        </Col>
        <Col md={6}>
        <h1>Welcome to our Website</h1>
        <p>Welcome to Jayambe Trading Co, a distinguished name in the manufacturing and supply of a wide range of industrial chemicals and oils. Established with a commitment to excellence and reliability, Jayambe Trading Co. specializes in providing high-quality products essential for various industrial applications.</p>
        <p>At Jayambe Trading Co, we take pride in our diverse product offerings which include Industrial Turpentine oils, Industrial C9 chemical solvents, light diesel oils, Industrial fuels, Industrial oils, Mixed Hydrocarbon oils, and low aromatic white spirit. Each product is meticulously formulated to meet stringent quality standards, ensuring optimal performance and reliability in industrial processes.</p>
        <p>Explore our comprehensive range of industrial solutions and experience the difference with Jayambe Trading Co. We look forward to partnering with you to enhance your industrial processes and achieve mutual success.</p>
        </Col>
      </Row>
    </Container>

    <br/><br/>
          
    <div style={{backgroundColor:" #f3f3f3",width:"100%"}}>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <center>
              <p style={{fontSize:"35px",marginTop:"20px"}}><span style={{color:"#db3b13"}}>Glimpse</span> of Our Company</p>
              <hr style={{width:"80%",height:"5px",backgroundColor:"#db3b13",opacity:"1"}} className='rounded'/>
            </center>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>

    <Container>
      <Row>
        <Col md={4} xs={6}>
          <div style={{height:"150px",width:"100%"}} className='mt-2 bgws br10 bs'>
              <center>
              <img src={owner} style={{height:"50px",marginTop:"25px"}} />
              <p className="mt10 m-0">Name of CEO</p>
              <p className="pt-0 p-0">Mr.Dharmpal Mohod</p>
              </center>
          </div>
        </Col>
        <Col md={4} xs={6}>
          <div style={{height:"150px",width:"100%"}} className='mt-2 bgws br10 bs'>
              <center>
              <img src={building} style={{height:"50px",marginTop:"25px"}} />
              <p className="mt10 m-0">Year of Establishment</p>
              <p className="pt-0 p-0">2001</p>
              </center>
          </div>
        </Col>
        <Col md={4} xs={6}>
          <div style={{height:"150px",width:"100%"}} className='mt-2 bgws br10 bs'>
              <center>
              <img src={globe} style={{height:"50px",marginTop:"25px"}} />
              <p className="mt10 m-0">Nature of Business</p>
              <p className="pt-0 p-0">Manufacturer & Supplier</p>
              </center>
          </div>
        </Col>
        <Col md={4} xs={6}>
          <div style={{height:"150px",width:"100%"}} className='mt-2 bgws br10 bs'>
              <center>
              <img src={emp} style={{height:"50px",marginTop:"25px"}} />
              <p className="mt10 m-0">Number of Employees</p>
              <p className="pt-0 p-0">10</p>
              </center>
          </div>
        </Col>
        <Col md={4} xs={6}>
          <div style={{height:"150px",width:"100%"}} className='mt-2 bgws br10 bs'>
              <center>
              <img src={shop} style={{height:"50px",marginTop:"25px"}} />
              <p className="mt10 m-0">Market Covered</p>
              <p className="pt-0 p-0">India</p>
              </center>
          </div>
        </Col>
        <Col md={4} xs={6}>
          <div style={{height:"150px",width:"100%"}} className='mt-2 bgws br10 bs'>
              <center>
              <img src={money} style={{height:"50px",marginTop:"25px"}} />
              <p className="mt10 m-0">GST No</p>
              <p className="pt-0 p-0">10</p>
              </center>
          </div>
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
       


{/* <div style={{backgroundColor:"whitesmoke",width:"100%"}}>
  <Container>
    <Row>
      <Col md={4}>
          <p className='fs20 fbg'>Contact Us</p>
          <p className='fs14'>Mobile : +91-9429020712,+91-9574384500</p>
          <hr style={{borderTop:"dotted 5px"}} />
          <p className='fs14'>Call Us: +91-9824068942</p>
          <hr style={{borderTop:"dotted 5px"}} />
          <p className="fs14">E-mail: JayAmbeTradingCo@gmail.com</p>
      </Col>
      <Col md={4}>
      <center>
        <img src="img/logo.png" style={{height:"100px"}} className='mt-5' />
        </center> */}
      {/* <center>
      <p className="fs20  fbg">General Links</p>
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/"  >Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/about"  >About Us</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/products"  >Products</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/contact"  >Contact</Link>
        </li>
      </ul>
      </center> */}
      {/* </Col>
      <Col md={4}>
      <p className="fs20  fbg">General Links</p>
      <Container fluid>
        <Row>
          <Col md={3} xs={3}> <Link class="nav-link" to="/"  >Home</Link></Col>
          <Col md={3} xs={3}><Link class="nav-link" to="/about"  >About Us</Link></Col>
          <Col md={3} xs={3}><Link class="nav-link" to="/products"  >Products</Link></Col>
          <Col md={3} xs={3}> <Link class="nav-link" to="/contact"  >Contact</Link></Col>
        </Row>
      </Container>
      </Col>
    </Row>
  </Container>
</div>

<hr style={{borderTop:"dotted 2px"}} />
    <center>
      <p>All Rights Reserved. <span style={{color:"#db3b13"}}>JayAmbeTradingCo </span>(Terms of Use).</p>
    </center> */}





      </div>




    </>
  )
}
