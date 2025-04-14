import React from "react";
import Ring from "../assets/image/crousel/ring.jpg";
import AboutImg from "../assets/image/crousel/about.jpg";
import Aboutbg from "../assets/image/tranding/bg-03.jpg";

const About = () => {
  return (
    <div className="pb-8">
      <div
        style={{ backgroundImage: `url(${Ring})` }}
        className="bg-center bg-no-repeat bg-cover h-96"
      >
        <div className="p-32">
          <h1 className="text-center text-white justify-items-center">
            A few words
          </h1>
          <h6 className=" text-center text-white text-7xl justify-items-center ">
            About us
          </h6>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p className=" pt-28">Mattis velit eget</p>
          <h1 className=" flex  pr-[248px] text-5xl leading-[1.5] mb-8">
            About the founder
          </h1>
          <p className="pr-[400px] text-xl font-serif">
            Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in
            dolor velit.
          </p>
          <p className=" pr-48 font-thin pt-11  text-zinc-600">
            Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum
            mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum
            dictum eget. Mauris in dolor velit. Vestibulum finibus felis non
            massa commodo molestie at id justo. Quisque sollicitudin elit sit
            amet facilisis euismod. Fusce at arcu sed.Nam rutrum mattis velit
            eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget.
          </p>
        </div>
        <div className=" pt-8">
          <img
            src={AboutImg}
            alt="About image"
            className=" w-[650px] h-[750px] "
          />
        </div>
      </div>
      <div className=" pt-8">
        <img
            src={Aboutbg}
            alt="About image"
            className="  w-screen h-[500px] "
          />
        </div>
    </div>
  );
};

export default About;
