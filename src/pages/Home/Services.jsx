import disease from "../../assets/disease.png";
import soil from "../../assets/soil.png";
import chat from "../../assets/chat.png";

const Services = () => {

  return (
    <>
      <section id="services" className="flex flex-col items-center py-10">
        <div className="w-full flex flex-col items-center lg:px-10  xl:px-0 sm:px-16 px-6 ml-0 lg:ml-10 ">
          <h1 className="font-bold text-[35px] ss:text-[50px] text-center mt-5">SERVICES WE OFFER</h1>

          {/* Service Buttons */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4  lg:px-10 mb-10">
            
            {/* Tree Disease Identification */}
            <a href="/disease-identification" className="flex items-center justify-center border rounded-lg p-4 bg-white shadow hover:shadow-lg cursor-pointer w-full sm:w-1/3">
              <div className="flex flex-row py-4 sm:flex-col lg:flex-row items-center space-x-2 sm:space-x-0 sm:space-y-2 lg:space-y-0">
                <div className="w-auto h-12 flex justify-center items-center">
                  <img src={disease} className="w-full h-full object-contain mr-4" />
                </div>
                <p className="text-[26px] text-[#537F19] font-bold text-center lg:text-left">DISEASE IDENTIFICATION</p>
              </div>
            {/* </div> */}
            </a>

            {/* Soil Profile */}
            <a href="/soil-profile" className="flex items-center justify-center border rounded-lg p-4 bg-white shadow hover:shadow-lg cursor-pointer w-full sm:w-1/3">
              <div className="flex flex-row py-4 sm:flex-col lg:flex-row items-center space-x-2 sm:space-x-0 sm:space-y-2 lg:space-y-0">
                <div className="w-auto h-12 flex justify-center items-center">
                  <img src={soil} className="w-full h-full object-contain mr-4" />
                </div>
                <p className="text-[26px] text-[#537F19] font-bold text-center lg:text-left">SOIL PROFILE</p>
              </div>
            </a>

            {/* Real-Time Chat Support */}
            <a href="/chat-support" className="flex items-center justify-center border rounded-lg p-4 bg-white shadow hover:shadow-lg cursor-pointer w-full sm:w-1/3">
              <div className="flex flex-row py-4 sm:flex-col lg:flex-row items-center space-x-2 sm:space-x-0 sm:space-y-2 lg:space-y-0">
                <div className="w-auto h-12 flex justify-center items-center">
                  <img src={chat} className="w-full h-full object-contain mr-4" />
                </div>
                <p className="text-[26px] text-[#537F19] font-bold text-center lg:text-left">REAL-TIME CHAT SUPPORT</p>
              </div>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;



