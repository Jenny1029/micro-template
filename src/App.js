import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/submicro/app/subreact' : '/'}>
       {/* <div>这是sub-react</div> */}
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          react 的子应用
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
    </Router> 
  );
}

export default App;
