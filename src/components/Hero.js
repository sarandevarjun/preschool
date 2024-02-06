import React from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";

import Carousel_1_Img from "../img/carousel-1.jpg";
import Carousel_2_Img from "../img/carousel-2.jpg";

const Hero = () => {
  return (
    <Container fluid className="p-0 mb-5">
      <Carousel className="header-carousel position-relative">
        <Carousel.Item className="position-relative">
          <img className="img-fluid" src={Carousel_1_Img} alt="" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: "rgba(0, 0, 0, .2)" }}
          >
            <Container>
              <Row className="justify-content-start">
                <Col lg={8}>
                  <h1 className="display-2 text-white animated slideInDown mb-4">
                    The Best Kindergarten School For Your Child
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                    diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
                    sea elitr.
                  </p>
                  <Button
                    href=""
                    className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                  >
                    Learn More
                  </Button>
                  <Button
                    href=""
                    className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                  >
                    Our Classes
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item className="position-relative">
          <img className="img-fluid" src={Carousel_2_Img} alt="" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: "rgba(0, 0, 0, .2)" }}
          >
            <Container>
              <Row className="justify-content-start">
                <Col lg={8}>
                  <h1 className="display-2 text-white animated slideInDown mb-4">
                    Make A Brighter Future For Your Child
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                    diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
                    sea elitr.
                  </p>
                  <Button
                    href=""
                    className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                  >
                    Learn More
                  </Button>
                  <Button
                    href=""
                    className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                  >
                    Our Classes
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Hero;
