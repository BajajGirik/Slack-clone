import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import React from 'react'
import styled from 'styled-components'
import SidebarOp from './SidebarOp'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'

function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection("rooms"));
    return (
        <SidebarContainer>
            <SidebarTop>
                <SidebarText>
                    <h2>USICT HQ</h2>
                    <h3><FiberManualRecordIcon /> Girik Bajaj</h3>
                </SidebarText>
                <CreateIcon />
            </SidebarTop>

            <SidebarOp Icon={InsertCommentIcon} title="Threads" />
            <SidebarOp Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOp Icon={DraftsIcon} title="Saved items" />
            <SidebarOp Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOp Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOp Icon={AppsIcon} title="Apps" />
            <SidebarOp Icon={FileCopyIcon} title="File Browser" />
            <SidebarOp Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOp Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOp Icon={AddIcon} title="Add Channel" aco />

            {channels?.docs.map((doc) => (
                <SidebarOp
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name}
                />
            ))}

        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    margin-top: 72.38px;
    max-width: 260px;
    border-top: solid 1px #666;

    > hr {
        margin: 10px 0px;
        border: solid 1px #666;
    }
`;

const SidebarTop = styled.div`
    display: flex;
    padding: 1em;
    border-bottom: solid 1px #666;
    
    > .MuiSvgIcon-root {
        padding: 8px;
        font-size: 1.2em;
        background-color: white;
        color: #111;
        border-radius: 999px;
    }

`;

const SidebarText = styled.div`
    flex: 1;

    >h2 {
        font-size: 1em;
        font-weight: 900;
        margin-bottom: 4px;
    }

    >h3 {
        display: flex;
        align-items: center;
        font-size: 0.9em;
        font-weight: 400;
    }

    >h3 > .MuiSvgIcon-root {
        color: green;
        font-size: 1em;
        margin-right: 2px;
    }
`;

