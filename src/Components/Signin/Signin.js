import React from 'react';
import './Signin.css';

class Signin extends React.Component{
      constructor(props){
        super(props);
        this.state={
          signinEmail:"",
          signinPassword:""
        }
      }

      onSigninEmailChange=(event)=>{
        this.setState({signinEmail :event.target.value})
      }

      onSigninPasswordChange=(event)=>{
        this.setState({signinPassword : event.target.value})
      }

      onSigninButtonClick=()=>{
        this.props.onRouteChange('home');
      }

    render(){
      return(  
        <main id="signinForm" class="loginForm pa4 black-80">
        <form class="signinForm measure center br4 pa5">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Sign In</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" for="email-address">Email</label>
              <input 
              class="signinEmail pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="email-address"  
              id="email-address"
              onChange={this.onSigninEmailChange} />
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" for="password">Password</label>
              <input 
              class="signinPassword b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password"
              onChange={this.onSigninPasswordChange} />
            </div>
            <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" />Remember me</label>
          </fieldset>
          <div class="">
            <input class="checkLogin b ph3 pv2 input-reset ba b--black bg-light-gray grow pointer f6 dib" 
            type="" 
            value="Sign in"
            onClick={this.onSigninButtonClick} />
          </div>
          <div class="lh-copy mt3">
            <a href="" class="f6 link dim black db">Sign up</a>
            <a href="" class="f6 link dim black db">Forgot your password?</a>
          </div>
        </form>
    </main>
      )}
}

export default Signin;
