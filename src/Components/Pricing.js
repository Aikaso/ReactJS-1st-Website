import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { Button } from './Button';
import './Pricing.css';

function Pricing() {
  return ( <div>
      <div className="pricing__section">
          <div className="pricing__wrapper">
              <h1 className="pricing__heading">Marketing</h1>
              <div className="pricing__container">
                  <Link to='/' className="pricing__container-card">
                    <div className="pricing__cardInfo">
                        <div className="icon">
                            <FaFire />
                        </div>
                        <h3>Digital Marketing</h3>
                        <h4>$0.00</h4>
                        <p>per month</p>
                        <ul className="pricing__features">
                            <li>Research</li>
                            <li>Planning</li>
                            <li>Satisfaction</li>
                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='primary'>
                            Choose Plan
                        </Button>
                    </div>
                  </Link>
                  <Link to='/' className="pricing__container-card">
                    <div className="pricing__cardInfo">
                        <div className="icon">
                            <BsXDiamondFill />
                        </div>
                        <h3>SEO Marketing</h3>
                        <h4>$0.00</h4>
                        <p>per month</p>
                        <ul className="pricing__features">
                            <li>Research</li>
                            <li>Planning</li>
                            <li>Satisfaction</li>
                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='blue'>
                            Choose Plan
                        </Button>
                    </div>
                  </Link>
                  <Link to='/' className="pricing__container-card">
                    <div className="pricing__cardInfo">
                        <div className="icon">
                            <GiCrystalize />
                        </div>
                        <h3>Social Marketing</h3>
                        <h4>$0.00</h4>
                        <p>per month</p>
                        <ul className="pricing__features">
                            <li>Research</li>
                            <li>Planning</li>
                            <li>Satisfaction</li>
                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='primary'>
                            Choose Plan
                        </Button>
                    </div>
                  </Link>
              </div>
          </div>
      </div>
  </div>
  );
}

export default Pricing;
