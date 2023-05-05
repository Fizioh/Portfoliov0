import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import ContactCard from '../components/layouts/ContactCard';
import dataContact from '../assets/data/dataContact.js'

interface ContactProps {
  id: number
  name: string
  color: string
  icon: string
  alias: string
  url: string
  theme: string
}

export default function Contact() {
  return (
    <div className="stars-wrapper">
        <Navbar />
        <Box display="flex" flexWrap="wrap" justifyContent="space-around" m={1} p={1}>
        {dataContact.map((contact: ContactProps) => (
            <ContactCard 
                id={contact.id}
                name={contact.name}
                color={contact.color}
                icon={contact.icon}
                alias={contact.alias}
                url={contact.url}
                theme={contact.theme}
            />
        ))}
        </Box>
    </div>
  )
}
