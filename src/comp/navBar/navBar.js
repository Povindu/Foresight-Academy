import AcademyLogo from './AcademyLogo.png';
import HamIcon from './HamIcon.png';
import { useState } from 'react';

const NavBar = () => {
  const [toggle, setToggle] = useState(0);
  const hamMenu = () => {
    
    if(toggle == 0){
      const ele = document.getElementsByClassName('navHamMenu')[0]; 
      ele.style.display = "block";
      document.getElementsByClassName('SocialLogo')[0].classList.toggle("SocialLogo2");
      setToggle(1);
    }
    else{
      const ele = document.getElementsByClassName('navHamMenu')[0]; 
      ele.style.display = "none";
      document.getElementsByClassName('SocialLogo')[0].classList.toggle("SocialLogo1");
      
      setToggle(0);
    }

    }

      
    return (
      <div>
      <div className="navbar">
        <div className="leftNav">
          <img className='AcademyLogo' src={AcademyLogo} alt="efe"></img>
        </div>
        <div className="rightNav">
          <ul className='navList'>
            <li className='navBut navBut1'>HOME</li>
            <li className='navBut navBut2'>MERCH</li>
            <li className='navBut navBut3'>IEEE</li>
            <li className='navBut navBut4'>CONTACT US</li>
          </ul>
        </div>
        <div className="HamButton" onClick={hamMenu}>
          <img src={HamIcon} alt=""></img>
        </div>

      </div>
      <div>
        <ul className='navHamMenu' id="navHamMenu">
            <li className='navBut navBut1'>HOME</li>
            <li className='navBut navBut2'>MERCH</li>
            <li className='navBut navBut3'>IEEE</li>
            <li className='navBut navBut4'>CONTACT US</li>
          </ul>
      </div>
      </div>
    );
  }
   
  export default NavBar;