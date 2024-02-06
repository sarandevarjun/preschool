import React from "react";
import ClassesImg from "../img/classes-1.jpg";
import UserImg from "../img/user.jpg";
import ClassImage1 from "../img/classes-1.jpg";
import ClassImage2 from "../img/classes-2.jpg";
import ClassImage3 from "../img/classes-3.jpg";
import ClassImage4 from "../img/classes-4.jpg";
import ClassImage5 from "../img/classes-5.jpg";
import ClassImage6 from "../img/classes-6.jpg";

const Classes = () => {
  // Define an array of Classes
  const ClasseNames = [
    { classname: "Art & Drawing", classimage: ClassImage1    },
    { classname: "Color Management", classimage: ClassImage2 },
    { classname: "Athletic & Dance", classimage: ClassImage3 },
    { classname: "Language & Speaking", classimage: ClassImage4 },
    { classname: "Religion & History", classimage: ClassImage5 },
    { classname: "General Knowledge", classimage: ClassImage6 },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="mb-3">School Classes</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </div>
        <div className="row g-4">
          {ClasseNames.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="classes-item">
                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                  <img
                    className="img-fluid rounded-circle"
                    src={item.classimage}
                    alt=""
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                    {item.classname}
                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle flex-shrink-0"
                        src={UserImg}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                        <small>Teacher</small>
                      </div>
                    </div>
                    <span
                      className="bg-primary text-white rounded-pill py-2 px-3"
                      href=""
                    >
                      $99
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>3-5 Years</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-success pt-2">
                        <h6 className="text-success mb-1">Time:</h6>
                        <small>9-10 AM</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-warning pt-2">
                        <h6 className="text-warning mb-1">Capacity:</h6>
                        <small>30 Kids</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
