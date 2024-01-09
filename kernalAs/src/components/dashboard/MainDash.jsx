import React from 'react'
import WorkspaceList from './WorkSpacesList'
import { RecoilRoot } from 'recoil'

const MainDash = () => {
    return (
        <div>
            <RecoilRoot>
                <WorkspaceList />
            </RecoilRoot>
        </div>
    )
}

export default MainDash
