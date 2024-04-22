import React,{useState} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Categories from '../pages/Categories'

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  const Redirect = <Navigate to='/login' /> 
  return (
    <Routes>
        <Route exact path='/' element={ <Dashboard /> } />
        <Route exact path='/categories' element={ <Categories /> } />
        <Route exact path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route exact path='/signup' element={<SignUp setIsAuthenticated={setIsAuthenticated}/>} />
    </Routes>
  )
}

export default Router;

// function component memo
// import React, { useState } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import Dashboard from '../pages/Dashboard';
// import Login from '../pages/Login';
// import SignUp from '../pages/SignUp';

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Routes>
//       {React.Children.map(children, child =>
//         React.cloneElement(child, { isAuthenticated, setIsAuthenticated })
//       )}
//     </Routes>
//   );
// };

// const Router = () => {
//   return (
//     <AuthProvider>
//       <Route
//         exact
//         path='/'
//         element={<PrivateRoute component={<Dashboard />} />}
//       />
//       <Route exact path='/login' element={<Login />} />
//       <Route exact path='/signup' element={<SignUp />} />
//     </AuthProvider>
//   );
// };

// export default Router;


// class Component
// import React, { Component } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import Dashboard from '../pages/Dashboard';
// import Login from '../pages/Login';
// import SignUp from '../pages/SignUp';

// class Router extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isAuthenticated: false
//     };
//     this.setIsAuthenticated = this.setIsAuthenticated.bind(this);
//   }

//   setIsAuthenticated(value) {
//     this.setState({ isAuthenticated: value });
//   }

//   render() {
//     const { isAuthenticated } = this.state;
//     const Redirect = <Navigate to='/login' />;
//     return (
//       <Routes>
//         <Route exact path='/' element={isAuthenticated ? <Dashboard /> : Redirect} />
//         <Route exact path='/login' element={<Login setIsAuthenticated={this.setIsAuthenticated} />} />
//         <Route exact path='/signup' element={<SignUp setIsAuthenticated={this.setIsAuthenticated} />} />
//       </Routes>
//     );
//   }
// }

// export default Router;
