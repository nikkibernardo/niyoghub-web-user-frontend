import { useState, useEffect } from 'react';
import { IoAttachOutline, IoSend, IoMicOutline, IoInformationCircleOutline } from 'react-icons/io5';
import Layout from '../../layout/Layout';
import ChatModal from "../../components/Modals/ChatModal";
import logo from "../../assets/black.png";

const ChatScreen = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        content: inputMessage,
        role: 'user',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Simulate an admin reply
      const adminReply = {
        content: "Thank you for your message! How can I assist you further?",
        role: 'admin',
        timestamp: new Date().toLocaleTimeString(),
      };
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, adminReply]);
      }, 1000); // Simulate a short delay for the admin reply

      setInputMessage('');
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newMessage = {
        content: `File sent: ${file.name}`,
        role: 'user',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col lg:px-20">
        <div className="outline-none outline outline-[2px] outline-gray-300 outline-t-1 outline-offset-[-1px] p-3 rounded-sm flex flex-col flex-grow  max-h-[calc(100vh-180px)]">
          <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <h1 className="text-xl font-bold text-[#537F19]">Chat with PCA</h1>
            <div className="flex items-center space-x-4">
              <button className="flex items-center bg-[#537F19] text-white px-3 py-1 rounded-full">
                <IoMicOutline size={24} />
                <span className="hidden md:inline ml-2">Talk with AI</span>
              </button>
              <IoInformationCircleOutline
                size={24}
                color="white"
                onClick={toggleModal}
                className="bg-gray-700 rounded-xl"
              />
            </div>
          </header>

          <hr className="border-gray-300 my-2" />

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-2 max-h-[calc(90vh-180px)]">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center mt-20">
                <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />
                <p className="text-gray-500 text-center">How can we help you today? Just type your message.</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} my-2`}>
                  {message.role === "admin" && <img src={logo} alt="Admin" className="w-8 h-8 mr-2 rounded-full" />}
                  <div
                    className={`px-4 py-2 rounded-lg ${message.role === "user" ? "bg-[#90B74B] text-black" : "bg-gray-200 text-black"}`}
                  >
                    <p>{message.content}</p>
                    <p className="text-xs text-gray-400 text-right">{message.timestamp}</p>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex items-center space-x-2">
                <img src={logo} className="w-8 h-8 rounded-full" />
                <div className="animate-spin border-4 border-green-600 border-t-transparent rounded-full w-5 h-5"></div>
              </div>
            )}
          </div>


          <hr className="border-gray-300 my-2" />

          {/* Input Section */}
          <div className="flex items-center p-4 bg-white shadow-md space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-gray-700 outline-none min-w-0"
            />
            <button className="text-gray-500">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer text-gray-500">
                <IoAttachOutline size={24} />
              </label>
            </button>
            <button className="text-[#537F19]" onClick={handleSendMessage}>
              <IoSend size={24} />
            </button>
          </div>

          {/* Chat Modal */}
          <ChatModal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
      </div>
    </Layout>
  );
};

export default ChatScreen;























// import { useState, useEffect } from 'react';
// import { IoAttachOutline, IoSend, IoMicOutline, IoInformationCircleOutline } from 'react-icons/io5';
// import Layout from '../../layout/Layout';
// import ChatModal from "../../components/Modals/ChatModal";
// import logo from "../../assets/black.png";

// const ChatScreen = () => {
//   const [inputMessage, setInputMessage] = useState('');
//   const [messages, setMessages] = useState(() => {
//     const savedMessages = localStorage.getItem('messages');
//     return savedMessages ? JSON.parse(savedMessages) : [];
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     localStorage.setItem('messages', JSON.stringify(messages));
//   }, [messages]);

//   const handleSendMessage = () => {
//     if (inputMessage.trim()) {
//       const newMessage = {
//         content: inputMessage,
//         role: 'user',
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//       setInputMessage('');
//       setIsLoading(true);
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 1000);
//     }
//   };

//   const toggleModal = () => {
//     setIsModalOpen((prev) => !prev);
//   };

//   const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//           // You can add logic here to handle the file, like sending it as a message
//           const newMessage = {
//             content: `File sent: ${file.name}`,
//             role: 'user',
//             timestamp: new Date().toLocaleTimeString(),
//           };
//           setMessages((prevMessages) => [...prevMessages, newMessage]);
//         }
//       };

//   return (
//     <Layout>
//       <div className=" flex flex-col h-screen  lg:px-20">
//         <div className="outline-none outline outline-[2px] outline-gray-300 outline-t-1 outline-offset-[-1px] p-3 rounded-sm">
//         <header className="flex justify-between items-center p-4 bg-white shadow-md">
//           <h1 className="text-xl font-bold text-[#537F19]">Chat with PCA</h1>
//           <div className="flex items-center space-x-4">
//             <button className="flex items-center bg-[#537F19] text-white px-3 py-1 rounded-full">
//               <IoMicOutline size={24} />
//               <span className="hidden md:inline ml-2">Talk with AI</span>
//             </button>
//             <IoInformationCircleOutline
//               size={24}
//               color="white"
//               onClick={toggleModal}
//               className="bg-gray-700 rounded-xl"
//             />
//           </div>
//         </header>

//         <hr className="border-gray-300 my-2" />

//         {/* Chat Messages */}
//         <div className="flex-1 overflow-y-auto px-4 py-2 h-[50vh]">
//           {messages.length === 0 ? (
//             <div className="flex flex-col items-center mt-20">
//               <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />
//               <p className="text-gray-500 text-center">How can we help you today? Just type your message.</p>
//             </div>
//           ) : (
//             messages.map((message, index) => (
//               <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} my-2`}>
//                 {message.role === "admin" && <img src={logo} alt="Admin" className="w-8 h-8 mr-2 rounded-full" />}
//                 <div
//                   className={`px-4 py-2 rounded-lg ${message.role === "user" ? "bg-[#90B74B] text-black" : "bg-gray-200 text-black"}`}
//                 >
//                   <p>{message.content}</p>
//                   <p className="text-xs text-gray-400 text-right">{message.timestamp}</p>
//                 </div>
//               </div>
//             ))
//           )}
//           {isLoading && (
//             <div className="flex items-center space-x-2">
//               <img src={logo} className="w-8 h-8 rounded-full" />
//               <div className="animate-spin border-4 border-green-600 border-t-transparent rounded-full w-5 h-5"></div>
//             </div>
//           )}
//         </div>

