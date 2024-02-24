import { FaLink } from "react-icons/fa6";


const Project = () => {
     return (
        <div>
 <h1 className="text-5xl mb-12 text-center mt-14  text-green-500" > Project 🚩 </h1>
  
    <section className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 m-3 " >
        
       
        {/* 1 */}

        <div data-aos="zoom-in-up"
         className="bg-slate-900 px-3 rounded-ee-[30px] rounded-es-[30px] rounded-se-[15px] rounded-ss-[15px] " >
            <img className=" hover:scale-105 transition  h-60 rounded-t-md"
               src="https://i.ibb.co/6PWbxhZ/423472186-1458589361404948-6683822442649877799-n.png" alt="restaurant" />
            <h1 className=" text-4xl font-bold text-center text-fuchsia-300 mt-3" > The Restaurant </h1>
            <a className=" flex items-center justify-center text-fuchsia-300 gap-2 text-2xl mt-3 font-medium " href="https://bistro-boss-13801.web.app"> <FaLink></FaLink> Live </a>
        </div>
        {/* 2 */}
        <div data-aos="zoom-in-up"
         className="bg-slate-900 px-3 rounded-ee-[30px] rounded-es-[30px] rounded-se-[15px] rounded-ss-[15px] " >
            <img className=" hover:scale-105 transition h-60  rounded-t-md"
               src="https://i.ibb.co/cYWjx7m/423686915-403037528880110-8436789025058565793-n.png" alt="restaurant" />
            <h1 className=" text-4xl font-bold text-center text-fuchsia-300 mt-3" > Clothing Store </h1>
            <a className=" flex items-center justify-center text-fuchsia-300 gap-2 text-2xl mt-3 font-medium " href="http://chothingcollation23.surge.sh"> <FaLink></FaLink> Live </a>
        </div>
                {/* 3 */}
                <div data-aos="zoom-in-up"
                className="bg-slate-900 px-3  rounded-ee-[30px] rounded-es-[30px] rounded-se-[15px] rounded-ss-[15px] " >
            <img className=" hover:scale-105 transition h-60  rounded-t-md"
               src="https://i.ibb.co/m8dNK3G/423454250-7156797664428079-7215351572112543366-n.png" alt="restaurant" />
            <h1 className=" text-4xl font-bold text-center text-fuchsia-300 mt-3" > Prothom Alo </h1>
            <a className=" flex items-center justify-center text-fuchsia-300 gap-2 text-2xl mt-3 font-medium " href="https://prothomalo-c869c.web.app"> <FaLink></FaLink> Live </a>
        </div>
        {/* 4 */}
        <div data-aos="zoom-in-up"
        className="bg-slate-900 px-3 rounded-ee-[30px] rounded-es-[30px] rounded-se-[15px] rounded-ss-[15px] " >
            <img className=" hover:scale-105 transition h-60  rounded-t-md"
               src="https://i.ibb.co/yWgxp0j/423063026-7934489486581192-4952833693313486314-n.png" alt="restaurant" />
            <h1 className=" text-4xl font-bold text-center text-fuchsia-300 mt-3" > Study-With-Jahid </h1>
            <a className=" flex items-center justify-center text-fuchsia-300 gap-2 text-2xl mt-3 font-medium " href="http://study-with-jahid.surge.sh"> <FaLink></FaLink> Live </a>
        </div>
        {/* 5 */}
        <div data-aos="zoom-in-up"
        className="bg-slate-900 px-3 rounded-ee-[30px] rounded-es-[30px] rounded-se-[15px] rounded-ss-[15px] " >
            <img className=" hover:scale-105 transition h-60  rounded-t-md"
               src="https://i.ibb.co/MB1CjNs/423472134-1079658809914651-2864576918976890416-n.png" alt="restaurant" />
            <h1 className=" text-4xl font-bold text-center text-fuchsia-300 mt-3" > The Donation </h1>
            <a className=" flex items-center justify-center text-fuchsia-300 gap-2 text-2xl mt-3 font-medium " href="https://donation-bd.surge.sh"> <FaLink></FaLink> Live </a>
        </div>
        {/* 6 */}
        <div data-aos="zoom-in-up"
        className="bg-slate-900 px-3 rounded-ee-[30px] rounded-es-[30px] rounded-se-[15px] rounded-ss-[15px] " >
            <img className=" hover:scale-105 transition  h-60 w-96 rounded-t-md"
               src="https://i.ibb.co/f1W7BZq/423472292-373334398959442-8059960308667372083-n.png" alt="restaurant" />
            <h1 className=" text-4xl font-bold text-center text-fuchsia-300 mt-3" > Management </h1>
            <a className=" flex items-center justify-center text-fuchsia-300 gap-2 text-2xl mt-3 font-medium " href="https://wedding-management-b09ed.web.app"> <FaLink></FaLink> Live </a>
        </div>
        </section> 
        </div>
    );
};

export default Project;