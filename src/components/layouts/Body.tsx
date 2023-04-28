import * as React from 'react';
import { Typography, Box } from '@mui/material';

export default function Body() {
  React.useEffect(() => {
    function createStars(type, qty) {
      for(let i = 0; i < qty; i++) {
        let star = document.createElement('div');
        star.classList.add('star', `type-${type}`);
        star.style.left = `${randomNumber(1, 99)}%`;
        star.style.bottom = `${randomNumber(1, 99)}%`;
        star.style.animationDuration = `${randomNumber(50, 200)}s`;
        document.querySelector('.stars-wrapper').appendChild(star);
      }
    }
    
    function randomNumber(min, max) {
      return Math.floor(Math.random() * max) + min;
    }
    
    createStars(1, 100);
    createStars(2, 85);
    createStars(3, 70);
  })
  return (
    <Box>
      <div className="stars-wrapper">
        <div className="container">
          <svg viewBox="0 0 960 300">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="50%">Yassine</text>
              <text textAnchor="middle" x="50%" y="95%">Benosmane</text>
            </symbol>
            <g className="g-ants">
              <use xlinkHref="#s-text" className="text-copy" />
              <use xlinkHref="#s-text" className="text-copy" />
              <use xlinkHref="#s-text" className="text-copy" />
              <use xlinkHref="#s-text" className="text-copy" />
              <use xlinkHref="#s-text" className="text-copy" />
            </g>
          </svg>
        </div>
        <Box sx={{textAlign:"center"}}>
          <Typography sx={{color:"#FDB731"}}>
            Full-Stack Developer, currently sleeping...
          </Typography>
        </Box>
      </div>
    </Box>
  )
}
function componentDidMount() {
  throw new Error('Function not implemented.');
}

