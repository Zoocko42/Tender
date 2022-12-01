// These imports are from the npm packages.
import './App.css';
import { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// The following imports are bringing in component pages.
import Home from './components/home'
import Nav from './components/Nav'
import About from './components/about'
import Login from './components/login/login'
import ParentLogin from './components/login/parent'
import SitterLogin from './components/login/sitter'
import Signup from './components/signup/signup'
import ParentSignup from './components/signup/parent'
import SitterSignup from './components/signup/sitter'
import ParentAccount from './components/accounts/paccount'
import SitterAccount from './components/accounts/saccount'
import Help from './components/help'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers, authorization: token ? `Bearer ${token}`: ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
          <Route path="/signup/parent" element={<ParentSignup />} />
          <Route path="/signup/sitter" element={<SitterSignup />} />
        <Route path='/login' element={<Login/>}/>
          <Route path='/login/parent' element={<ParentLogin />} />
          <Route path='/login/sitter' element={<SitterLogin />} />
        <Route path='/about' element={<About />} />
      <Route path='/sitter/saccount' element={<SitterAccount></SitterAccount>}></Route>
      <Route path="/parent/paccount" element={<ParentAccount></ParentAccount>}></Route>
        
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
