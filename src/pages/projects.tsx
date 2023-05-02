import React from 'react';
import axios from 'axios';
import {Typography, Box, Card} from '@mui/material';

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
    <div>
        <Typography>
            Projets
        </Typography>
        <Box>
            {repos.map((repo) => ( 
                <Card key={repo.id}>
                    <Typography>
                        {repo.name}
                    </Typography>
                    <Typography>
                        {repo.description}
                    </Typography>
                    <Typography>
                        {repo.language}
                    </Typography>
                </Card>
            ))}
        </Box>
    </div>
  )
}
