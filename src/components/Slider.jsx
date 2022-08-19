import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../styles/slider.css'

export default function Slider() {
  return (
    <div>
      <Carousel className="slider" fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.wallpaperup.com/uploads/wallpapers/2013/12/09/189005/f98620f20e2376864e012198f7f8e9a3.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.expteam.net/interiordesign/media/com_expgallery/images/big/furniture_wallpaper_21467_22381_hd_wallpapers_5571d7363738a.jpg"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-psd/contemporary-living-room-mockup-psd-interior-design_53876-129130.jpg?w=2000"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
