import React from "react";
import './Navigation.css';

import feedIcon from '../../../../assets/images/leaf.png'
import collectionIcon from '../../../../assets/images/park.png'
import recognizeIcon from '../../../../assets/images/photo.png'

export const Navigation: React.FC = () => {
  return (
    <nav className="nav">
      <a href='/'>
        <img src={feedIcon} alt='Feed'/>
        <span>Feed</span>
      </a>
      <a href='/'>
        <img src={collectionIcon} alt='collection'/>
        <span>My collection</span>
      </a>
      <a href='/'>
        <img src={recognizeIcon} alt='recognize'/>
        <span>Recognize</span>
      </a>
    </nav>
  );
};
