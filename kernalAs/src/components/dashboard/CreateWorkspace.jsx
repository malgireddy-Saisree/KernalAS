import React, { useState } from 'react'
import Dialog from './Dialog';
const CreateWorkspace = () => {



    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div>

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


        </div>
    )
}

export default CreateWorkspace
