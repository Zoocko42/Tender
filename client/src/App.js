import './App.css';
import Home from './components/home'
import Nav from './components/Nav'
import { useState } from 'react';
import About from './components/about'
// import Login from './components/login'
import Signup from './components/signup'
import Help from './components/help'



function App() {
// the 0 in the useState function is representing the current page the app is rendering, can use a string
// intial page is named current page, can change page using setcurrentpage
function display() {
  if(currentPage===1) {
    return <About></About>
  }
  // else if (currentPage===1){
  //   return <Login></Login>
  // }
  else if (currentPage===2){
    return <Signup></Signup>
  }
  else if(currentPage===3) {
    return <Help></Help>
  }
}
  const [currentPage , setcurrentPage] = useState(0);
  return (
    <div className="App">
      {/* jsx element */}
      <Nav setcurrentPage={setcurrentPage}></Nav>
      
    <Home setcurrentPage={setcurrentPage}></Home>
    {currentPage}
    {display()};
    
    
    
    </div>
  );
}



export default App;
