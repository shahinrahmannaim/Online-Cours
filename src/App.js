import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import ContactMap from './ContactMap/ContactMap';
import { Routes, Route} from "react-router-dom";
import LogIn from './component/LoginIn/LogIn';
import SignUp from './component/SignUp/SignUp';
import AllInstructors from './component/AllInstructors/AllInstructors';
import Courses from './component/Courses/Courses';
import PageNotFound from './component/PageNotFound/PageNotFound';



function App() {
  return (
    <div style={{minHeight:"90vh",display:"flex",flexDirection:"column"}}>
  <Header></Header>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="*" element={ <PageNotFound/>}/>  
      <Route path="/instructors" element={<AllInstructors/>} />  
      <Route path='/courses' element={<Courses />}/>
      <Route path="/contact" element={<ContactMap/>} />  
      <Route path="/login" element={<LogIn/>} />  
      <Route path="/register" element={<SignUp/>} />  
  </Routes>
    <Footer></Footer>
    </div>
       
  );
}

export default App;
