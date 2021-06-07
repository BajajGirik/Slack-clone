import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import React from 'react'
import styled from 'styled-components'

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarTop>
                <SidebarText>
                    <h2>USICT HQ</h2>
                    <h3><FiberManualRecordIcon /> Girik Bajaj</h3>
                </SidebarText>
                <CreateIcon />
            </SidebarTop>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    margin-top: 70px;
    max-width: 260px;
`;
const SidebarTop = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    
    > .MuiSvgIcon-root {
    
    }

`;
const SidebarText = styled.div``;

