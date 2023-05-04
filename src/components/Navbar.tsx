import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Link from 'next/link'


export default function Navbar() {
    const router = useRouter();
    const handleClick = (page : string) => {
        router.push('/' + page);
      };


    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{textAlign:"center"}}>
            <Toolbar sx={{display: 'flex', justifyContent:"center", p:1}}>
                <Link href={router.pathname !== "/home" ? "home" : "projects"}>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, m: 1 }}>
                    {router.pathname !== "/home" ? 'Home' : 'Projects'}
                    </Typography>
                </Link>
                <Link href="/contact">
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, m: 1 }}>
                    Contact
                    </Typography>
                </Link>
            </Toolbar>
            </AppBar>
        </Box>
    )
}