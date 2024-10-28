import LayoutOut from "../../layout/LayoutOut";
import { IoLogoGoogle } from 'react-icons/io5';
import logo from "../../assets/black.png"

const SignIn = () => {
  return (
    <>
      <LayoutOut>
        <section
          id="sign-in"
          className={`flex md:flex-col flex-col`} 
          style={{ 
            backgroundImage: "url('src/assets/bck-opac.png')", 
            backgroundSize: 'auto 70%',
            backgroundPosition: 'right bottom', 
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="flex flex-col lg:flex-row min-h-full items-center lg:justify-between p-4 py-10">
            <div className="flex flex-col items-center lg:flex-row lg:items-start lg:w-1/2 lg:mb-0">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4">
                  <img src={logo} alt="NiyogHub Logo" className="w-16 h-16 mb-2 lg:my-2" />
                  <div className="flex flex-col items-center lg:items-start">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#537F19]">WELCOME TO</h1>
                    <h1 className="text-black font-extrabold text-5xl md:text-5xl lg:text-6xl xl:text-7xl">NiyogHub</h1><br />
                  </div>
                </div>
                <p className="text-[#5C5C5C] text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center lg:text-left mt-2 lg:mt-4 mb-5">
                  Cultivating Connections,<br className="hidden lg:block" /> Harvesting Solutions
                </p>
              </div>
            </div>

            <div className="bg-[#F1F1F1] w-full max-w-md shadow-lg pt-6 p-8 lg:mr-20 relative overflow-auto" style={{ maxHeight: '90vh' }}> 
              <h2 className="absolute top-0 left-0 bg-black text-white py-2 px-5 md:px-15 lg:px-20 rounded-br-lg font-bold text-base md:text-lg lg:text-xl">
                Sign in to NiyogHub
              </h2>
              <form className="space-y-4 mt-8">
                <div>
                  <label className="block text-gray-700 mt-10 mb-1">Email or phone number</label>
                  <input
                    type="text"
                    placeholder="Enter your Email or Phone Number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    <button type="button" className="absolute right-3 top-2 text-gray-500">
                      
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <label className="flex items-center text-gray-600  mb-5">
                    <input type="checkbox" className="mr-2" /> Remember me
                  </label>
                  <a href="/forgot-password" className="text-sm text-gray-700 hover:underline mb-5">Forgot password?</a>
                </div>

                <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 bg-[#537F19] text-white py-2 hover:bg-[#3B5B12] transition duration-200 rounded-tr-lg rounded-bl-lg text-center">
                  <a href="/" type="submit">
                    Sign in
                  </a> 
                </div>
              </form>

              <div className="text-center mt-4 text-gray-600">
                <p>Don’t have an account? <a href="/signup" className="text-green-700 hover:underline"> Sign up</a></p>
              </div>

              <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="px-2 text-gray-500">or</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              <button className="flex items-center justify-center w-full border-gray-300 py-2 text-white bg-[#2E2E2E] transition duration-200 rounded-tr-lg rounded-bl-lg">
                <IoLogoGoogle className="mr-2 color-white" /> Sign in with Google
              </button>

              <div className="text-center mt-4 text-gray-600">
                <p>English (US) | Filipino</p>
              </div>
            </div>
          </div>
        </section>

      </LayoutOut>
    </>
  );
};

export default SignIn;