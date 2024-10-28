import TermsPolicyModal from "../Modals/TermsPolicyModal";
import { useState } from 'react';

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
       <footer className="bg-[#F1F1F1] border-t border-gray-200 dark:bg-gray-900 w-full px-auto">
        <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto p-4">

          <span className="lg:ml-10 text-black text-sm md:text-sm whitespace-nowrap dark:text-white">
            NiyogHub Team © 2024. All rights reserved.
          </span>

          <button
            onClick={toggleModal}
            className="mt-2 md:mt-0 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            <span className="lg:mr-10 whitespace-nowrap dark:text-white">Terms and Privacy Policy</span>
          </button>

          {/* Terms and Privacy Policy Modal */}
          <TermsPolicyModal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    </footer>
    </>
  );
}

export default Footer;










// import TermsPolicyModal from "../Modals/TermsPolicyModal";
// import { useState} from 'react';

// function Header() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const toggleModal = () => {
//     setIsModalOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 fixed w-full z-10 top-0 px-auto">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse pr-15 mr-10">
//             <span className="text-black font-bold self-center text-xl font-semibold whitespace-nowrap dark:text-white ">
//               NiyogHub Team © 2024. All rights reserved.
//             </span>
//           </a>

//           {/* Search Bar, Notification, and User Buttons */}
//           <div className="flex md:order-2 items-end space-x-3 ml-auto">
//             <div className="relative flex items-center md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
//               <div className="relative">
//                 <button
//                   onClick={toggleModal}
//                   className="flex items-center block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   <span className="mr-2 whitespace-nowrap dark:text-white hidden md:block">Terms and Privacy Policy</span>
                  
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Terms and Privacy Policy Modal */}
//           <TermsPolicyModal isOpen={isModalOpen} onClose={toggleModal} />
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Header;