import AcademyLogo from './AcademyLogo.png';

const NavBar = () => {
    return (
      <div className="navbar">
        <div className="leftNav">
          <img className='AcademyLogo' src={AcademyLogo} alt=""></img>
        </div>
        <div className="rightNav">
          <ul className='navList'>
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