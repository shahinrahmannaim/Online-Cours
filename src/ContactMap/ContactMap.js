import React from 'react';
import GoogleMap from '../component/GoogleMap/GoogleMap';
import './ContactMap.css';

const ContactMap = () => {
    return (
      
        <div style={{clear:"left"}} className="p-5 m-2">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Main Location:</span> 50 Main st Boston MA
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Phone:</span> (555) 555-5555
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Phone:</span> (333) 333-3333
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Email:</span> (555)
                  enroll@frontendbc.test
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Email:</span>
                  student@frontendbc.test
                </li>
              </ul>
            </div>
            <div style={{position:"relative"}} className="col-md">
             {/* <div style={{}} ></div> */}
                <GoogleMap></GoogleMap>
              
            </div>
          </div>
        </div>
      </div>
  
    );
};

export default ContactMap;