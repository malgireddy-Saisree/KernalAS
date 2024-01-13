import React from 'react';
import { useWorkspaces } from '../../hooks/getWorkspaces';
import WorkspaceList from './WorkSpacesList';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

const DashMain = () => {
    const workspaces = useWorkspaces();
    const navigate = useNavigate();
    const useremail = auth?.currentUser?.email;
    if (!useremail) {
        navigate("/login");
    }
    return (
        <div className='h-screen bg-gray-900 p-6'>
            <p className='text-white text-3xl'>Dashboard</p>
            {console.log(workspaces)}
            <WorkspaceList workspaces={workspaces} />

        </div>
    );
};

export default DashMain;
