import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'animate.css/animate.min.css';
import Testimonial_1_Img from "../img/testimonial-1.jpg";
import Testimonial_2_Img from "../img/testimonial-2.jpg";
import Testimonial_3_Img from "../img/testimonial-3.jpg";

const Testimonial = () => {
  return (
    <div className="py-5">
      <Container fluid>
        <Container>
          <div
            className="text-center mx-auto mb-5 fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3">Our Clients Say!</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <Carousel
            className="testimonial-carousel fadeInUp"
            data-wow-delay="0.1s"
          >
            <Carousel.Item>
              <div className="bg-light rounded p-5">
                <p className="fs-5">
                  Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                  ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                  est kasd kasd erat eos
                </p>
                <div
                  className="d-flex align-items-center bg-white me-n5"
                  style={{ borderRadius: "50px 0 0 50px" }}
                >
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src={Testimonial_1_Img}
                    alt="Client 1"
                    style={{ width: "90px", height: "90px" }}
                  />
                  <div className="ps-3">
                    <h3 className="mb-1">Client Name</h3>
                    <span>Profession</span>
                  </div>
                  <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="bg-light rounded p-5">
                <p className="fs-5">
                  Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                  ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                  est kasd kasd erat eos
                </p>
                <div
                  className="d-flex align-items-center bg-white me-n5"
                  style={{ borderRadius: "50px 0 0 50px" }}
                >
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src={Testimonial_2_Img}
                    alt="Client 2"
                    style={{ width: "90px", height: "90px" }}
                  />
                  <div className="ps-3">
                    <h3 className="mb-1">Client Name</h3>
                    <span>Profession</span>
                  </div>
                  <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="bg-light rounded p-5">
                <p className="fs-5">
                  Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                  ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                  est kasd kasd erat eos
                </p>
                <div
                  className="d-flex align-items-center bg-white me-n5"
                  style={{ borderRadius: "50px 0 0 50px" }}
                >
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src={Testimonial_3_Img}
                    alt="Client 3"
                    style={{ width: "90px", height: "90px" }}
                  />
                  <div className="ps-3">
                    <h3 className="mb-1">Client Name</h3>
                    <span>Profession</span>
                  </div>
                  <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    </div>
  );
};

export default Testimonial;
