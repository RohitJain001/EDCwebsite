import React from 'react';
import './App.css';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import HomePage from './Components/HomePage/HomePage';
import NavSigninSignup from './Components/NavSigninSignup/NavSigninSignup';
import 'tachyons';

const initialState ={
  route:'home',
}

class App extends React.Component{
  constructor(){
    super();
    this.state = initialState
  }

  onRouteChange=(route)=>{
    this.setState({route:route})
  }


render(){
    if(this.state.route==='home')
      return <HomePage onRouteChange={this.onRouteChange}/>
    else if(this.state.route==='signin')  
      return (
        <div>
          <NavSigninSignup onRouteChange={this.onRouteChange}/>
          <Signin onRouteChange={this.onRouteChange}/>
        </div>  
      );
    else if(this.state.route==='signup') 
      return (
        <div>
          <Register onRouteChange={this.onRouteChange}/>   
          <NavSigninSignup onRouteChange={this.onRouteChange}/>
        </div>
      )
  }
}

export default App;
