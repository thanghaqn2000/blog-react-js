import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

function ModalUpdate({ updateAction, message }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await updateAction();
      closeModal();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="block text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5"
      >
        Update
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={closeModal}
                type="button"
                className="absolute top-4 right-2 text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              <div className="p-4 text-center">
                <h3 className="mb-5 text-lg font-normal text-gray-500">{message}</h3>

                <button
                  onClick={handleUpdate}
                  className={`text-white bg-green-600 hover:bg-green-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? "Updating..." : "Yes, Update"}
                </button>

                <button
                  onClick={closeModal}
                  className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalUpdate;
