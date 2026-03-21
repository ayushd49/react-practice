// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/NavBar';
import { News } from './components/News';
import  { Component } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
          
          

          <Router>
            <Navbar/>
          <Routes>
          <Route   path="/" element={<News key="general" pageSize={7} category="general"/>}/>
          <Route   path="/business" element={<News  key="business" pageSize={7} category="business"/>}/>
          <Route   path="/entertainment" element={<News  key="entertainment" pageSize={7} category="entertainment"/>}/>
          <Route   path="/general" element={<News  key="general" pageSize={7} category="general"/>}/>
          <Route   path="/health" element={<News  key="health" pageSize={7} category="health"/>}/>
          <Route   path="/science" element={<News  key="science" pageSize={7} category="science"/>}/>
          <Route   path="/sports" element={<News  key="sports" pageSize={7} category="sports"/>}/>
          <Route   path="/technology" element={<News  key="technology" pageSize={7} category="technology"/>}/>
          </Routes>
          </Router>
      </>
    )
  }
}


// export default App;
