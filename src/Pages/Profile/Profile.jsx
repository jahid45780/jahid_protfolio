import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs, FaGithub,FaLinkedin,FaFacebook } from "react-icons/fa";
import { TbBrandMongodb } from "react-icons/tb";
import { HiLanguage } from "react-icons/hi2";
import { IoLogoFirebase } from "react-icons/io5";
const Profile = () => {
    return (
        <div className="mt-10 ml-10" >
           
            <img className=" w-44 h-36 border-4 border-black rounded-full" src="https://i.ibb.co/FW33S6X/1708586464218-removebg.png" alt="Jahid" />
            <h1 className=" text-center text-white font-bold mt-2 " > Md Jahid </h1>
            <p className=" text-center" > Front-End Developer </p>

            <section>
                <h1 className=" font-bold text-center text-2xl uppercase mt-5" >Skills</h1>
 
                <div 
                 className=" flex items-center justify-between hover:translate-x-5 hover:text-cyan-200 mt-4 gap-16" >
                    <h1 className=" text-xl" >HTML5</h1>
                    <FaHtml5 className="text-xl" ></FaHtml5>
                </div>
                <hr className=" mt-1" />
                <div 
                 className=" flex items-center justify-between mt-2 gap-16" >
                    <h1 className=" text-xl" >CSS</h1>
                    <FaCss3Alt className=" text-xl" ></FaCss3Alt>
                </div>
                <hr className=" mt-1" />
                <div className=" flex items-center justify-between mt-2 gap-16" >
                    <h1 className=" text-xl" >JavaScript</h1>
                     <IoLogoJavascript className=" text-xl" ></IoLogoJavascript>
                </div>
                <hr className=" mt-1" />
                <div className=" flex items-center justify-between mt-2 gap-16" >
                    <h1 className=" text-xl" >TailwindCSS</h1>
                    <SiTailwindcss className=" text-xl" ></SiTailwindcss>
                </div>
                <hr className=" mt-1" />
                <div className=" flex items-center justify-between mt-2 gap-16" >
                    <h1 className=" text-xl" >React Js</h1>
                    <RiReactjsFill className=" text-xl" ></RiReactjsFill>
                </div>
                <hr className=" mt-1" />
                <div className=" flex items-center justify-between mt-2 gap-16" >
                    <h1 className=" text-xl" > Firebase </h1>
                    <IoLogoFirebase className=" text-xl" ></IoLogoFirebase>
                </div>
                <hr className=" mt-1" />
                <div className=" flex items-center justify-between mt-2 gap-16" >
                    <h1 className=" text-xl" > Node Js </h1>
                    <FaNodeJs className=" text-xl" ></FaNodeJs>
                </div>
 
                <hr className=" mt-1" />
                <div className=" flex items-center justify-between mt-2 gap-16" >
                    <h1 className=" text-xl" > Express Js </h1>
                    <img className=" w-5 h-5 rounded-full" src="https://i.ibb.co/kJykGGP/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="" />
                </div>
                <hr className=" mt-1" />

                <div className=" flex items-center justify-between mt-2 gap-16" >
                    <h1 className=" text-2xl" > MongoDB </h1>
                     <TbBrandMongodb className=" text-xl" ></TbBrandMongodb>
                </div>
                <hr className=" mt-1" />
                <h1 className=" font-bold text-2xl text-center uppercase mt-5 " > Language </h1>
                
                <div className=" flex items-center mt-4 justify-between gap-16" >
                    <h1 className=" text-xl" > Bengali </h1>
                      <HiLanguage className=" text-xl" ></HiLanguage>
                </div>
                <hr className=" mt-1" />
                <div
                 className=" flex items-center justify-between mt-2 gap-16" >
                    <h1 className=" text-xl" > English </h1>
                    <HiLanguage className=" text-xl" ></HiLanguage>
                </div>
                <hr className=" mt-1" />
                  
                  <h1 className=" text-2xl text-center mt-4" >Get In Touch</h1>

                  <p className=" flex justify-center  mt-3 gap-3" >
                    <a className=" text-2xl" href="https://github.com/jahid45780"> <FaGithub></FaGithub> </a>
                    <a className=" text-2xl" href="https://www.linkedin.com/in/md-jahid-91589a295"> <FaLinkedin></FaLinkedin>  </a>
                    <a className=" text-2xl" href="https://www.facebook.com/mdjahid.hossain.16547"> <FaFacebook></FaFacebook> </a>
                  </p>

            </section>
            
        </div>
    );
};

export default Profile;

