import React from 'react';


const Instructors = (props) => {
  const {name,language,img,icon} = props.profile;
    return (
       
        <div style={{float:'left',width:'45%'}} className="m-3" >
          <div className="col-md-6 col-lg-3">
            <div style={{width:'403px'}} className="card bg-light">
              <div  className="card-body text-center">
                <img src={img} className="rounded-circle mb-3"  alt=""
                />
               
                <h3 className="card-title mb-3">{name}</h3>
                <h3 className="card-title mb-3">{language} <img style={{width:'100px'}} className="rounded-circle mb-3" src={icon} alt="" /> </h3>
               

                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                
                <a href="/"><i className="text-dark mx-1"></i></a>
                <a href="/"><i className="bi bi-facebook text-dark mx-1"></i></a>
                <a href="/"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="/"><i className="bi bi-instagram text-dark mx-1"></i></a>
              </div>
            </div>
            </div>
            </div>
          

          
       
    );
};

export default Instructors;