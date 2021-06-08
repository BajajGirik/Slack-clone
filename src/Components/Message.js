import React, { useEffect } from 'react'
import styled from 'styled-components';

function Message({ message, timestamp, user, userImage, chatRef }) {
    
    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth',
        });
    });
    return (
        <MessageContainer>
            <img src={userImage} alt='' />
            <MessageInfo>
                <h4>
                    {user} {' '}
                    <span>{new Date(timestamp?.toDate()).toLocaleTimeString()}</span>
                </h4>
                    <p>{message}</p>
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

    >h4 >span {
        color: gray;
        font-size: 10px;
        margin-left: 4px;
        font-weight: 300;
    }
`;