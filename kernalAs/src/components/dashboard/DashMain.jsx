import React, { useEffect, useState } from 'react'
import CreateWorkspace from './CreateWorkspace'
import WorkspaceList from './WorkSpacesList'
import { auth, db } from '../../firebase/firebase';
import { collection, onSnapshot } from 'firebase/firestore';


const DashMain = () => {
    const [workspaces, setWorkspaces] = useState([]);
    useEffect(() => {
        onSnapshot(collection(db, "Workspaces"), (snapshot) => {
            setWorkspaces(snapshot.docs.map(doc => doc.data()).filter(workspace => workspace.usermail === auth?.currentUser?.email))
        })
    }, [])
    return (
        <div className='h-screen bg-gray-900  p-6'>
            <p className='text-white text-3xl'>Dashboard</p>
            {console.log(workspaces)}
            <WorkspaceList workspaces={workspaces} />
            {/* <CreateWorkspace /> */}
        </div>
    )
}

export default DashMain
