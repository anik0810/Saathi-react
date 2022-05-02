import React,{useState} from 'react';
import girl from './images/girl.png';
import './CSS/guide.css'

//guide and how it works string
const a="Today is the day I'll finally know what brick tastes like.When motorists sped in and out of traffic, all she could think of was those in need of a transplant.Joyce enjoyed eating pancakes with ketchup.She wasn't sure whether to be impressed or concerned that he folded underwear in neat little packages.Best friends are like old tomatoes and shoelaces.I never knew what hardship looked like until it started raining bowling balls.The stranger officiates the meal.Nancy was proud that she ran a tight shipwreck."
const b="He looked behind the door and didn't like what he saw.Mary plays the piano.She felt that chill that makes the hairs on the back of your neck when he walked into the room.I've never seen a more beautiful brandy glass filled with wine.Normal activities took extraordinary amounts of concentration at the high altitude.Angle is good.She loves me"

export default function Guide() {
    //buttons functions
    
    const [text,setText]=useState(a);
    const changeText2 = ()=>{
        setText(b);
    }
    const changeText1 = ()=>{
    setText(a);
  }
  return (
    <>
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
    </>
  )
}
