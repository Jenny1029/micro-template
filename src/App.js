import { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import microAppList from './microAppList';

import './App.css';

const style = {
  marginRight: "20px"
}

const App = () => {
  const [activeNav, setActiveNav] = useState(window.location.pathname)
  return (
    <div className="App">
      <Router>
        <div className="nav-list">
          <Link to="/micro/" style={style}>我是基座导航</Link>
          {microAppList.map((item) => {
            return <Link onClick={() => {setActiveNav(item.activeRule)}} className={item.activeRule === activeNav ? "nav-active" : ''} to={`${item.activeRule}${window.location.search}`} key={item.name} style={style}>{item.name}</Link>
          })}
        </div>
      </Router>
      <header className="App-header">
        <div>
          基座内容+业务公共区
        </div>
      </header>
      <div id="subapp" style={{  background: '#fdd', height: 'calc(100% - 15vh)'}}>
          这里是子应用内容区
      </div>
    </div>
  );
}

export default App;
