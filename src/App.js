import React, { Component } from 'react'
import About from './About'
import Contact from './Contact'
import {Route,Switch,Link} from "react-router-dom"
import Dog from './Dog'
import './App.css'
class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="app-nav">
          <ul className="nav-elements">
              <li className = 'ele imp'> <Link to = '/' className = 'ele'>About</Link></li>
              <li className = 'ele con'>  <Link to = '/Contact' className = 'ele'>Contact</Link></li >
              <li className = 'ele dog'> <Link to = '/Dog' className = 'ele'>Dog</Link></li>
          </ul>
          
        </div>
        <Switch>
          <Route exact  path = '/Contact' component = {Contact}/>
          <Route exact path = '/' component = {About}/>
          <Route exact path = '/Dog' component = {Dog}/>
        </Switch>


      </div>
    )
  }
}
export default App