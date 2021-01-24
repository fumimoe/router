import React from 'react';
import {HashRouter as Router,Route,Link}from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'

function App() {


  return (
   <div className="App">
     <h1>Hello World</h1>
     <Router>
       <ul>
         <li><Link to="/">home</Link></li>
         <li><Link to="/about">about</Link></li>
       </ul>
       <Route path="/" exact component={Home}></Route>
       <Route path="/about/:id" exact component={About}></Route>
     </Router>
     
   </div>
  );
}

export default App;
