import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import microAppList from './microAppList';

const style = {
  marginRight: "20px"
}

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/" style={style}>Home</Link>
        {microAppList.map((item) => {
          return <Link to={item.activeRule} key={item.name} style={style}>{item.name}</Link>
        })}
      </Router>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          这就是个基座
        </div>
      </header>
      <div id="subapp" ></div>
    </div>
  );
}

export default App;
