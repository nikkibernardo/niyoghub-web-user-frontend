import poverty from "../../assets/poverty.png";
import sustainable from "../../assets/sustainable.png";
import eco from "../../assets/eco.png";
import techno from "../../assets/techno.png";
import styles from "../../style";
const Sdg = () => {

  return (
    <>
      <section 
        id="sdg"  
        className={`flex flex-col ${styles.padding}`}
        style={{ 
          backgroundImage: "url('/src/assets/sdg.png')",
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="py-10 w-full flex flex-col items-center lg:px-10 xl:px-0 sm:px-16 px-6 ml-0 lg:ml-10">
          <h1 className="font-bold text-[35px] ss:text-[50px] text-center mt-5">
            EMPOWERING COCONUT FARMERS THROUGH FOUR GLOBAL SDGs
          </h1>


          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8 text-center lg:text-left">
              {/* Reducing Poverty */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                  <img src={poverty} className="w-full h-full object-contain" />
                </div>
                <h2 className="text-[24px] sm:text-[26px] text-[#537F19] font-bold">REDUCING POVERTY</h2>
                <p className="text-gray-600 text-[14px] sm:text-[16px]">
                  NiyogHub aims to reduce poverty among coconut farmers by providing access to vital information, resources, and government support. This helps optimize resource utilization and improve their livelihoods.
                </p>
              </div>

              {/* Sustainable Farming */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                  <img src={sustainable} className="w-full h-full object-contain" />
                </div>
                <h2 className="text-[24px] sm:text-[26px] text-[#537F19] font-bold">SUSTAINABLE FARMING</h2>
                <p className="text-gray-600 text-[14px] sm:text-[16px]">
                  NiyogHub encourages coconut farmers to use sustainable farming methods to increase food security.
                </p>
              </div>

              {/* Economic Growth */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                  <img src={eco} className="w-full h-full object-contain" />
                </div>
                <h2 className="text-[24px] sm:text-[26px] text-[#537F19] font-bold">ECONOMIC GROWTH</h2>
                <p className="text-gray-600 text-[14px] sm:text-[16px]">
                  NiyogHub promotes economic growth by providing timely information and disease detection tools, enabling farmers to increase yields and income.
                </p>
              </div>

              {/* Technological Innovation */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                  <img src={techno} className="w-full h-full object-contain" />
                </div>
                <h2 className="text-[24px] sm:text-[26px] text-[#537F19] font-bold">TECHNOLOGICAL INNOVATION</h2>
                <p className="text-gray-900 text-[14px] sm:text-[16px]">
                  NiyogHub introduces technological solutions to traditional agricultural practices, empowering farmers with innovative tools to enhance their techniques.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sdg;