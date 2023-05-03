import React from 'react';
import axios from 'axios';
import {Typography, Box} from '@mui/material';
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
        <Typography>
            Projets
        </Typography>
        <Box sx={{m: 1, p:1, display: 'flex', justifycontent: 'center', maxWidth: '800px'}}>
            {repos.map((repo) => ( 
                <GitCard key={repo.id} name={repo.name} description={repo.description} language={repo.language} />
            ))}
        </Box>
    </Box>
  )
}
