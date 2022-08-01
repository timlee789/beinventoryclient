import { colors, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
//import MenuIcon from ' @mui/icons-material';
//import {makeStyles} from '@mui/styles';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';


function DrawerCom() {
    const [openDrawer, setOpenDrawer] =  useState(false)
    
    return (
        <div>
            <Drawer
                anchor='leftt'
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
            >
                <List>
                    <ListItem divider button>
                        <ListItemIcon>
                            <Link href="./braid"><a><ListItemText>BRAID </ListItemText></a></Link>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <Link href="./weaving"><a><ListItemText>WEAVE</ListItemText></a></Link>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <Link href="./fantasy" ><a><ListItemText>FANTASY</ListItemText></a></Link>
                        </ListItemIcon>
                    </ListItem>
                   
                </List>
            </Drawer>
            <IconButton  onClick={() =>setOpenDrawer(!openDrawer)}>
             
            </IconButton>
        </div>
    )
}

export default DrawerCom