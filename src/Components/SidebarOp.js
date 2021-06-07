import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase';

function SidebarOp({ Icon, title, aco }) {
    const addChannel = () => {
        const chName = prompt("Enter the channel name");
        if (chName) {
            db.collection("rooms").add({
                name: chName
            });
        }
    }
    const selectChannel = () => { }

    return (
        <SidebarOpContainer onClick={aco ? addChannel : selectChannel }>
            {Icon ? (
                <>
                    <Icon />
                    <h3>{title}</h3>
                </>
            ) : (
                    <>
                        <span>#</span> {title}
                    </>
            )}
       </SidebarOpContainer>
    )
}

export default SidebarOp

const SidebarOpContainer = styled.div`
    > .MuiSvgIcon-root {
        font-size: 1.4em;
        padding: 10px;
    }

    font-size: 0.8em;
    padding-left: 2px;
    display: flex;
    align-items: center;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    >h3 {
        font-weight: 500;
    }
     
     /* style span */
`;