

import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Education from "../../Education/Education";
import Footer from "../../Footer/Footer";
import Profile from "../../Profile/Profile";
import Project from "../../Project/Project";
import Service from "../../Service/Service";
// import Navbar from "../Navber/Navbar";
import Banner from "./Banner/Banner";



const Home = () => {
    return (
        <div className="flex justify-around" >

            <div className=" max-w-lg hidden md:block" >
                    
           <Profile></Profile>
            </div>

        <div className="" >
        {/* <Navbar></Navbar>  */}
        <Banner></Banner>
         <About></About>
         <Service></Service>
         <Project></Project>
         <Education></Education>
         <Contact></Contact>
         <Footer></Footer>
            </div>  

        </div>
    );
};

export default Home;