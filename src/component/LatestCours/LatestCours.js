import fakeCours from '../../fakeCours/fakeCours'
import {Container} from 'react-bootstrap';
import React from 'react';
import LatestCoursDetails from './LatestCoursDetails';

const LatestCours = () => {
    const fakeData4 = fakeCours.slice(0,4)
    return (
        <div className="" >
            <h2 class="text-center  mt-2 text-dark">Our Latest Courses</h2>
            <div>
               
                <div style={{marginLeft:"80px"}} class="row g-2">
                {
                    fakeData4.map(cours=>
                        <LatestCoursDetails data={cours} ></LatestCoursDetails>
                        )
                }
                </div>
           </div>
        </div>
    );
};

export default LatestCours;