import React, {useState, useEffect } from 'react';
import fakeData from '../../fakeData/Instructors.json'
import Instructors from '../Instructors/Instructors';


const AllInstructors = () => {
    const data = fakeData;
    const [instructors, setInstructors] = useState(data)
   
    return (
        <div style={{width:"auto",backgroundColor:"black"}}>
            <section id="instructors" class="p-5 bg-primary">
             <div class="container">
                <h2 class="text-center text-white">Our Instructors</h2>
            <p class="lead text-center text-white mb-5">
              Our instructors all have 5+ years working as a web developer in the
             industry
            </p>
        <div style={{width:'900px',marginLeft:'auto', marginRight:'auto'}} class="row g-4">

            {
                instructors.map(data=>
                    <Instructors data={data.id} profile={data} ></Instructors>
                    )
            }
        </div>
            </div>
            </section>
        </div>
    );
};

export default AllInstructors;