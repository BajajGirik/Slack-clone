import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import styled from "styled-components";

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar />
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderMid>
                <SearchIcon />
                <input placeholder="Search" />
            </HeaderMid>

            <HeaderRight></HeaderRight>
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