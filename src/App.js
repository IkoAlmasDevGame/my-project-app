import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import Intro from './Components/Intro';
import NewLatest from './Components/Latest';
import NewOld from './Components/Old';
import Created from './Components/created';

import './Style/LandingPage.css';

function App() {
  return (
    <div>
      <div className='MyBg'>
        <NavigationBar />
        <Intro />
      </div>
      <div className='latest'>        
        <NewLatest />
      </div>
      <div className='old'>        
        <NewOld />
      </div>
      <div>
        <h3 style={{fontSize:"18px"}}>About Me</h3>
        <Created />
      </div>
    </div>
  );
}

export default App;
