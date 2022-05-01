import React from 'react';
import anik from './images/anik.png';
import adarsha from './images/adarsha.png';
import './CSS/dev.css'

export default function Devolpers() {
  return (
    <>
        <div className='devoloper'>
            <div className='anik'>
                <div className='container'>
                  <img src={anik}/>
                  <br/>
                  <br/>
                  <h>Anik Dutta</h>
                </div>
            </div>
            <div className='adarsha'>
                <img src={adarsha}/>
                <br/>
                <br/>
                <h> Swarnar Bor</h>  
            </div>
        </div>
    </>
  )
}