//         <hr className="border-gray-300 my-2" />

//         {/* Input Section */}
//         <div className="flex items-center p-4 bg-white shadow-md space-x-2">
//           <input
//             type="text"
//             value={inputMessage}
//             onChange={(e) => setInputMessage(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-gray-700 outline-none"
//           />
//           <button className="text-gray-500">
//             {/* <IoAttachOutline size={24} /> */}
//             <input 
//               type="file"
//               onChange={handleFileChange}
//               className="hidden"
//               id="file-upload" // Give it an ID to trigger click
//             />
//             <label htmlFor="file-upload" className="cursor-pointer text-gray-500">
//               <IoAttachOutline size={24} />
//             </label>
//           </button>
//           <button className="text-[#537F19]" onClick={handleSendMessage}>
//             <IoSend size={24} />
//           </button>
//         </div>

//         {/* Chat Modal */}
//         <ChatModal isOpen={isModalOpen} onClose={toggleModal} />
//       </div>
//       </div>
//     </Layout>
//   );
// };

// export default ChatScreen;















// import { useState, useRef } from "react";
// import ChatModal from "../../components/Modals/ChatModal";
// import { IoInformationCircleOutline, IoAttachOutline, IoSend, IoMicOutline } from "react-icons/io5";
// import logo from "../../assets/black.png";
// import Layout from "../../layout/Layout";

// const ChatSupport = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => setIsModalOpen(!isModalOpen);
//   const [isLoading, setIsLoading] = useState(false);
//   const scrollViewRef = useRef();

//   const mockAdminResponses = [
//     "Hello! How can I assist you with your coconut farming today?",
//     "Certainly! You can reach the PCA office at the following address...",
//   ];

//   const handleSendMessage = () => {
//     if (inputMessage.trim()) {
//       const newMessage = {
//         content: inputMessage,
//         role: 'user',
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//       setInputMessage('');
//       // Trigger loading state if necessary
//       setIsLoading(true);
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 1000); // Simulate loading time
//     }
//   };
  




//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       // You can add logic here to handle the file, like sending it as a message
//       const newMessage = {
//         content: `File sent: ${file.name}`,
//         role: 'user',
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     }
//   };

