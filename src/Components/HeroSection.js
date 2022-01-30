import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import "./HeroSection.css";

function HeroSection( {
   topLine,
   headLine,
   description,
   buttonLabel,
   img,
   alt,
}) {
    return (
    <div className='home__hero-section'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="home__hero-text-wrapper">
                        <div className="top-line">{ topLine }</div>
                        <h1 className='heading'>{ headLine }</h1>
                        <p className='home__hero-subtitle'>{ description }</p>
                        <Link to="/">
                            <Button buttonSize='btn--wide' buttonColor='blue'>{ buttonLabel }</Button>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="home__hero-img-wrapper">
                        <img src={img} alt={alt} className='home__hero-img' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default HeroSection;
