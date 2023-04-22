import React from 'react'
import classes from './Navbar.module.css'

export const Navbar = ({navigation}) => {
  return (
    <nav className={classes.nav}>
      <img src="/GTLogo2.jpg" alt="logoimage" />
      <ul>
        <li onClick={()=>{return navigation('home')}}>Home</li>
        <li onClick={()=>{return navigation('onboarding')}}>Onboarding</li>
        <li onClick={()=>{return navigation('masters')}}>Masters</li>
        <li onClick={()=>{return navigation('validations')}}>Validations</li>
        <li onClick={()=>{return navigation('transactions')}}>Transactions</li>
        <li onClick={()=>{return navigation('mis')}}>MIS</li>
        <li onClick={()=>{return navigation('other')}}>Other</li>
        <li>About</li>
      </ul>
      <div className={classes.expire}>
        Your session will <br/> expire in: 14 : 53
      </div>
      <div className={classes.user}>
        <div>
          namenvldnvorenvrnvnvrerbergregrelrobreobreob<br/>
          <p>Manager</p>
        </div>
        <img src="/sampleuser.png" alt="profileimg" />
      </div>
    </nav>
  )
}
