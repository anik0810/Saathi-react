import React from 'react';
import background from './images/background.jpg';
import './CSS/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHeart,faHandHoldingHeart,faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <div className='main'>
        <div className='background'>
          <img src={background}></img>
        </div>
      </div>
      <div className='why'>
        <h>Why Saathi?</h>
        <div className='box'>
          <div className='inner-box'>
            <div className="icon"><FontAwesomeIcon icon={faShieldHeart} /></div>
            <br/>
            <h1>Security</h1>
            <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate delectus porro.</p1>
          </div>
          <div className='inner-box'>
          <div className="icon"><FontAwesomeIcon icon={faHandHoldingHeart} /></div>
            <br/>
            <h1>Ambulance</h1>
            <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate delectus porro.</p1>
          </div>
          <div className='inner-box'>
            <div className="icon"><FontAwesomeIcon icon={faHandshakeSimple} /></div>
            <br/>
            <h1>Easy to Use</h1>
            <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate.</p1>
          </div>
        </div>
      </div>
    </>
  )
}
