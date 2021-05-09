import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Welcome from './components/welcomePage/welcome';
import Experience from './components/experienceView/experience';
import Projects from './components/projectView/projectView';
import Skills from './components/skillsView/skillsView';
import Contact from './components/contactView/contactView';
import Footer from './components/footer/footer';
import { Route, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App p-2 bg-dark" >
      <Header />
        <Switch>
          <Route path="/home">
            <Welcome/>
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

      {/* <Welcome/> */}
       {/* <Experience/>
      <Projects />
      <Skills />
      <Contact /> */}
      <Footer />
      {/* <header className="App-header">
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
      </header> */}

    </div>

  );
}

export default App;
