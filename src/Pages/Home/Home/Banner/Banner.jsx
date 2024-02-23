import { FaDownload } from "react-icons/fa";
import { useScramble } from "use-scramble";
import Marquee from "react-fast-marquee";
const Banner = () => {

  const { ref, replay } = useScramble({ 
    text: "Md Jahid Hossain",
    speed: 0.9,
  });

    return (
      <section className="  grid lg:grid-cols-2 gap-4 md:grid-cols-1  justify-center items-center" >

         <div className=" lg:ml-40 mt-7 lg:mb-80" > 
              <h1 className=" text-xl  font-bold text-end bg-slate-950 p-3 rounded-t-[25px] rounded-b-[5px]" > Hi 👋, Iam </h1>
              <h1
                ref={ref} 
                onMouseOver={replay} 
                onFocus={replay} 
               className=" text-5xl text-cyan-400 mt-6 text-end" ></h1>
                
               <Marquee className=" text-xl mt-5 text-green-400" pauseOnHover={true} speed={45} > A Front-End Developer  </Marquee>

              <button className=" btn bg-cyan-400 mt-5 text-white text-xl lg:ml-[347px]  rounded-se-3xl rounded-bl-3xl hover:bg-cyan-500" > <a className=" flex items-center gap-2" href="" download='resume_Jahid' > Resume <FaDownload></FaDownload>  </a> </button>
    
    <h1 className="text-end font-bold text-xl text-orange-500 mt-20" >   Allah  Is The Owner Of Sustenance You Just Try </h1>
               <p className=" text-end font-bold text-2xl -mb-7 text-orange-600" > -Jahid </p>          

             </div>
       
         <div className="order-first md:order-last" >
         
         {/* <div className=" relative " >
         <svg  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#2aa48a" d="M35.5,-59.9C45.1,-55.9,51.4,-44.6,57,-33.4C62.6,-22.2,67.4,-11.1,72.2,2.8C77,16.7,81.8,33.3,75.7,43.6C69.6,54,52.7,58,38.3,58.2C23.9,58.4,11.9,54.8,-0.2,55.1C-12.3,55.4,-24.5,59.5,-32.8,55.8C-41.1,52,-45.4,40.3,-52.8,29.7C-60.3,19.1,-70.9,9.6,-71.2,-0.2C-71.6,-9.9,-61.6,-19.8,-55.5,-32.9C-49.4,-45.9,-47.2,-61.9,-38.6,-66.5C-30,-71.1,-15,-64.1,-1,-62.3C12.9,-60.5,25.9,-63.8,35.5,-59.9Z" transform="translate(100 100)" />
</svg>
         </div>

         <img className=" absolute  lg:h-[400px] h-[270px] lg:-mt-[533px] -mt-[361px] lg:ml-48 ml-[128px] " src="https://i.ibb.co/020bz1H/IMG-20240222-135441-removebg-preview.png" alt="" />     */}
     <img className=" w-[700px]" src="https://i.ibb.co/hZ4z4kf/blob.png" alt="" />
 </div>
 

         {/* 2 */}
      

      </section>
    );
};

export default Banner;
