import React from 'react'
import './CSS/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  return (
    <>
        <div class="nav">
        <div className="bar"><FontAwesomeIcon icon={faBars} /></div>
            <ul className='navbar'>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contacts</li>
            </ul>
        </div>
    </>
  )
}
