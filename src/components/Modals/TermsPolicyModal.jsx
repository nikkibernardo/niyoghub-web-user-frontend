import PropTypes from 'prop-types';
import { IoShieldCheckmark } from 'react-icons/io5';

const TermsPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 mx-10">
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex flex-row items-center">
            <div className="flex items-center mr-2">
              <div className="bg-[#537F19] p-3 ">
                <IoShieldCheckmark size={26} className="text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-800">TERMS AND PRIVACY POLICY</h2>
              <h5 className="text-l text-gray-600">Last Updated October 2024</h5>
            </div>
          </div>
          <button onClick={onClose} className="text-black-800 hover:text-black-700 text-2xl">
            ×
          </button>
        </div>
        <div className="mt-4 space-y-4">
          <div className="overflow-y-auto h-60 md:h-80 px-4">
            <p className="text-gray-700 text-sm md:text-base"> 
              The version provided for the terms and conditions and privacy policy aligns closely with the principles and requirements outlined in the Philippines` Data Privacy Act of 2012. This legislation establishes guidelines for protecting personal data and sets standards for how organizations handle and process such information. By adhering to these principles, NiyogHub demonstrates its commitment to safeguarding the privacy and security of user data. <br /><br />

              Through robust data collection, storage, and processing practices outlined in the privacy policy, NiyogHub ensures that user information is handled responsibly and in accordance with legal requirements. This includes measures to protect against unauthorized access, data breaches, and misuse of personal information. <br /> <br />

              By implementing these safeguards, NiyogHub aims to build trust and confidence among its users, assuring them that their privacy is respected and their data is handled with the utmost care. This commitment to privacy protection underscores NiyogHub`s dedication to providing a secure and reliable platform for coconut farmers and stakeholders to access valuable agricultural resources and tools. <br /><br />

              This Privacy Policy may be updated from time to time, and therefore, we ask you to check back periodically for the latest version of the Privacy Policy, as indicated below. If there are any significant changes made to the use of your personal data in a manner different from that stated at the time of collection, we will notify you by posting a notice on our platform or by other means.
            </p>
          </div>

        </div>
        <div className="mt-6 flex justify-center space-x-3 border-t pt-4">
          <button
            onClick={onClose}
            className="px-10 py-1 bg-[#537F19] hover:bg-[#4B6E16] text-white rounded-ss"
          >
            Accept
          </button>
          <button
            onClick={onClose}
            className="px-10 py-1 hover:bg-gray-400 text-gray-800 rounded-ss outline-none outline outline-[2px] outline-black outline-t-1 outline-offset-[-1px]"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

TermsPolicyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TermsPolicyModal;