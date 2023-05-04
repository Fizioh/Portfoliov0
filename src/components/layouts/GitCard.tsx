import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CardProps {
  key: number
  name: string
  description: string
  language: string
  url: string
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function GitCard({key, name, description, language, url}: CardProps) {
  return (
    <Card variant="outlined" sx={{ width: 350, height: 265, minWidth: 275, boxShadow: '0 0 10 10', backgroundColor: '#ffffffe7', m: 1, p:1  }} key={key}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {language}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" target="_blank" href={url}>More</Button>
      </CardActions>
    </Card>
  );
}