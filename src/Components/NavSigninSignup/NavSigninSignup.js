import React from 'react';
import './NavSigninSignup.css';
import Logo from '../HomePage/Images/edclogo.png'

class NavSigninSignup extends React.Component{
    constructor(props){
      super(props);
    }


    render(){
        return(
          //Navigation starts
        <nav id="navSigninSignup" class="flex justify-between bb b--white-10">
          <img className='logoNav' alt='Logo' src={Logo} onClick={this.props.onRouteChange("home")}/>
        <div class="flex-grow pa3 flex items-center">
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Home</a>
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Sign In</a>
            <a class="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Up</a>
        </div>
     </nav>
      
      //navigation Ends
    )}
}

export default NavSigninSignup;