import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Dialog from './Dialog';

const WorkspaceList = ({ workspaces }) => {
    const navigate = useNavigate()
    const onChatHandle = (id) => {
        navigate(`/chat/${id}`);
    }


    const [isDialogOpen, setDialogOpen] = useState(false);
    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };
    return (
        <div className="flex flex-wrap -m-4 p-4 cursor-pointer">

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
                <div className="bg-gray-800 rounded-lg p-6 shadow-md h-44 overflow-hidden flex items-center justify-center" onClick={openDialog}>
                    <p className='text-blue-500 text-3xl mr-2'>+</p>
                    <p className='text-white mt-2'>Create Workspace</p>
                </div>
            </div>

            <Dialog
                setIsOpen={setDialogOpen}
                isOpen={isDialogOpen}
                onClose={closeDialog}
                title="Sample Dialog"
                content="This is the content of the dialog. You can add any information or components here."
            />
            {workspaces.length === 0 ? (
                // <div class="flex items-center space-x-2">
                //     <div class="animate-pulse rounded-full bg-gray-500 h-12 w-12"></div>
                //     <div class="space-y-2">
                //         <div class="animate-pulse rounded-md bg-gray-500 h-4 w-[200px]"> </div>
                //         <div class="animate-pulse rounded-md bg-gray-500 h-4 w-[170px]"> </div>
                //     </div>
                // </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 animate-pulse">
                    <div className="bg-gray-800 rounded-lg shadow-md p-8 h-full">
                        <div className="h-4 bg-gray-400 mb-4 w-3/4 rounded-lg"></div>
                        <div className="h-4 bg-gray-400 w-3/4 rounded-lg"></div>
                    </div>
                </div>
            ) : (
                workspaces.map((workspace) => (
                    <div key={workspace.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4" onClick={() => onChatHandle(workspace.id)}>
                        <div className="bg-gray-800 rounded-lg shadow-md p-6 h-full">
                            <h3 className="text-lg font-semibold mb-4 text-white whitespace-normal">
                                {workspace.data.name}
                            </h3>
                            <p className="text-gray-600 whitespace-normal">{workspace.data.description}</p>

                        </div>
                    </div>
                ))
            )}


        </div>

    );
};

export default WorkspaceList;
