
import styles from "../../style";

const More = () => {
  return (
    <>
      <section 
        id="sdg"  
        className={`flex flex-col ${styles.padding}`}
        style={{ 
          backgroundImage: "url('/src/assets/more.png')",
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="py-10 w-full flex flex-col items-center lg:px-10 xl:px-0 sm:px-16 px-6 ml-0 lg:ml-10">
          <h1 className="font-bold text-[35px] ss:text-[50px] text-center mt-5">
            WHATS MORE TO KNOW
          </h1>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8 text-center lg:text-left">

            <a href="/copra-price" className="flex items-center justify-center border rounded-lg p-4 bg-white shadow hover:shadow-lg cursor-pointer w-full sm:w-1/3">
              <div className="flex flex-row py-4 sm:flex-col lg:flex-row items-center space-x-2 sm:space-x-0 sm:space-y-2 lg:space-y-0">
                <div className="w-auto h-12 flex justify-center items-center">
                </div>
                <p className="text-[26px] text-[#537F19] font-bold text-center lg:text-left">COPRA PRICE WATCH</p>
              </div>
            {/* </div> */}
            </a>
            <a href="/coconut-intercropping" className="flex items-center justify-center border rounded-lg p-4 bg-white shadow hover:shadow-lg cursor-pointer w-full sm:w-1/3">
              <div className="flex flex-row py-4 sm:flex-col lg:flex-row items-center space-x-2 sm:space-x-0 sm:space-y-2 lg:space-y-0">
                <div className="w-auto h-12 flex justify-center items-center">
                </div>
                <p className="text-[26px] text-[#537F19] font-bold text-center lg:text-left">COCONUT INTERCROPPING</p>
              </div>
            {/* </div> */}
            </a>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default More;