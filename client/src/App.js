import './App.css';
import Home from './components/home'
import { useState } from 'react';


// state is being used to render the new pages when clicked!
// test pull req to git hub
function App() {
// the 0 in the useState function is representing the current page the app is rendering, can use a string
// intial page is named current page, can change page using setcurrentpage
// function display() {
//   if(currentPage===0) {
//     return <About></About>
//   }
//   else if (currentPage===1){
//     return <Portfolio></Portfolio>
//   }
//   else if (currentPage===2){
//     return <Contact></Contact>
//   }
//   else if(currentPage===3) {
//     return <Resume></Resume>
//   }
// }
  const [currentPage , setcurrentPage] = useState(0);
  return (
    <div className="App">
      {/* jsx element */}
      <Home></Home>
    {/* <Home setcurrentPage={setcurrentPage}></Home> */}
    {currentPage}
    {/* {display()}; */}
    
    
    
    </div>
  );
}

export default App;
