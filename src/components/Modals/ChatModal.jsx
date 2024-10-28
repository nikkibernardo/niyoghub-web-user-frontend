import PropTypes from 'prop-types';

const ChatModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 mx-10">
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-gray-800">WHAT IS REAL TIME CHAT SUPPORT?</h2><br />
            <h5 className="text-l text-gray-600">Last Updated October 2024</h5>
          </div>
          <button onClick={onClose} className="text-black-500 hover:text-black-700">
            ×
          </button>
        </div>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700">Learn about the terms and privacy measures...</p>
        </div>
        <div className="mt-6 flex justify-end space-x-3 border-t pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
          >
            Decline
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

ChatModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ChatModal;
