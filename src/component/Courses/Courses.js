import {Container,Row} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
// import fakeData from '../../fakeData/Courses'
import CouresDetail from '../CoursDetails/CouresDetail';

const Courses = () => {
    // const fakeData4 = fakeData.slice(0,4)
    // const[courses,setCourses]= useState(fakeData4);
   
    return (
        <Container style={{width:"auto",backgroundColor:"black"}} >
            <h1>heloo</h1>
            {/* <Row style={{background:'red',textAlign:'center',width:'1100px',marginLeft:'auto', marginRight:'auto' }} >

            {
                courses.map(cors=> <CouresDetail key={cors.id} courses={cors} ></CouresDetail> )
            }
            
            </Row> */}
            
        </Container>
    );
};

export default Courses;