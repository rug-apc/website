import Navbar from './components/Navbar.js';
import Block1 from './components/Block1.js';
import Block2 from './components/Block2.js';
import Block3 from './components/Block3.js';
import Block4 from './components/Block4.js';
import Footer from './components/Footer.js';

import './style/large.css';
import './style/medium.css';
import './style/small.css';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Block1></Block1>
     <Block2></Block2>
     <Block4></Block4>
     <Block3></Block3>
     <Footer></Footer>
    </div>
  );
}

export default App;
