import React from 'react';
// import {ReactComponent as HeadText} from './HeadText.svg';
import SBLogo from './SBLogo.png';




const App = () => {
    return (
        <div className='sec4'>
            <div className="txt4">
                <p className='txt41'>The Future</p>
                <p className="txt42">What began as a small event is now on a journey to conquer the nation. With our strategic approach and passionate community, we are determined to bring Mora Foresight to every corner of the country <br /> <br />
                    Foresight Academy conducts selection rounds in partnering universities. These rounds serve as gateways for talented individuals to join us on this transformative journey. <br /> <br />
                    Are you eager to be a part of this visionary movement? Join us as a participant or volunteer. Collaborate with us as an IEEE student branch. Together, let's create a brighter tomorrow.
                </p>
            </div>
            <div className="sec5">
                <img src={SBLogo} alt=""></img>
                <p className="txt5">The Institute of Electrical and Electronics Engineers (IEEE) is a professional organization dedicated to advancing technology for humanity. With over 400,000 members in over 160 countries, 
                IEEE is the world's largest technical professional organization. IEEE produces over 30% of the world's literature in the electrical and electronics engineering and computer science fields, and sponsors over 1,900
                 conferences and events annually. Its mission is to foster technological innovation and excellence for the benefit of humanity.
                </p>
            </div>
        </div>





    );
}
export default App;

