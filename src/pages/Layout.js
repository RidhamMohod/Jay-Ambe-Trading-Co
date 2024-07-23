import { Outlet, Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
 

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top ">
  <div class="container-fluid acme-regular">
    <a class="navbar-brand" href="#">
      <img src="img/logo.png" style={{height:"40px"}} />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/"  >Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/about"  >About Us</Link>
        </li>
        <NavDropdown title="Products" id="basic-nav-dropdown">
        <NavDropdown.Item >
        <Link class="nav-link" to="Products"  > <button style={{border:"0px",backgroundColor:"white"}}>Products</button> </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="IndustrialKeroseneOil">Industrial Kerosene Oil</NavDropdown.Item>
              <NavDropdown.Item href="LowAromaticWhiteSpirit">
                 Low Aromatic White Spirit
              </NavDropdown.Item>
              <NavDropdown.Item href="WhiteC9ChemicalSolvent">White C9 Chemical Solvent</NavDropdown.Item>
              <NavDropdown.Item href="YellowC9ChemicalSolvent">Yellow C9 Chemical Solvent</NavDropdown.Item>
              <NavDropdown.Item href="MineralTurpentineOil">Mineral Turpentine Oil</NavDropdown.Item>
              <NavDropdown.Item href="industrialturpentineoil">Industrial Turpentine Oil</NavDropdown.Item> */}
              <NavDropdown.Item>
              <Link class="nav-link" to="IndustrialKeroseneOil"  > <button style={{border:"0px",backgroundColor:"white"}}>Industrial Kerosene Oil</button> </Link>
                 </NavDropdown.Item>
                 <NavDropdown.Item>
              <Link class="nav-link" to="LowAromaticWhiteSpirit"  > <button style={{border:"0px",backgroundColor:"white"}}>Low Aromatic White Spirit</button> </Link>
                 </NavDropdown.Item>
                 <NavDropdown.Item>
              <Link class="nav-link" to="WhiteC9ChemicalSolvent"  > <button style={{border:"0px",backgroundColor:"white"}}>White C9 Chemical Solvent</button> </Link>
                 </NavDropdown.Item>
                 <NavDropdown.Item>
              <Link class="nav-link" to="YellowC9ChemicalSolvent"  > <button style={{border:"0px",backgroundColor:"white"}}>Yellow C9 Chemica lSolvent</button> </Link>
                 </NavDropdown.Item>
                 <NavDropdown.Item>
              <Link class="nav-link" to="MineralTurpentineOil"  > <button style={{border:"0px",backgroundColor:"white"}}>Mineral Turpentine Oil</button> </Link>
                 </NavDropdown.Item>
                 <NavDropdown.Item>
              <Link class="nav-link" to="industrialturpentineoil"  > <button style={{border:"0px",backgroundColor:"white"}}>Industrial Turpentine Oil</button> </Link>
                 </NavDropdown.Item>
             
              
            </NavDropdown>
        <li class="nav-item">
        <Link class="nav-link" to="/contact"  >Contact</Link>

        </li>
      </ul>
    </div>
  </div>
</nav>
      <Outlet />
    </>
  )
};

export default Layout;