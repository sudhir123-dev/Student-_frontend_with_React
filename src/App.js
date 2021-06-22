import React  from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Container, Row, Col} from "reactstrap";
import {ToastContainer,toast} from "react-toastify"
import Home from './components/Home';
import Menu from './components/Menu';
import Header from './components/Header';
import Home1 from './components/Home1'; 
import {BrowserRouter as Router, Route} from "react-router-dom";
import AllStudent from './components/AllStudent';
import About from './components/About';
import Update from './components/Update';
function App() {
  const btnHandle=()=>{
  toast.success("successful");
  }
return(
  <div>
 <Router>
  <ToastContainer/>
    <Header/>
       <Container>
         <Row>
           <Col md={4}>
             <Menu/>
           </Col>
           <Col md={8}>
            <Route path="/" component={Home} exact/>
            <Route path="/Add Student" component={Home1} exact/>
            <Route path="/View Student" component={AllStudent} exact/>
            <Route path="/About" component={About} exact/>
            <Route path="/update" component={Update} exact/>
           </Col>
         </Row>
       </Container>
  </Router>
   
  </div>
);
}

export default App;
