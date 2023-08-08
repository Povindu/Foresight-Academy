
import NavBar from './comp/navBar/navBar.js';
import TopSec from './comp/TopSec/TopSec.js';
import Sec2 from './comp/Sec2/Sec2.js';
import Sec3 from './comp/Sec3/Sec3.js';
import Sec4 from './comp/Sec4/Sec4.js';

import circle2 from './resources/Ellipse 2.png';
import circle3 from './resources/Ellipse 3.png';
import circle4 from './resources/Ellipse 4.png';

import Social1 from './comp/Sec4/facebook.png';
import Social2 from './comp/Sec4/insta.png';
import Social3 from './comp/Sec4/web.png';

function App() {

  return (
    <div className="App">
      
      <NavBar />

      <div className="midContent">
        <TopSec />
        <Sec2 />
        {/* <Sec3 /> */}
        <Sec4 />
      </div>

      <div className="circle2">
        <img src={circle2} alt=""></img>
      </div>
      <div className="circle3">
        <img src={circle3} alt=""></img>
      </div>

      <div className="SocialLogo SocialLogo1">
        <ul>
          <li><a href='https://www.facebook.com/IEEEUOMSB/ 'target="_blank" ><img className="social1" src={Social1} alt=""></img></a></li>
          <li><a href='https://www.instagram.com/ieeesbuom/?hl=en'target="_blank" ><img className="social2" src={Social2} alt=""></img></a></li>
          <li><a href='https://site.ieee.org/sb-moratuwa/' target="_blank" ><img className="social3" src={Social3} alt=""></img></a></li>
        </ul>
      </div>
      
      <div className="circle4">
        <img src={circle4} alt=""></img>
      </div>

    </div>




  );
}

export default App;
