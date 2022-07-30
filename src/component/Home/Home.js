import React from 'react';
import Courses from '../Courses/Courses';
import Showcase from '../Showcase/Showcase';
import Box from '../Box/Box';
import Learn from '../Learn/Learn';
import FrequentlyAskedQuestions from '../FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import LatestCours from '../LatestCours/LatestCours';
// import './Home.css'


const Home = () => {
    return (
        <div  >
            <Showcase></Showcase>
            <LatestCours></LatestCours>
            <Box></Box>
            <Learn></Learn>
            <FrequentlyAskedQuestions></FrequentlyAskedQuestions>




        </div>
    );
};

export default Home