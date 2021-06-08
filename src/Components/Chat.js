import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ChatInput from './ChatInput'
import { useSelector } from 'react-redux'
import { selectRoomID } from '../features/appSlice'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Message from './Message'

function Chat() {
    const roomId = useSelector(selectRoomID);
    const chatRef = useRef(null);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );

    const [roomMessages, loading] = useCollection(
        roomId && db.collection('roooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
    );

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behaviour: 'smooth'
        });
    }, [roomId, loading]);

    return (
        <ChatContainer>
            {roomDetails && roomMessages && (
            <>    
                <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#{roomDetails?.data().name}</strong>
                    </h4>
                    <StarBorderOutlinedIcon />
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </HeaderRight>
                </Header>
                <ChatMessages>
                {roomMessages?.docs.map((doc) => {

                    const { message, timestamp, user, userImage } = doc.data();

                    <Message
                        key={doc.id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                })}
                    <ChatBottom ref={chatRef}></ChatBottom>
                </ChatMessages>

                <ChatInput
                chatRef={chatRef}
                channelName={roomDetails?.data().name}
                channelId={roomId}
                />
        </>
        )}
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 80px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: solid 1px lightgray;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    >h4 {
        text-transform: lowercase;
        margin-right: 5px;
    }
`;
const HeaderRight = styled.div`
    >p {
        display: flex;
        align-items: center;
    }

    >p > .MuiSvgIcon-root {
        margin-right: 5px;
    }
`;

const ChatBottom = styled.div`
    padding: 200px;
`;

const ChatMessages = styled.div``;