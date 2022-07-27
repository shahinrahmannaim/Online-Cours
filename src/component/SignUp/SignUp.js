import React from 'react';
import image from '../../images/draw2.webp';


const SignUp = () => {
    return (
        <div>
              <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={image} className="img-fluid" alt="Sampleimage" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="bi bi-facebook"></i>
                  </button>
      
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="bi bi-twitter"></i>
                  </button>
      
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="bi bi-linkedin"></i>
                  </button>
                </div>
      
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
      
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter your full name" />
                </div>
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" />
                </div>
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid phone number" />
                </div>
      
                <div className="form-outline mb-3">
                  <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" />
                </div>
      
                
      
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-primary btn-lg"
                    style={{paddingLeft:"2.5rem", paddingRight:"2.5rem"}}>Register</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">have an account? <a href="/login"
                      className="link-danger">Login</a></p>
                </div>
      
              </form>
            </div>
          </div>
        </div>
        
      </section>
        </div>
    );
};

export default SignUp;