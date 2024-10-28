import styles from "../../style";

const GetStarted = () => {

  return (
    <>
      <section id="get-started"
        className={`mt-20 flex md:flex-row flex-col ${styles.paddingY}`}
        style={{ 
          backgroundImage: "url('src/assets/bck.png')", 
          backgroundSize: '65% auto', 
          backgroundPosition: 'right bottom', 
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ml-0 lg:ml-10 `}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="mt-10 flex-1 font-poppins font-semibold text-[30px] ss:text-[40px] text-[#537F19] ss:leading-[60px] leading-[35px]">
              WELCOME TO <br />
              <span className="text-black font-bold text-[60px] ss:text-[80px]">NiyogHub</span>
            </h1>
          </div>
          <p className={` max-w-[530px] my-10 text-blacks `}>
            NiyogHub represents a shared vision for a time when every coconut farmer will have the means to prosper in an inclusive and sustainable farming environment. This offers essential resources like real-time chat support, sustainability map, disease identification, and provides relevant information. 
          </p>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <button 
              type="button" 
              className="relative py-2 px-4 md:py-2 md:px-6 text-[14px] md:text-[16px] text-white bg-[#537F19] rounded-tr-[10px] rounded-bl-[10px] outline-none outline outline-[2px] outline-black outline-t-.5 outline-offset-[-.5px] shadow-[5px_5px_0px_0px_#000000] hover:shadow-[0px_0px_0px_0px_#000000] transition-all duration-300 mb-3"
            >
              Get Started →
            </button>

            <button 
              type="button" 
              className="relative py-2 px-4 md:py-2 md:px-6 text-[14px] md:text-[16px] text-black bg-white border-[2px] border-black rounded-tr-[10px] rounded-bl-[10px] outline-none shadow-[5px_5px_0px_0px_#000000] hover:shadow-[0px_0px_0px_0px_#000000] transition-all duration-300 mb-3"
            >
              Learn More →
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default GetStarted;


