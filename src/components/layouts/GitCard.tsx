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

export default function GitCard({key, name, description, language, url}: CardProps) {
  return (
    <Card variant="outlined" sx={{justifyContent: 'center', width: 300, height: 350, minWidth: 275, boxShadow: '0 0 10 10', backgroundColor: '#ffffffe7', m: 1, p:1, textAlign: 'center', borderRadius: '35px'  }} key={key}>
      <Box className="card_container">
        <CardContent className="card_details">
          <Typography variant="h5">
            {name}
          </Typography>
        </CardContent>
        {language && 
        <CardContent className="card_details">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {language}
          </Typography>
        </CardContent>}
        <CardContent className="card_details">
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardActions className="card_details" sx={{justifyContent:'center'}}>
          <Button 
            style={{
              borderRadius: 35,
              backgroundColor: "#748d8c",
              padding: "9px 18px",
              fontSize: "9px"
            }} 
            size="small" 
            variant="contained" 
            target="_blank" 
            href={url}>
              Source
            </Button>
            <Button 
            style={{
              borderRadius: 35,
              backgroundColor: "#49b249",
              padding: "9px 18px",
              fontSize: "9px"
            }} 
            size="small" 
            variant="contained" 
            target="_blank" 
            href={url}>
              Live Demo
            </Button>
          </CardActions>
      </Box>
    </Card>
  );
}