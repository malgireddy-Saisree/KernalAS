import React, { useState } from 'react'
import Dialog from './Dialog';
import { FileUploader } from "react-drag-drop-files";
const CreateWorkspace = () => {
    const [botName, setBotName] = useState("");
    const [status, setStatus] = useState("");

    const handleCreateBot = async (e) => {
        e.preventDefault();
        const data = {
            name: botName,
        };

        const response = await fetch("http://localhost:8080/api/create_bot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }


    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div>
            {/* <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="p-6 border-2 border-dashed border-blue-300 rounded-lg bg-white w-full max-w-4xl">
                    <div className="flex justify-between items-center">
                        <button className="text-blue-600 hover:text-blue-700 focus:outline-none">
                            Browse my Computer
                        </button>
                        <div className="flex items-center">
                            <i className="fas fa-file-upload text-blue-600 mr-2"></i>
                            <span className="text-blue-600 hover:text-blue-700 focus:outline-none">
                                Drop PDF here
                            </span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 focus:outline-none">
                            From URL
                        </button>
                        <button className='rounded text-white '>
                        </button>
                    </div>
                </div>
            </div> */}
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">React Tailwind Dialog Example</h1>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={openDialog}
                >
                    Open Dialog
                </button>

                <Dialog
                    isOpen={isDialogOpen}
                    onClose={closeDialog}
                    title="Sample Dialog"
                    content="This is the content of the dialog. You can add any information or components here."
                />
            </div>

            {/* <FileUploader handleChange={handleChange} name="file" types={fileTypes} /> */}
        </div>
    )
}

export default CreateWorkspace
