import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div id="header">
        <div>Logo</div>
        <div id='navBtnContainer'>
            <div>Contact us</div>
            <div>About us</div>
            <div>Home</div>
        </div>
        <div id='LoginBtnContainer'>
            <div>Login</div>
            <div>Signup</div>
        </div>
    </div>
  )
}
