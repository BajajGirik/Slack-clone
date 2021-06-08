import React from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ChatInput from './ChatInput'
import { useSelector } from 'react-redux'
import { selectRoomID } from '../features/appSlice'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'

function Chat() {
    const roomId = useSelector(selectRoomID);
    
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );

    const [roomMessages] = useCollection(
        roomId && db.collection('roooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
    );

    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#Room-name</strong>
                    </h4>
                    <StarBorderOutlinedIcon />
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages></ChatMessages>

            <ChatInput
                channelName={roomDetails?.data().name}
                channelId={roomId}
            />
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

const ChatMessages = styled.div``;