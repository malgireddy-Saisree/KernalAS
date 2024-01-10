import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { auth, db } from '../../firebase/firebase';
import { user } from '../../context/atoms';
import Dialog from './Dialog';
import { collection, onSnapshot } from 'firebase/firestore';


const WorkspaceList = ({ workspaces }) => {

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

            {workspaces.map((workspace) => (
                <div key={workspace.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
                    <div className="bg-gray-800 rounded-lg shadow-md p-6 h-full ">
                        <h3 className="text-lg font-semibold mb-4 text-white whitespace-normal">
                            {workspace.name}
                        </h3>
                        <p className="text-gray-600 whitespace-normal">{workspace.description}</p>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default WorkspaceList;
