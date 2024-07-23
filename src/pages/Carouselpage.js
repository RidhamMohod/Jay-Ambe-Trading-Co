import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';

import c1 from '../../src/img/c1.jpg';
import c2 from '../../src/img/c2.jpg';
import c3 from '../../src/img/c3.jpg';


export default function Carouselpage() {
  return (
    <div>
       <Carousel>
        <CarouselItem>
            <img className= "d-block w-100" src={c1}  />
        </CarouselItem>
        <CarouselItem>
            <img className= "d-block w-100" src={c2}  />
        </CarouselItem><CarouselItem>
            <img className= "d-block w-100" src={c3} />
        </CarouselItem>
       </Carousel>
    </div>
  )
}
