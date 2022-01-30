import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Blog.css';

function Blog( {
    heading,
    content,
    buttonLabel,
    image,
    alt,
}) {
  return( 
  <div className='blog__section'>
      <div className="blog__container">
          <div className="blog__row">
          <div className="blog__col">
                  <div className="blog__img-wrapper">
                      <img src={image} alt={alt} className='blog__blog-img' />
                  </div>
              </div>
              <div className="blog__col">
                  <div className="blog__text-wrapper">
                      <h1 className='blog__heading'>{ heading }</h1>
                      <p className='blog__content'>{ content }</p>
                      <Link to='/' className='blog-btn'>
                        <Button buttonSize='btn--large' buttonColor='primary'>
                            { buttonLabel }
                        </Button>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
}

export default Blog;
