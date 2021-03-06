import React from 'react';
import { Container,Row,Col, Card,Button} from 'react-bootstrap';
import './CoursDetails.css';

const CouresDetail = (props) => {
    const {language,icon}=props.cours;
    return (
      <div style={{float:'left',width:"200px"}} className="m-3" >
          {/* <div className="col-md-3 col-lg-3"> */}
            <div  className="card bg-light">
              <div  className="card-body text-center">
                <img src={icon} style={{width:"100px"}} className="rounded-circle mb-3"  alt=""
                />
               
                <h3 className="card-title mb-3">{language} </h3>
              

                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <button
              className="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >
              Enroll Now
            </button>
              </div>
            </div>
            {/* </div> */}
            </div>
           
    );
};

export default CouresDetail;