import React from 'react';
import img1 from '../../img/fundamentals.svg';
import img2 from '../../img/react.svg';

const Learn = () => {
    return (
        <div>
             <section id="learn" className="p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <img src={img1} className="img-fluid" alt="" />
          </div>
          <div className="col-md p-5">
            <h2>Learn The Fundamentals</h2>
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique deleniti possimus magnam corporis ratione facere!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              reiciendis eius autem eveniet mollitia, at asperiores suscipit
              quae similique laboriosam iste minus placeat odit velit quos,
              nulla architecto amet voluptates?
            </p>
            <a href="/" className="btn btn-light mt-3">
              <i className="bi bi-chevron-right"></i> Read More
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="learn" className="p-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h2>Learn React</h2>
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique deleniti possimus magnam corporis ratione facere!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              reiciendis eius autem eveniet mollitia, at asperiores suscipit
              quae similique laboriosam iste minus placeat odit velit quos,
              nulla architecto amet voluptates?
            </p>
            <a href="/" className="btn btn-light mt-3">
              <i className="bi bi-chevron-right"></i> Read More
            </a>
          </div>
          <div className="col-md">
            <img src={img2} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Learn;