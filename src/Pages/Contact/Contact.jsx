import { MdAddLocationAlt } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        
        e.preventDefault();
        
        emailjs
          .sendForm('service_4ok9spk', 'template_6eho739', form.current, {
            publicKey: 'QD74TVDoJG5EJa4-D',
          })
          .then(
            
            () => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Thank you for contacting",
                    showConfirmButton: false,
                    timer: 1500
                  });
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };


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
    <form ref={form} onSubmit={sendEmail} >
        <input placeholder=" Full Name" name="from_name" required className=" border-2 border-white w-96 h-12 text-2xl text-orange-500 rounded-xl" type="text"  id="" /> <br />
        <input placeholder=" Email" name="from_email" required className="border-2 border-white w-96 h-12 text-2xl text-orange-500 rounded-xl mt-3" type="email" id="" /> <br />
        <textarea placeholder=" Message" name="message" required className="border-2 border-white w-96 h-20 text-2xl text-orange-500 rounded-xl mt-3" cols="18" rows="2"></textarea> <br />
         <input className=" btn w-96 mt-3 bg-green-500 hover:bg-green-700 text-white text-2xl" type="submit" value="Sent" />
        
    </form>
</section>

</div>


      </div>
    );
};

export default Contact;