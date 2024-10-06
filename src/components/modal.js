import React from 'react';

const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <div className="text-center">
                    <p className="text-lg font-medium">{message}</p>
                </div>
                <div className="mt-4 text-center">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
