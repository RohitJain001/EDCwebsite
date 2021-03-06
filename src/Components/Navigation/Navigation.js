import React from 'react';
import './Navigation.css';
import Logo from './Images/edclogo.png'

class Navigation extends React.Component{
    constructor(props){
      super(props);
    }


    render(){
        return(
          //Navigation starts
        <nav is="navHome"class="flex justify-between bb b--white-10">
          <a class="link white-70 hover-white no-underline flex items-center pa3" href="">              
          
          <img className='logoNav' alt='Logo' src={Logo} />
        </a>
        <div class="flex-grow pa3 flex items-center">
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Home</a>
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Star-Up</a>
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Bozfinatics</a>
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Campus Ambassador</a>
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Team</a>
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">StartUps</a>
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Internships</a>
            <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Sign In</a>
            <a class="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Up</a>
        </div>
      </nav>

      //navigation Ends
        )}
}

export default Navigation;