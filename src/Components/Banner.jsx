import React from "react";
import banner1 from "../../public/assets/banner1.jpg";
import camera from "../../public/assets/camera.png";
import bnr from "../../public/assets/bnr.png";

const Banner = () => {
    return (
        <div className="myBanner bg-[#293E59] w-full h-[90vh] flex :bg-white relative" >
          {/* Conditional background image styling based on screen size */}
          <div className="w-full md:w-[55%] p-8 text-white flex flex-col justify-center">
            <h1 className="text-[#D04E68] font-bold text-xl sm:text-5xl mb-4">
              Embrace the future of security with SecureAI where innovation meets safety.
            </h1>
            <h4 className="text-sm sm:text-xl text-white">
              SecureAI brings the future of home security to your doorstep. Our AI-driven system records a 30-second video of any person outside your home, promptly triggers an alarm, and securely stores the footage. With SecureAI, your home’s safety is elevated, providing you with unmatched security and peace of mind.
            </h4>
            <div className="w-max rounded-full mx-auto mt-7 hover:scale-105">
              <a href="https://secure-ai.vercel.app/"><img src={camera} alt="Camera" className="h-28 sm:h-40" /></a>
            </div>
          </div>
          <img src={bnr} alt="" className="hidden lg:flex w-[45%]"/>
        </div>
      );
//   return (
//     <div className="bg-[#293E59] w-full flex h-[90vh] " style={{backgroundImage:`url(${bnr})` , backgroundPosition:'right', backgroundRepeat:'no-repeat' , backgroundSize:'contain'}}>
//       <div className="w-[50%] p-8 text-white flex flex-col justify-center ">
//         <h1 
//         className="text-[#D04E68] font-bold  text-[40px] mb-4"
//         >Embrace the future of security with SecureAI where innovation meets safety.</h1>
//         <h4
//         className="text-xl text-white"
//         >SecureAI brings the future of home security to your doorstep. Our AI-driven system records a 30-second video of any person outside your home, promptly triggers an alarm, and securely stores the footage. With SecureAI, your home’s safety is elevated, providing you with unmatched security and peace of mind</h4>
//         <div className="border-[#D04E68] border-2 w-max rounded-full mx-auto mt-7 hover:scale-105">
//         <a href=""><img src={camera} alt="" className="h-32"/></a>
//         </div>
//       </div>
//     </div>
//   );
};

export default Banner;
