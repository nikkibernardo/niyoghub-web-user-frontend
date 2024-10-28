import styles from "../style";
import Header from "../components/Navbar/Header";
import PropTypes from 'prop-types';
import Footer from "../components/Navbar/Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative flex-1 overflow-y-auto overflow-hidden ">
        {/* HEADER */}
        <Header/>
        
        {/* MAIN CONTENT */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
              <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-20 lg:m-10 xs:mt-20  ss:mt-20  sm:mt-10`}>
                <div className="flex flex-col sm:justify-start justify-center w-full feedback-container relative z-[1]">
                  {children}
                </div> 
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer/>
      </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;












// import { useEffect, useRef, useState } from 'react';
// import Header from "../components/Navbar/Header"; // Import your Header component
// import PropTypes from 'prop-types';

// const Layout = ({ children }) => {
//   const headerRef = useRef(null);
//   const [headerHeight, setHeaderHeight] = useState(0);

//   useEffect(() => {
//     // Function to update header height
//     const updateHeaderHeight = () => {
//       if (headerRef.current) {
//         setHeaderHeight(headerRef.current.offsetHeight); // Use offsetHeight for full height
//       }
//     };

//     // Initial height set
//     updateHeaderHeight();

//     // Update height on window resize
//     window.addEventListener('resize', updateHeaderHeight);

//     // Cleanup event listener
//     return () => window.removeEventListener('resize', updateHeaderHeight);
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header Nav */}
//       <div ref={headerRef}>
//         <Header />
//       </div>

//       {/* Main Content */}
//       <main className=" container my-20 mx-[35%]" style={{ paddingTop: `${headerHeight}px` }}>
//         {children}
//       </main>

//       {/* Footer */}
//     </div>
//   );
// };

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default Layout;












// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// import Header from "../components/Navbar/Header";
// import PropTypes from 'prop-types';
// const Layout = ({ children }) => {

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-grow container mx-auto px-15 py-20 ml-40">
//         {children}
//       </main>

//       {/* Footer */}
      
//     </div>
//   );
// };
// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };
// export default Layout;
