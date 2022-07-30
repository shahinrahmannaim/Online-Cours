import React, {  useState } from 'react';
import fakeCours from '../../fakeCours/fakeCours'
import CouresDetail from '../CoursDetails/CouresDetail';

const Courses = () => {
    const fakeData = fakeCours;
    const[courses,setCourses]= useState(fakeData);
   
    return (

        <div style={{backgroundColor:"black"}}>
        <section id="instructors" class="p-5 ">
         <div class="container">
            <h2 class="text-center text-white">Our Courses</h2>
        <p class="lead text-center text-white mb-5">
          Our instructors all have 5+ years working as a web developer in the
         industry
        </p>
    <div style={{marginLeft:"100px"}} class="row g-2">

    {
                            courses.map(cours=> <CouresDetail  cours={cours} ></CouresDetail> )
                        }
                
    </div>
        </div>
        </section>
    </div>
           
    );
};

export default Courses;