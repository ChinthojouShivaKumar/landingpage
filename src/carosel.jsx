import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import appmac2 from './macbook/appmac2.jpg'
import maac6 from './macbook/maac6.jpg'
import mac2 from './macbook/mac2.jpg'


export function Coroousel(){
    return(
        <div class="corsel">

          <h1 id="feature">Here are some New Features</h1>
            <Carousel style={{width:"1400px", position:'relative', top:"630px",left:"60px"}}>
              <Carousel.Item interval={1000}>
              <img
              style={{width:'200px',height:"500px"}}
              className="d-block w-100"
              src={appmac2}
              alt="First slide"
              />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img
            style={{width:'200px',height:"500px"}}
            className="d-block w-100"
            src={maac6}
            alt="Second slide"
            />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
          style={{width:'200px',height:"500px"}}
          className="d-block w-100"
          src={mac2}
          alt="Third slide"
          />
          <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </Carousel.Caption>
          </Carousel.Item>
    </Carousel>
        </div>
    )
}