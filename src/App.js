import logo from './logo.svg';


import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import {Container,Row} from 'react-bootstrap';
import Showcase from './component/Showcase/Showcase';
import Learn from './component/Learn/Learn';
import FrequentlyAskedQuestions from './component/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import Instructors from './component/Instructors/Instructors';
import ContactMap from './ContactMap/ContactMap';
import { Routes, Route, Link } from "react-router-dom";
import LogIn from './component/LoginIn/LogIn';
import SignUp from './component/SignUp/SignUp';
import AllInstructors from './component/AllInstructors/AllInstructors';



function App() {
  return (
    <div>
  <Header></Header>
  <Routes>
    <Route exact path="/" element={<Home/>} />
      <Route path="/instructors" element={<AllInstructors/>} />  
      <Route path="/contact" element={<ContactMap/>} />  
      <Route path="/login" element={<LogIn/>} />  
      <Route path="/signup" element={<SignUp/>} />  
        {/* <Instructors></Instructors> */}
        {/* <ContactMap></ContactMap>      */}
  </Routes>
    <Footer></Footer>
    </div>
       
  );
}

export default App;
