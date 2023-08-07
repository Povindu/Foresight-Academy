
import NavBar from './comp/navBar/navBar.js';
import TopSec from './comp/TopSec/TopSec.js';
import Sec2 from './comp/Sec2/Sec2.js';
import Sec3 from './comp/Sec3/Sec3.js';


function App() {

  
  
  return (
    <div className="App">
      <NavBar />
      <div className="midContent">
        <TopSec />
        <Sec2 />
        <Sec3 />
      </div>
    </div>
  );
}

export default App;
