import React from 'react';
import axios from 'axios';
import {Typography, Box, List, ListItem} from '@mui/material';
import Navbar from '../components/Navbar';
import GitCard from '../components/layouts/GitCard'

export default function Projets() {
    const [repos, setRepos] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://api.github.com/users/fizioh/repos')
        .then(res => {
            console.log(res.data);
            setRepos(res.data);
        })
    })
  return (
    <Box sx={{width: '100%'}}>
        <Navbar />
        <Box display="flex" flexWrap="wrap" justifyContent="center" m={1} p={1}>
            {repos.map((repo) => ( 
                <GitCard key={repo.id} name={repo.name} description={repo.description} language={repo.language} url={repo.html_url} />
            ))}
        </Box>
    </Box>
  )
}
