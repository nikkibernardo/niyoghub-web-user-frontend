
const NewsPrograms = () => {

  return (
    <>
      <section id="news-programs" className="flex flex-col items-center py-10">
        <div className="w-full flex flex-col items-center lg:px-10  xl:px-0 sm:px-16 px-6 ml-0 lg:ml-10 ">
          <h1 className="font-bold text-[30px] ss:text-[45px] text-center mt-5">RECENT NEWS & PROGRAMS</h1>

          {/* Service Buttons */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4  lg:px-10 mb-10">
            
           <h1>RECENT NEWS AND PROGRAMS HERE</h1>
          </div>

          <div className="text-center mt-4 text-gray-600 py-2 px-10 bg-[#537F19]">  
            <a href="/all-news-programs" className=" text-white">View All News and Programs</a>
        </div>

        </div>
      </section>
    </>
  );
};

export default NewsPrograms;