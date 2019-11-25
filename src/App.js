import React , {Component}from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//import React from 'react';
import Header from './components/headerComponent/header';
import Main from './components/mainComponent/main';
import Footer from './components/footerComponent/footer';
import Nav from './components/navComponent/nav';



import './css/Style.css';
// class App extends Component{
//   render(){
//     return
//       <div classname="App">

//       </div>

//   }

// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component{
  render(){
    return (
      <Router>
      <div>
        <Header />
        <div className="main_block">
          
          <Main />
          <Nav/>
            
          
          
        </div>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
