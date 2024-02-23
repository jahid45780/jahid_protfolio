

const About = () => {
    return (
      <section className=" lg:m-3 m-10 " >
          <div className=" grid lg:grid-cols-2 gap-2 md:grid-cols-1  justify-center items-center" >
  <div >
  <h1 className=" text-5xl mb-12 text-center  text-green-500 " > About Me 🚩 </h1>
  <p className=" text-xl m-4" > Hello guys!! I am Md Jahid from Bangladesh.
  Currently Im a student of CSE (Computer Science & Engineering)
  Im a passionate web developer with a keen eye for detail, and a drive to create elegant, efficient, and user-friendly web app. With over 1+ years of experience in web development, Ive honed my skills in a variety of technologies, including ReactJs, NextJs, Nodejs,ExpressJs,Firebase, Javascript es6+ and MongoDb
     </p>
  </div>

  <div>
  <img className=" w-full h-80 rounded-ss-[45px] rounded-es-xl rounded-se-xl  rounded-ee-[45px] " src="https://i.ibb.co/mHSQwPz/uwu-cat-unscreen-1.gif" alt="" />
  </div>

 </div>
      </section>
    );
};

export default About;