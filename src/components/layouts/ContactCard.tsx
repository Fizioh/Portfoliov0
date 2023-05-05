import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface ContactProps {
    id: number
    name: string
    color: string
    icon: string
    alias: string
    url: string
    theme: string
}

export default function ContactCard({id, name, icon, alias, url, color, theme} :ContactProps) {
  return (
    <Card key={id} sx={{ width: 380, height: 500, borderRadius: '35px', textAlign: 'center', background: color, boxShadow: 'rgba(255, 255, 255, 0.24) 0px 3px 8px;', color: theme, display: 'flex' }}>
      <CardHeader
        title={name}
        subheader={alias}
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="subtitle2">
            {url}
        </ Typography>
      </CardContent>
      <CardActions disableSpacing sx={{justifyContent: 'center'}}>
        <IconButton aria-label="add to favorites">
          <KeyboardDoubleArrowUpIcon sx={{color: theme}} />
        </IconButton>
      </CardActions>
    </Card>
  );
}