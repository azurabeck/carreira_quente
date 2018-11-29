import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

// COMPONENTS IMPORT
import Dashboard from './component/dashboard/Dashboard'
import Cover from './component/dashboard/Cover'
import About from './component/dashboard/About'

import Navbar from './component/layout/Navbar'
import Footer from './component/layout/Footer'

import PostDetails from './component/posts/PostDetails'
import SignIn from './component/auth/SignIn'
import SignUp from './component/auth/SignUp'
import CreatePost from './component/posts/CreatePost'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navbar />
         
         <Switch>

           <Route exact path='/' component={Cover}></Route>    
           <Route exact path='/blogger' component={Dashboard}></Route>
           <Route exact path='/about' component={About}></Route>

           <Route path='/post/:id' component={PostDetails}></Route>                  
           <Route path='/signin' component={SignIn}></Route> 
           <Route path='/signup' component={SignUp}></Route>     
           <Route path='/create' component={CreatePost}></Route> 
           <Route path='/edit/:id' component={CreatePost}></Route>      

         </Switch>

         <Footer />
      </div>
    );
  }
}

export default App;
