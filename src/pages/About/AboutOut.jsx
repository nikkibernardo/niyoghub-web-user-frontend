
import LayoutOut from "../../layout/LayoutOut";
import styles from "../../style";
import logo from "../../assets/black.png";
import enya from "../../assets/enya.png";
import eli from "../../assets/eli.png";
import nikki from "../../assets/nikki.png";

const AboutOut = () => {


  return (
    <>
      <LayoutOut>
        <div className="relative flex-1 overflow-y-auto overflow-hidden ">
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
            
              <div className="my-10 mx-5 xl:mx-20 lg:mx-20 md:mx-10 sm:mx-10 ss:mx-10 xs:mx-10 flex flex-col items-center outline-none outline outline-[2px] outline-black outline-t-1 outline-offset-[-1px]">
                <div className="w-full flex flex-col items-center lg:px-10  xl:px-0 ml-0 lg:ml-5 mt-10">
                  <img src={logo} className="w-full h-20 object-contain" />
                  <h1 className="font-bold text-[30px] ss:text-[50px] text-center ">NiyogHub</h1>

                  <h1 className="font-bold text-[15px] ss:text-[28px] text-center pt-5">About</h1>
                  <h4 className="text-start pt-5 px-5 lg:px-20 xl:px-20 md:px-20 sm:px-10">
                    NiyogHub`s mission is to empower coconut farmers by providing them with essential tools and resources to thrive in their livelihood and farming endeavors. Through our comprehensive web and mobile application, farmers gain access to features such as disease identification, a sustainability guide map, and real-time chat support, enabling informed decision-making and efficient farming practices. <br /><br />
                    Aligned with four key Sustainable Development Goals (SDGs), NiyogHub aims to address the multifaceted challenges faced by coconut farmers. We strive to reduce poverty by providing access to vital information, resources, and government support, thereby optimizing resource utilization and improving livelihoods. Additionally, we promote sustainable farming methods to enhance food security, foster economic growth by offering timely information and tools for disease detection and sustainable practices, and drive technological innovation by introducing modern solutions to traditional agricultural practices, empowering farmers with innovative tools for enhanced productivity and decision-making. <br /><br />
                    NiyogHub aims to enable coconut farmers to thrive by equipping them with the necessary resources and support to succeed in the coconut agriculture industry.
                  </h4>

                  <h1 className="font-bold text-[22px] ss:text-[28px] text-center pt-8">Our Team</h1>
                  <div className="w-full flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4  lg:px-10 mb-10">
                    {/* Eli */}
                    <div href="/soil-profile" className="flex items-center justify-center  rounded-lg p-4 bg-white hover:shadow-lg cursor-pointer w-full sm:w-1/3">
                      <div className="flex flex-col py-4 sm:flex-col lg:flex-col items-center space-x-2 sm:space-x-0 sm:space-y-2 lg:space-y-0">
                        <div className="w-auto h-16 flex justify-center items-center">
                          <img src={eli} className="w-full h-full object-contain mr-4" />
                        </div>
                        <p className="text-[16px] ss:text-[20px] font-bold text-center lg:text-left">Eligio Bautista</p>
                      </div>
                    </div>
                    {/* Enya */}
                    <div href="/disease-identification" className="flex items-center justify-center rounded-lg p-4 bg-white hover:shadow-lg cursor-pointer w-full sm:w-1/3">
                      <div className="flex flex-col py-4 sm:flex-col lg:flex-col items-center space-x-2 sm:space-x-0 sm:space-y-2 lg:space-y-0">
                        <div className="w-auto h-16 flex justify-center items-center">
                          <img src={enya} className="w-full h-full object-contain mr-4" />
                        </div>
                        <p className="text-[16px] ss:text-[20px]  font-bold text-center lg:text-left text-center">Leona Nashtasjia Almendras</p>
                      </div>
                    </div>
                    {/* Nikki */}
                    <div href="/chat-support" className="flex items-center justify-center rounded-lg p-4 bg-white  hover:shadow-lg cursor-pointer w-full sm:w-1/3">
                      <div className="flex flex-col py-4 sm:flex-col lg:flex-col items-center space-x-2 sm:space-x-0 sm:space-y-2 lg:space-y-0">
                        <div className="w-auto h-16 flex justify-center items-center">
                          <img src={nikki} className="w-full h-full object-contain mr-4" />
                        </div>
                        <p className="text-[16px] ss:text-[20px] font-bold text-center lg:text-left">Marianne Nikki Bernardo</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOut>
    </>
  );
};

export default AboutOut;