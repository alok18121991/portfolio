import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Welcome from './components/welcomePage/welcome';
import Experience from './components/experienceView/experience';

function App() {
  return (
    <div className="App">
       <Header/>
       <Welcome/>
       <Experience/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    
  );
}

export default App;