//   return (
//     <>
//       <Layout>
//         <div className="bg-grayflex flex-col h-screen">
//           {/* Header */}
//           <header className="flex justify-between items-center p-4 bg-white shadow-md">
//             <h1 className="text-xl font-bold text-[#537F19]">Chat with PCA</h1>
//             <div className="flex items-center space-x-4">
//               <button
//                 className="flex items-center bg-[#537F19] text-white px-3 py-1 rounded-full"
//                 onClick={() => navigation.navigate("Voice Assistant")}
//               >
//                 <IoMicOutline size={24} />
//                 <span className="hidden md:inline ml-2">Talk with AI</span> 
//               </button>
//               <IoInformationCircleOutline
//                 size={24}
//                 color="white"
//                 onClick={toggleModal}
//                 className="bg-gray-700 rounded-xl"
//               />
//             </div>


//           </header>

//           {/* Divider */}
//           <hr className="border-gray-300 my-2" />

//           {/* Chat Messages */}
//            {/* Chat Messages */}
//         <div className="flex-1 overflow-y-auto px-4 py-2 h-[80vh]">
//           {messages.length === 0 ? (
//             <div className="flex flex-col items-center mt-20">
//               <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />
//               <p className="text-gray-500 text-center">How can we help you today? Just type your message.</p>
//             </div>
//           ) : (
//             messages.map((message, index) => (
//               <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} my-2`}>
//                 {message.role === "admin" && <img src={logo} alt="Admin" className="w-8 h-8 mr-2 rounded-full" />}
//                 <div
//                   className={`px-4 py-2 rounded-lg ${message.role === "user" ? "bg-green-200 text-black" : "bg-gray-200 text-black"}`}
//                 >
//                   <p>{message.content}</p>
//                   <p className="text-xs text-gray-400 text-right">{message.timestamp}</p>
//                 </div>
//               </div>
//             ))
//           )}
//           {isLoading && (
//             <div className="flex items-center space-x-2">
//               <img src={logo} className="w-8 h-8 rounded-full" />
//               <div className="animate-spin border-4 border-green-600 border-t-transparent rounded-full w-5 h-5"></div>
//             </div>
//           )}
//         </div>


//           {/* <div className="flex-1 overflow-y-auto px-4 py-2" ref={scrollViewRef}>
//             {messages.length === 0 ? (
//               <div className="flex flex-col items-center mt-20">
//                 <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />
//                 <p className="text-gray-500 text-center">How can we help you today? Just type your message.</p>
//               </div>
//             ) : (
//               messages.map((message, index) => (
//                 <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} my-2`}>
//                   {message.role === "admin" && <img src={logo} alt="Admin" className="w-8 h-8 mr-2 rounded-full" />}
//                   <div
//                     className={`px-4 py-2 rounded-lg ${message.role === "user" ? "bg-green-200 text-black" : "bg-gray-200 text-black"}`}
//                   >
//                     <p>{message.content}</p>
//                     <p className="text-xs text-gray-400 text-right">{message.timestamp}</p>
//                   </div>
//                 </div>
//               ))
//             )}
//             {isLoading && (
//               <div className="flex items-center space-x-2">
//                 <img src={logo}  className="w-8 h-8 rounded-full" />
//                 <div className="animate-spin border-4 border-green-600 border-t-transparent rounded-full w-5 h-5"></div>
//               </div>
//             )}
//           </div> */}

//           {/* Divider */}
//           <hr className="border-gray-300 my-2" />

//           {/* Input Section */}
//           {/* <div className="flex items-center p-4 bg-white shadow-md space-x-2">
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               placeholder="Type your message..."
//               className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-gray-700 outline-none"
//             />
//             <button className="text-gray-500">
//               <IoAttachOutline size={24} />
//             </button>
//             <button className="text-[#537F19]" onClick={handleSendMessage}>
//               <IoSend size={24} />
//             </button>
//           </div> */}
//           {/* Input Section */}
//           <div className="flex items-center p-4 bg-white shadow-md space-x-2">
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               placeholder="Type your message..."
//               className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-gray-700 outline-none"
//             />
//             <input 
//               type="file"
//               onChange={handleFileChange}
//               className="hidden"
//               id="file-upload" // Give it an ID to trigger click
//             />
//             <label htmlFor="file-upload" className="cursor-pointer text-gray-500">
//               <IoAttachOutline size={24} />
//             </label>
//             <button className="text-[#537F19]" onClick={handleSendMessage}>
//               <IoSend size={24} />
//             </button>
//           </div>

//           {/* Chat Modal */}
//           <ChatModal isOpen={isModalOpen} onClose={toggleModal} />
//         </div>

//       </Layout>
//     </>
//   );
// };

// export default ChatSupport;
