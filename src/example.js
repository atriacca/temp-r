import React from 'react'
import ReactDOM from 'react-dom'

import App from "./App"

ReactDOM.render(<App />, document.getElementById('root'))

<h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>

React Router:
npm install --save react-router-dom
...
import { BrowserRouter } from "react-router-dom";
...
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById("root"));
// Need to import Switch and Route
import { Switch, Route } from "react-router-dom";
// Import the Navbar and Footer, which will always be on the screen:
import Navbar from "./Navbar";
import Footer from "./Footer";
// Also need to import our components representing the 
// different options for the main content of the site
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
// Here's the main App component. It doesn't have 
// state, so it can be a stateless functional component:
function App () {
    return (
        <div>
            <Navbar/>  {/*This is outside Switch, so it will always render*/}
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/services" component={Services}/>
            </Switch>
        </div>
    )
}




const names = ["john", "sean", "mike", "jean", "chris"];

const NamesList = () => (
  <div>
    <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
  </div>
);



componentDidMount(){

}