import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import ContactCard from '../components/layouts/ContactCard';


export default function Contact() {
  return (
    <div>
        <Navbar />
        <Typography>
            Contact
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around" m={1} p={1}>
        <ContactCard />
        <ContactCard />
        <ContactCard />
        </Box>
    </div>
  )
}
