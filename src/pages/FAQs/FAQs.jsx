
import Layout from "../../layout/Layout";
import styles from "../../style";
import { useState } from 'react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null); 

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); 
  };

  return (
    <>
      <Layout>
        <div className="relative flex-1 overflow-y-auto overflow-hidden ">    
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <div className="flex flex-col items-center py-15 lg:mx-10 xl:mx-10">
                <div className="py-4 bg-white">
                  <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
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
                    <div className="text-center">
                      <p className="text-sm leading-7 text-gray-500 font-regular mt-5">
                        F.A.Q
                      </p>
                      <h3 className="text-2xl sm:text-3xl leading-normal font-bold tracking-tight text-gray-900">
                        Frequently Asked <span className="text-[#537F19]">Questions</span>
                      </h3>

                      <ul className="basis-1/2 mt-10">
                        <li>
                          <button
                            className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                            aria-expanded={openFAQ === 0}
                            onClick={() => toggleFAQ(0)}
                          >
                            <span className="flex-1 text-base-content">How do I reset my password?</span>
                            <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out" />
                              <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out" />
                            </svg>
                          </button>
                          <div className={`transition-all duration-300 ease-in-out ${openFAQ === 0 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                            <div className="pb-5 leading-relaxed">
                              <div className="space-y-2 text-start">
                                Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda
                              </div>
                            </div>
                          </div>
                        </li>
                        
                        <li>
                          <button
                            className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                            aria-expanded={openFAQ === 1}
                            onClick={() => toggleFAQ(1)}
                          >
                            <span className="flex-1 text-base-content">What should I do if I encounter a bug or error in the app?</span>
                            <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out" />
                              <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out" />
                            </svg>
                          </button>
                          <div className={`transition-all duration-300 ease-in-out ${openFAQ === 1 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                            <div className="pb-5 leading-relaxed">
                              <div className="space-y-2 text-start">Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <button
                            className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                            aria-expanded={openFAQ === 2}
                            onClick={() => toggleFAQ(2)}
                          >
                            <span className="flex-1 text-base-content">Is there a way to contact customer support directly from the app?</span>
                            <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out" />
                              <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out" />
                            </svg>
                          </button>
                          <div className={`transition-all duration-300 ease-in-out ${openFAQ === 2 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                            <div className="pb-5 leading-relaxed">
                              <div className="space-y-2  text-start">Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda </div>
                            </div>
                          </div>
                        </li>
                        
                        <li>
                          <button
                            className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                            aria-expanded={openFAQ === 3}
                            onClick={() => toggleFAQ(3)}
                          >
                            <span className="flex-1 text-base-content">Can I use the app on multiple devices with the same account?</span>
                            <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out" />
                              <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out" />
                            </svg>
                          </button>
                          <div className={`transition-all duration-300 ease-in-out ${openFAQ === 3 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                            <div className="pb-5 leading-relaxed">
                              <div className="space-y-2 text-start">Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda </div>
                            </div>
                          </div>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FAQs;