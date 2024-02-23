

const Service = () => {
    return (
        <div>
            
            <h1 className=" text-green-500 text-center  mt-14 text-5xl" > Services 🚩 </h1>

         <section className=" grid lg:grid-cols-2  cursor-help gap-4 mt-5 m-5 md:grid-cols-1" >
            
            <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
             className=" bg-slate-900 p-3 rounded-ss-[25px] rounded-es-xl rounded-ee-[75px] rounded-se-xl shadow-lg " >
                <h1 className=" text-4xl text-center text-fuchsia-300" > Full Stack Developer </h1>
                <p className=" text-xl mt-2" > 
                    
                I provide MERN development services, using MongoDB, Express, React and Node to create user-friendly , fully start to end , responsive web interfaces.
                    
                     </p>
            </div>
            
  
          <div className="bg-slate-900 p-3 rounded-ss-[25px] rounded-es-xl rounded-ee-[75px] rounded-se-xl shadow-lg" >
            <h1 className="text-4xl text-center text-fuchsia-300" > E-Commerce Website </h1>
            <p className=" text-xl mt-2" > Integration of eCommerce payment gateways (stripe) custom product templates many more. </p>
          </div>  

          
          <div className="bg-slate-900 p-3 rounded-ss-[25px] rounded-es-xl rounded-ee-[75px] rounded-se-xl shadow-lg" >
            
            <h1 className=" text-4xl text-center text-fuchsia-300 " > Mobile responsive </h1>
            <p className=" text-xl mt-2" > I can make web application in to mobile responsive using css framework like Bootstrap, react bootstrap and TailwindCSS </p>
             </div>

            </section>   

           

        </div>
    );
};

export default Service;