import React from 'react';


const Footer = () => {
    // const date= Date("Y");
    return (
     <div style={{clear:'left'}}>
        <div 
          className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark">
          
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          
          <div>
            <a href="/facebook" className="text-white me-4">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="/twiter" className="text-white me-4">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="/google" className="text-white me-4">
              <i className="bi bi-google"></i>
            </a>
            <a href="linkedin/" className="text-white">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

    {/*  Modal */}
    <div
      className="modal fade"
      id="enroll"
      tabindex="-1"
      aria-labelledby="enrollLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="enrollLabel">Enrollment</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="lead">Fill out this form and we will get back to you</p>
            <form>
              <div className="mb-3">
                <label for="first-name" className="col-form-label">
                  First Name:
                </label>
                <input type="text" className="form-control" id="first-name" />
              </div>
              <div className="mb-3">
                <label for="last-name" className="col-form-label">Last Name:</label>
                <input type="text" className="form-control" id="last-name" />
              </div>
              <div className="mb-3">
                <label for="email" className="col-form-label">Email:</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label for="phone" className="col-form-label">Phone:</label>
                <input type="tel" className="form-control" id="phone" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>

     </div>
       
           
    );
};

export default Footer;