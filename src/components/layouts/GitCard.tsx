import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import {githubIcon} from '../../assets/icons/iconGit'

interface CardProps {
  key: number
  name: string
  description: string
  language: string
  url: string
}

export default function GitCard({key, name, description, language, url}: CardProps) {
  return (
    <Card variant="outlined" sx={{justifyContent: 'center', width: 200, height: 300, minWidth: 225, boxShadow: '0 0 10 10', backgroundColor: '#ffffffe7', m: 1, p:1, textAlign: 'center', borderRadius: '35px'  }} key={key}>
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
          <Typography variant="body2" className="card_text">
            {description}
          </Typography>
        </CardContent>
        <CardActions className="card_details" sx={{justifyContent:'center'}}>
          <Button 
            style={{
              borderRadius: 35,
              backgroundColor: "#748d8c",
              padding: "6px 12px",
              fontSize: "9px"
            }} 
            size="small" 
            variant="contained" 
            target="_blank" 
            href={url}>
             <Typography sx={{fontSize: '0.6rem'}}>Source</Typography> 
             <SvgIcon sx={{pl: 0.5, ml: 0.5, fontSize: '1.3rem'}}>{githubIcon}</SvgIcon>
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