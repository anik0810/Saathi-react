import React,{useState} from 'react';
import bg from './images/bg.png';
import girl from './images/girl.png';
import lock from './images/shield.jpg';
import hand from './images/hands.jpg';
import love from './images/love.jpg';
import './CSS/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown,faPhone,faBattery2,faAmbulance,faMusic,faHeart,faFireFlameCurved,faUser,faHouseChimney, faFaceGrinWide} from '@fortawesome/free-solid-svg-icons';
const a="Today is the day I'll finally know what brick tastes like.When motorists sped in and out of traffic, all she could think of was those in need of a transplant.Joyce enjoyed eating pancakes with ketchup.She wasn't sure whether to be impressed or concerned that he folded underwear in neat little packages.Best friends are like old tomatoes and shoelaces.I never knew what hardship looked like until it started raining bowling balls.The stranger officiates the meal.Nancy was proud that she ran a tight shipwreck."
const b="He looked behind the door and didn't like what he saw.Mary plays the piano.She felt that chill that makes the hairs on the back of your neck when he walked into the room.I've never seen a more beautiful brandy glass filled with wine.Normal activities took extraordinary amounts of concentration at the high altitude.Angle is good.She loves me"
export default function Home() {
  const [text,setText]=useState(a);
  
  const changeText2 = ()=>{
    setText(b);
  }
  const changeText1 = ()=>{
    setText(a);
  }
  const[mode,setMode]=useState('less');
  const[textmode,setTextmode]=useState('More')
  const more =()=>{
    if((mode==='less')){
      setMode('more');
      setTextmode('Less');
      document.getElementById("tool").style.display='grid';
      document.getElementById("tool").style.transitionDuration='0.8s';
    }
    else{
      setMode('less');
      setTextmode('More');
      document.getElementById("tool").style.display='none';
    }
  }
  return (
    <>
      <div className='head'>
        <div className='left_head'>
          <h>Your <span>Saathi</span> Always With you</h>
          <p>The view from the lighthouse excited even the most seasoned traveler.
              I currently have 4 windows open up…and I don’t know why.
                You're unsure whether or not to trust him, but very thankful that you wore a turtle neck.
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
      <div className='why'>
        <h>Why Saathi?</h>
        <p>Today is the day I'll finally know what brick tastes like.
            <span>
              When motorists sped in and out of traffic, all she could think of was those in need of a transplant.
            </span>
            </p>
        <div className='box'>
          <div className='inner-box'>
            <div className='inner'>
            <img src={lock}/>
            <h1>Security</h1>
            <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p1>
                </div>
          </div>
          <div className='inner-box'>
            <div className='inner'>
            <img src={love}/>
              <h1>Life Saver</h1>
              <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p1>
            </div>
          </div>
          <div className='inner-box'>
            <div className='inner'>
              <img src={hand}/>
              <h1>Easy to Use</h1>
              <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p1>
            </div>
          </div>
        </div>
      </div>

      <div className='service'>
        <h>Tools</h>
        <div className='service-box1'>
          <div className='inner-service'>
            <div className="service-icon"><FontAwesomeIcon icon={faPhone} /></div>
            <br/>
            <h>Feel Unsafe</h>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='inner-service'>
            <div className="service-icon"><FontAwesomeIcon icon={faAmbulance} /></div>
            <br/>
            <h>Ambulance</h>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='inner-service'>
            <div className="service-icon"><FontAwesomeIcon icon={faBattery2} /></div>
            <br/>
            <h>Need Blood</h>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='inner-service'>
            <div className="service-icon"><FontAwesomeIcon icon={faFireFlameCurved} /></div>
            <br/>
            <h>Fire Brigade</h>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

          <div id='tool'>
          <div className='service-box2'>
          <div className='inner-service'>
            <div className="service-icon"><FontAwesomeIcon icon={faUser} /></div>
            <br/>
            <h>Police</h>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='inner-service'>
            <div className="service-icon"><FontAwesomeIcon icon={faHouseChimney} /></div>
            <br/>
            <h>Call your family</h>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='inner-service'>
            <div className="service-icon"><FontAwesomeIcon icon={faMusic} /></div>
            <br/>
            <h>Listen Music</h>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='inner-service'>
            <div className="service-icon"><FontAwesomeIcon icon={faHeart} /></div>
            <br/>
            <h>Call your Loved ones</h>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      </div>

      <div className='more_button'>
        <button className='more' onClick={more}>{textmode} Tools 
            <div className="more-icon"><FontAwesomeIcon icon={faArrowDown} /></div>
        </button>
      </div>


      <div className='main'>
      <div className='document'>
        <div className='left_doc'>
            <img src={girl}/>
        </div>
        <div className='right_doc'>
          <button className='Guide' onClick={changeText1}>Quick Guides</button>
          <button className='Work'onClick={changeText2}>How it works</button>
          <p>{text}</p>
        </div>
      </div>
      </div>
    </>
  )
}
