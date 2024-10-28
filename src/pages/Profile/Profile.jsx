import Layout from "../../layout/Layout";
import profile from "../../assets/farmer.png";
import { IoCreateOutline, IoLocationSharp, IoLanguage, IoKey, IoShieldCheckmark  } from 'react-icons/io5';

const Profile = () => {
  return (
    <>
      <Layout>
        <div className="container">
          {/* Back Button */}
          <div className="my-4">
            <a href="/" className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-black transition"
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
              <span className="text-black">Go back</span>
            </a>
          </div>

          {/* Profile Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Profile Image and Info */}
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
                <img
                  className="w-20 h-20 rounded-full"
                  src={profile}
                  alt="User Profile"
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Juan Dela Cruz</h2>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg">juandelacruz@gmail.com</p>

                  <div className="flex flex-row items-center max-w-max rounded px-2 py-1 outline-none outline outline-2 outline-[#537F19] hover:outline-offset-0 transition-all md:px-4 lg:py-1 sm:justify-center">
                    <IoCreateOutline className="text-green-800 md:text-lg lg:text-xl" />
                    <a href="/settings" className="text-[#537F19] text-sm md:text-base lg:text-lg ml-2">
                      Edit Profile
                    </a>
                  </div>


                </div>
              </div>

              {/* Account Settings Button */}
              <a href="/settings" className=" mt-4 md:mt-0   py-2 px-4 md:py-2 md:px-6 text-[14px] md:text-[16px] text-white bg-[#537F19]  outline-none outline outline-[2px] outline-black outline-t-.5 outline-offset-[-.5px] shadow-[5px_5px_0px_0px_#000000] hover:shadow-[0px_0px_0px_0px_#000000] transition-all duration-300 mb-3">
                Account Settings
              </a>
            </div>

            <hr className="my-6" />

            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              <div className="mt-2">
                <label className="text-sm font-medium text-gray-600">City / Municipality</label>
                <div className="flex items-center space-x-2">
                  <IoLocationSharp className="text-gray-800" />
                  <p className="mt-1 text-gray-800">Lucena City</p>
                </div>
              </div>
            </div>

            <hr className="my-6" />
            {/* Other Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Other Information:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                <div>
                  <label className="text-sm font-medium text-gray-600">Language:</label>
                  <div className="flex items-center space-x-2">
                  <IoLanguage className="text-gray-800" />
                  <p className="mt-1 text-gray-800">English (US)</p>
                </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Account Type:</label>
                  <div className="flex items-center space-x-2">
                    <IoKey className="text-gray-800" />
                    <p className="mt-1 text-gray-800">Local</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Two-Factor Authentication:</label>
                  <div className="flex items-center space-x-2">
                    <IoShieldCheckmark className="text-gray-800" />
                    <p className="mt-1 text-gray-800">Disabled</p>
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

export default Profile;