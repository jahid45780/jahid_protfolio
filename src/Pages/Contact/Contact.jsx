import { MdAddLocationAlt } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
const Contact = () => {
    return (
      <div className=" mt-20" >


<div className=" grid lg:grid-cols-2 items-center gap-5 justify-center grid-cols-1" >

<section className=" text-center text-white" >
    <h1 className="text-5xl  text-green-500" > Get In Touch 🚩 </h1>
     
     <p className=" text-2xl font-semibold mt-5" > Fill in the form to start a conversation </p>
    <div className=" space-y-2 mt" >
    <p className=" flex gap-3 items-center justify-center text-xl font-bold mt-3 mx-auto" > <MdAddLocationAlt></MdAddLocationAlt> Mirpur, Dhaka </p>
    <p className="flex gap-3 items-center justify-center text-xl font-bold mx-auto" > <FaPhoneAlt></FaPhoneAlt>  +8801763943446 </p>
    <p className="flex gap-3 items-center justify-center text-xl font-bold mx-auto" > <MdMarkEmailRead></MdMarkEmailRead>  jahidhossain88899@gmail.com </p>
    </div>
   
</section>

<section className="text-center lg:mr-64" >
    <form>
        <input placeholder=" Full Name" className=" border-2 border-white w-96 h-12 text-2xl text-orange-500 rounded-xl" type="text" name="" id="" /> <br />
        <input placeholder=" Email" className="border-2 border-white w-96 h-12 text-2xl text-orange-500 rounded-xl mt-3" type="email" name="" id="" /> <br />
        <textarea placeholder=" Message" className="border-2 border-white w-96 h-20 text-2xl text-orange-500 rounded-xl mt-3" cols="18" rows="2"></textarea> <br />
         <input className=" btn w-96 mt-3 bg-green-500 hover:bg-green-700 text-white text-2xl" type="submit" value="Sent" />
        
    </form>
</section>

</div>


      </div>
    );
};

export default Contact;