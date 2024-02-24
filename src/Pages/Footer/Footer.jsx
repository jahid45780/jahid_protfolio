import { BiArrowToTop } from "react-icons/bi";
// import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {

      const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

    return (
        <div className=" p-2  mt-6" >
            <section className=" flex items-center gap-1 justify-between" >
                <h1 className=" text-lg font-semibold" >Copyright © 2024- All right reserved</h1>
                

           <button className="text-7xl bg-green-500 hover:bg-green-700 rounded-3xl text-black mr-10" onClick={scrollToTop}> <BiArrowToTop></BiArrowToTop> </button>
           
            </section>
        </div>
    );
};

export default Footer;