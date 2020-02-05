import React from 'react';
import './App.css';
import { Register, Login, Dashbord,Profile } from "./components/Login/index";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Login/Navbar';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Dashbord} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
