import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: "#FDB731"}}>
            <Toolbar sx={{display: 'flex', justifyContent:"center"}}>
                <Button color="inherit">
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                    Projets
                    </Typography>
                </Button>
                <Button color="inherit">
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                    Contact
                    </Typography>
                </Button>
            </Toolbar>
            </AppBar>
        </Box>
    )
}