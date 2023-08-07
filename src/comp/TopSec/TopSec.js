import React from 'react';
import {ReactComponent as HeadText} from './HeadText.svg';
import {ReactComponent as HeadCircle} from './Ellipse 28.svg';
// import HeadText2 from './HeadText.png';

const App = () => {
  return (
    <div className='section1'>

    <div className="HeadTextDiv">
      <HeadText />
    </div>
    <HeadCircle />
      




      {/* <HeadText className='HeadText' /> */}
      {/* <img className='HeadText2' src={HeadText2}></img> */}
      
      {/* <HeadEclipse className='HeadEclipse'/> */}
      {/* <img className='HeadEclipse' src={circle}></img> */}


    </div>





  );
}
export default App;

