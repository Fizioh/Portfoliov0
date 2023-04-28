import * as React from 'react';

export default function Body() {
  return (
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
  )
}
