import React from 'react'
import styled from 'styled-components';

function Message({message, timestamp, user, userImage}) {
    return (
        <MessageContainer>
            <img src={userImage} alt='' />
            <MessageInfo>
                <h4>
                    {user} {' '}
                    <span>{new Date(timestamp?.toDate()).toLocaleTimeString()}</span>
                    <p>{message}</p>
                </h4>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    >img {
        object-fit: contain;
        height: 50px;
        border-radius: 8px;
    }

`;
const MessageInfo = styled.div`
    padding-left: 10px;

`;