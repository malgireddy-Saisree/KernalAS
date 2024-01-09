// Dialog.js

import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const Dialog = ({ isOpen, onClose, title, content }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const fileTypes = ["CSV", "PDF"];
    const handleChange = (file) => {
        setFile(file);
    };
    const [isDialogOpen, setDialogOpen] = useState(false);

    return (
        <div
            className={`fixed inset-0 z-50 overflow-auto ${isOpen ? 'flex' : 'hidden'
                } items-center justify-center backdrop-blur-md`}
        >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg aspect-w-1 w-96 aspect-h-1 ">
                <h2 className="text-2xl font-bold mb-4 text-white">Create Workspace</h2>
                <div className='flex flex-col'>
                    <input
                        type='text'
                        className=' mt-1 px-3 py-2 bg-darkgray text-white w- rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-lightblue'
                        placeholder='Title'>
                    </input>
                    <input
                        type='text'
                        className='mt-3 px-3 py-2 bg-darkgray text-white rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-lightblue'
                        placeholder='Description'>
                    </input>
                </div>

                <div className='mt-3'>
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                </div>
                <div className='flex justify-between'>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
                        onClick={onClose}
                    >
                        Create
                    </button>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Dialog;
