import React from 'react'
import Whyexstore from './why'
import Carousel from 'react-bootstrap/Carousel';
import './Main.css'
import Banner1 from '../assets/images/banner1.png'
import Banner2 from '../assets/images/banner2.png'
import Banner3 from '../assets/images/banner-3.png'
import { Button } from 'react-bootstrap';

function Main() {
  return (
    <div className='main--div'>

<Carousel className='carousel--1'>
      <Carousel.Item>
      
              <img
                className="d-block w-100"
                src={Banner1}
                alt="First slide"
              />
              <Carousel.Caption className='caption'>
                <h1 className='head--h1'>MultiVersus</h1>
                <h3 className='head--h3'>Now officially free to play for all Xbox users.</h3>
                <br></br>
                <Button variant="primary button--get" size="lg" active>
                Get in now!
                </Button>

              </Carousel.Caption>
              

      </Carousel.Item>

      <Carousel.Item>
              <img
                className="d-block w-100"
                src={Banner2}
                alt="Second slide"
              />

              <Carousel.Caption className='caption'>
                <h1 className='head--h1'>Ultimate Sale </h1>
                <h3 className='head--h3'>Save up to 85% on select Xbox games.</h3>

                <Button variant="primary button--get" size="lg" active>
                Get in now!
                </Button>

              </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='item'>
                <img
                  className="d-block w-163"
                  src={Banner3}
                  alt="Third slide"
                  
                />

                <Carousel.Caption className='caption'>
                  <h1 className='head--h1'>Playing UFC®️ 4</h1>
                  <h3 className='head--h3'>
                  Get it now with 34% discount for all users.
                  </h3>
                  <Button variant="primary button--get" size="lg" active>
                Get in now!
                </Button>
                </Carousel.Caption>

               

      </Carousel.Item>
    </Carousel> 

      <Whyexstore/>

    </div>

  )
}

export default Main