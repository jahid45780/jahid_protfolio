const Education = () => {
    return (
        <div className=" m-2" >
            <h1 className="text-5xl mb-12 text-center mt-14  text-green-500" > Education 🚩 </h1>
            
            <p className=" text-3xl font-bold " > Completed SSC and Currently Studying Computer Science <br /> Engineering (NPI) </p>

            <section className=" max-w-4xl bg-slate-900 hover:bg-slate-950 pb-8 rounded-lg mt-6 lg:ml-32 " >
                <div className=" flex items-center " >
                <img  className=" w-32 h-32 rounded-full" src="https://i.ibb.co/BC7mpG7/31279709-7818779-removebg-preview.png" alt="" /> 
                <h1 className=" text-4xl" >  Barguna Technical School & College </h1>
                    
               </div>
              
              <div className=" flex items-center ml-32" >
                <h1 className=" text-2xl" >Secondary School Certificate (SSC)</h1>
                 <h1 className=" text-2xl ml-10" > Barguna, Barisal </h1>
              </div>
                   
            </section>

            <section className=" max-w-4xl bg-slate-900 hover:bg-slate-950 pb-8 rounded-lg mt-6 lg:ml-32 " >
                <div className=" flex items-center " >
                <img  className=" w-32 h-32 rounded-full" src="https://i.ibb.co/WNhjYqZ/cse-logo-cse-letter-cse-letter-logo-design-initials-cse-logo-linked-with-circle-and-uppercase-monogr.png" alt="" /> 
                <h1 className=" text-4xl" >  Department of Computer Science & Engineering  </h1>
                    
               </div>
              
              <div className=" flex items-center ml-32" >
                <h1 className=" text-2xl" >Computer Science & Engineering</h1>
                 <h1 className=" text-2xl ml-10" > Dhaka </h1>
              </div>
              <p className=" text-2xl ml-32" >Running (2020-2024)</p>
            </section>
            

        </div>
    );
};

export default Education;