import React from 'react';

//import photos

import bg from './images/bg.png';
import lock from './images/shield.jpg';
import hand from './images/hands.jpg';
import love from './images/love.jpg';
import './CSS/home.css';


export default function Home() {
  return (
    <>
      {/*This is head page*/}

      <div className='head'>
        <div className='left_head'>
          <h>Your <span>Saathi</span> Always With you</h>

          <p>The view from the lighthouse excited even the most seasoned traveler.
              I currently have 4 windows open up…and I don’t know why.
                You're unsure whether or not to trust him, but very thankful that you wore a turtle neck.
                
                {/*This portion will be hidden in mobile view */}
                
              <span>
                Normal activities took extraordinary amounts of concentration at the high altitude.
              </span>
              </p>
            <button className='view'>View Documentation</button>
        </div>
        <div className='right_head'>
          <img src={bg}/>
        </div>
      </div>


      {/*Why Saathi ??*/}

      <div className='why'>
        <h>Why Saathi?</h>
        <p>Today is the day I'll finally know what brick tastes like.
            <span>
              When motorists sped in and out of traffic, all she could think of was those in need of a transplant.
            </span>
            </p>
            
        {/*This contain three boxes*/}

        <div className='box'>
          <div className='inner-box'>

            {/*blue portion class inner*/}

            <div className='inner'>
            <img src={lock}/>
            <h1>Security</h1>
            <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p1>
                </div>
          </div>
          <div className='inner-box'>
            
            {/*blue portion class inner*/}

            <div className='inner'>
            <img src={love}/>
              <h1>Life Saver</h1>
              <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p1>
            </div>
          </div>
          <div className='inner-box'>

            {/*blue portion class inner*/}

            <div className='inner'>
              <img src={hand}/>
              <h1>Easy to Use</h1>
              <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p1>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
