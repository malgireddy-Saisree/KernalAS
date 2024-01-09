import React, { useState } from 'react'
import Wrapper from "../components/PageWrapper";
import Sidebar from "../containers/Sidebar";
import ChatWindow from "../containers/ChatWindow";
const ChatPage = () => {
    const [botTitle, setBotTitle] = useState("");
    return (
        <div>
            <title>{botTitle}</title>
            <Sidebar />
            <Wrapper>
                <ChatWindow
                    embedding_model="open_ai"
                    app_type="app"
                    setBotTitle={setBotTitle}
                />
            </Wrapper>
        </div>
    )
}

export default ChatPage
