import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';


export default function Navbar() {
    const router = useRouter();
    const handleClick = (page : string) => {
        router.push('/' + page);
      };


    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{textAlign:"center"}}>
            <Toolbar sx={{display: 'flex', justifyContent:"center"}}>
                <Button color="inherit" onClick={() => {handleClick('projects')}}>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                    {} Projets
                    </Typography>
                </Button>
                <Button color="inherit" onClick={() => {handleClick('about')}}>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                    Contact
                    </Typography>
                </Button>
            </Toolbar>
            </AppBar>
        </Box>
    )
}