import './App.css';
import { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import Nav from './components/Nav'
import About from './components/about'
import Login from './components/login'
import Signup from './components/signup'
import Help from './components/help'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

// This code provides the API routes for each page.
return(
  <ApolloProvider client={client}>
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/help' element={<Help />} /> */}
      </Routes>
    </Router>
  </ApolloProvider>
);

// the 0 in the useState function is representing the current page the app is rendering, can use a string
// intial page is named current page, can change page using setcurrentpage
// function display() {
//   if(currentPage===1) {
//     return <About></About>
//   }
//   // else if (currentPage===1){
//   //   return <Login></Login>
//   // }
//   else if (currentPage===2){
//     return <Signup></Signup>
//   }
//   else if(currentPage===3) {
//     return <Help></Help>
//   }
// }
//   const [currentPage , setcurrentPage] = useState(0);
//   return (
//     <div className="App">
//       {/* jsx element */}
//       <Nav setcurrentPage={setcurrentPage}></Nav>
      
//     <Home setcurrentPage={setcurrentPage}></Home>
//     {currentPage}
//     {display()};
    
    
    
//     </div>
//   );
}



export default App;
