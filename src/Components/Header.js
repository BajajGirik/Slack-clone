import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import React from 'react'
import styled from "styled-components";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Header() {
    const [user] = useAuthState(auth);

    const signOut = () => {
        auth.signOut();
    }

    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                    onClick={signOut}
                    src={user?.photoURL}
                    alt={user?.displayName}
                />
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderMid>
                <SearchIcon />
                <input placeholder="Search" />
            </HeaderMid>

            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0px;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.7em 1.2em;
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

const HeaderMid = styled.div`
    color: gray;
    background-color: #421f44;
    flex: 0.4;
    display:flex;
    justify-content: center;
    border: solid 1px gray;
    border-radius: 7px;

    > input {
        background-color: transparent;
        outline: none;
        border: none;
        min-width: 30vw;
        text-align: center;
        color: white;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    justify-content: flex-end;
    margin: 0.7em 1.2em;
`;