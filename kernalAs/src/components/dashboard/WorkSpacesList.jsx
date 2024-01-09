import React from 'react';
import { useRecoilValue } from 'recoil';
import { user } from '../../context/atoms';

const WorkspaceList = ({ workspaces }) => {
    const username = useRecoilValue(user);
    // const isLoggedin =
    // if (user!=null){

    // }
    return (
        <div className="flex flex-wrap -m-4">
            {workspaces.map((workspace) => (
                <div key={workspace.id} className="p-4 w-64 h-52 cursor-pointer">
                    <div className="bg-gray-900 rounded-lg shadow-md p-6 h-full overflow-hidden">
                        <h3 className="text-lg font-semibold mb-4 text-white whitespace-normal">
                            {workspace.title}
                        </h3>
                        <p className="text-gray-600 whitespace-normal">{workspace.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkspaceList;
