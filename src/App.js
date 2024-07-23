
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Products from './pages/Products';
import IndustrialKeroseneOil from './pages/IndustrialKeroseneOil';
import LowAromaticWhiteSpirit from './pages/LowAromaticWhiteSpirit';
import WhiteC9ChemicalSolvent from './pages/WhiteC9ChemicalSolvent';
import YellowC9ChemicalSolvent from './pages/YellowC9ChemicalSolvent';
import MineralTurpentineOil from './pages/MineralTurpentineOil';
import IndustrialTurpentineOil from './pages/IndustrialTurpentineOil';


// import Product1 from './components/Product1';





function App() {
  return (
   
    < >
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='products' element={<Products />}/>
          {/* <Route path='inductrialkeroseneoil' element={<IndustrialKeroseneOil />} /> */}
          <Route path='industrialkeroseneoil' element={<IndustrialKeroseneOil/>} />
          <Route path='lowaromaticwhitespirit' element={<LowAromaticWhiteSpirit />} />
          <Route path='whitec9chemicalsolvent' element={<WhiteC9ChemicalSolvent />} />
          <Route path='yellowc9chemicalsolvent' element={<YellowC9ChemicalSolvent />} />
          <Route path='mineralturpentineoil' element={<MineralTurpentineOil />} />
          <Route path='industrialturpentineoil' element={<IndustrialTurpentineOil />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>

   
  );
}

export default App;
