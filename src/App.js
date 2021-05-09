import './App.css';
import Header from './components/header/header';
import Welcome from './components/welcomePage/welcome';
import Experience from './components/experienceView/experience';
import Projects from './components/projectView/projectView';
import Skills from './components/skillsView/skillsView';
import Contact from './components/contactView/contactView';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App p-2 bg-dark" >
      <BrowserRouter>
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
      <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
