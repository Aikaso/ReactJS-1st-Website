import React from 'react';
import { Link } from 'react-router-dom';
import './Boxes.css'

function Boxes() {
  return( 
  <div className='boxes__section'>
      <div className="boxes__container">
          <Link to='/' className="boxes__container-card">
            <h3>M</h3>
          </Link>
          <Link to='/' className="boxes__container-card">
            <h3>A</h3>
          </Link>
          <Link to='/' className="boxes__container-card">
            <h3>R</h3>
          </Link>
          <Link to='/' className="boxes__container-card">
            <h3>K</h3>
          </Link>
          <Link to='/' className="boxes__container-card">
            <h3>E</h3>
          </Link>
          <Link to='/' className="boxes__container-card">
            <h3>T</h3>
          </Link>
          <Link to='/' className="boxes__container-card">
            <h3>I</h3>
          </Link>
          <Link to='/' className="boxes__container-card">
            <h3>N</h3>
          </Link>
          <Link to='/' className="boxes__container-card">
            <h3>G</h3>
          </Link>
      </div>
  </div>
  );
}

export default Boxes;
