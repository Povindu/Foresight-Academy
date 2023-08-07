import AcademyLogo from './AcademyLogo.png';
import HamIcon from './HamIcon.png';

const NavBar = () => {
    function HamMenu(){
      document.getElementsByClassName("navHamMenu").style.display = "block";
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
        <div className="HamButton" onClick={HamMenu}>
          <img src={HamIcon} alt=""></img>
        </div>

      </div>
      <div>
        <ul className='navHamMenu'>
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