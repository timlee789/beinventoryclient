import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@mui/material';
import cla from './form.module.css';

export default function Navbar() {

 // const rout = ["/itemIn", "/itemOut", "/upcSearch", '/codeSearch', "/nameSearch"]
  return (
    <div>
      <AppBar>
        <Toolbar>
    
        
         <Link href='/itemIn'><div className={cla.menutext}>IN</div></Link>
         <Link href='/itemOut'><div className={cla.menutext}>OUT</div></Link>
         <Link href='/upcSearch'><div className={cla.menutext}>UPC</div></Link>
         <Link href='/codeSearch'><div className={cla.menutext}>BIN</div></Link>
         <Link href='/nameSearch'><a><div className={cla.menutext}>ITEM</div></a></Link>
        
      
    </Toolbar>
    </AppBar>
    </div>
  );
}