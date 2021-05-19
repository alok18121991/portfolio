import './App.css';
import Header from './components/header/header';
import Welcome from './components/welcomePage/';
import Experience from './components/experienceView/experience';
import Projects from './components/projectView/projectView';
import Skills from './components/skillsView/skillsView';
import Contact from './components/contactView/contactView';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { exit, play } from './components/timelines';
import { Component } from 'react';
import ScrollToTop from './components/ScrollToTop';

class App extends Component{
  render(){
  return (
    <div className="App p-2 bg-dark" >
      <Router basename="/portfolio">
        <Header />
       
          {/* <ScrollToTop/>
          <Switch >
          <Route exact path="/" component={Welcome}/>
          <Route path="/home" component={Welcome}/>
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch> */}
        <Route render={({ location }) => {
          const { pathname, key } = location;
      return (
        <TransitionGroup component={null}>
        <Transition
          key={key}
          appear={true}
          onEnter={(node, appears) => play(pathname, node, appears)}
          onExit={(node, appears) => exit(node, appears)}
          timeout={{enter: 750, exit: 150}}
        >
        <Switch location={location}>
          <Route exact path="/" component={Welcome}/>
          <Route path="/home" component={Welcome}/>
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
       </Transition>
       </TransitionGroup>
      )}
      }
    />
        {/* <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Welcome />
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
        </Switch> */}
        <Footer />
        
      </Router>
      
    </div>

  );
}
}

export default App;
