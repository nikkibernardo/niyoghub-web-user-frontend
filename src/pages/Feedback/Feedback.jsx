import Layout from "../../layout/Layout";
import { useState } from 'react';

const Feedback = () => {
  const [inputFeedback, setInputFeedback] = useState('');

  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <Layout>
        <div className="my-container mt-5"> 
          <a href="/" className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-black-500 transition"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M15.354 1.646a.5.5 0 0 1 0 .708L9.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <span className="text-black-500">Go back</span>
          </a>
        </div>

        <div 
          className="text-start"
          // style={{ 
          //   backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('src/assets/bck-2.png')", 
          //   backgroundSize: '55% auto', 
          //   backgroundPosition: 'right bottom', 
          //   backgroundRepeat: 'no-repeat'
          // }}
        >
          <h3 className="mt-10 text-2xl sm:text-xl leading-normal font-bold tracking-tight text-gray-900">
            FEEDBACK
          </h3>

          <h2 className="mt-7 text-l sm:text-l leading-normal font-bold tracking-tight text-gray-900">
            How did we do?
          </h2>
          <p className="w-full md:w-1/2">We’d love to hear about your experience with our platform. Please take a moment tou share your thoughts with us. </p>

          <h2 className="mt-7 text-l sm:text-l leading-normal font-bold tracking-tight text-gray-900">
            Rate your experience
          </h2>
          <div className="flex items-center justify-start">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => {
                const starRating = index + 1;
                return (
                  <button
                    key={starRating}
                    onClick={() => handleRatingChange(starRating)}
                    className={`text-4xl transition-colors duration-200 ${
                      starRating <= rating ? 'text-yellow-400' : 'text-gray-400'
                    }`}
                  >
                    ★
                  </button>
                );
              })}
            </div>
          </div>


          <h2 className="mt-7 text-l sm:text-l leading-normal font-bold tracking-tight text-gray-900">
            Write your comment (optional)
          </h2>
          <div className="relative w-full md:w-1/2">
            <label
              htmlFor="feedback"
              className="absolute left-4 top-2 text-gray-500 transition-transform transform scale-75 origin-top-left pointer-events-none"
            >
              Describe here your personal experience and opinion about us.....
            </label>
            <input
              id="feedback"
              type="text"
              value={inputFeedback}
              onChange={(e) => setInputFeedback(e.target.value)}
              placeholder=""
              className="test-start flex-1 border border-gray-300 px-4 py-2 text-gray-700 outline-none min-w-0 w-full h-40 focus:outline-none focus:border-[#537F19] focus:ring-1 focus:ring-[#537F19] transition duration-200"
            />
          </div>

          <button 
            type="button" 
            className="mt-6 w-full md:w-1/2 relative py-2 px-4 md:py-2 md:px-6 text-[14px] md:text-[16px] text-white bg-[#537F19] rounded-tr-[10px] rounded-bl-[10px] outline-none outline outline-[2px] outline-black outline-t-.5 outline-offset-[-.5px] shadow-[5px_5px_0px_0px_#000000] hover:shadow-[0px_0px_0px_0px_#000000] transition-all duration-300 mb-3"
          >
            Send your Feedback
          </button>


        </div>
      </Layout>
    </>
  );
};

export default Feedback;