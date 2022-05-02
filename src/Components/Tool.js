import React,{useState} from 'react';
import './CSS/tools.css';
//import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import fontawesome icons
import {faArrowDown,faBattery2,faAmbulance,faMusic,faHeart,faFireFlameCurved,faUser,faHouseChimney,faPhone} from '@fortawesome/free-solid-svg-icons';

export default function Tool() {
        
    const[mode,setMode]=useState('less');
    const[textmode,setTextmode]=useState('More')
    
    /*more function set more tools and less tools*/

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
        {/*Service class is main class which set the padding around the boxes */}
        
        <div className='service'>
        <h>Tools</h>

        {/* service-box1 class is visible all times,it contains first four boxes  */}

        <div className='service-box1'>
          <div className='inner-service' >
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

        {/*Tool id is used to hide the portion */}

        <div id='tool'>
        
          {/*This portion will be appear after clicking more tools */}

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
    {/*The more and less button*/}
      <div className='more_button'>
        <button className='more' onClick={more}>{textmode} Tools 
            <div className="more-icon"><FontAwesomeIcon icon={faArrowDown} /></div>
        </button>
      </div>
    </>
  )
}
