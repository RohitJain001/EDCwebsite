import React from 'react';
import './Register.css';

class Register extends React.Component{
      constructor(props){
        super(props);
        this.state={
          RegisterName:"", 
          RegisterEmail:"",
          RegisterPassword:""
        }
      }

      onRegisterEmailChange=(event)=>{
        this.setState({RegisterEmail :event.target.value})
      }

      onRegisterPasswordChange=(event)=>{
        this.setState({RegisterPassword : event.target.value})
      }

      onRegisterNameChange=(event)=>{
        this.setState({RegisterName : event.target.value})
      }

      onRegisterButtonClick=()=>{
        
        this.props.onRouteChange('home');
      }

    render(){
      return(  
        <main class="loginForm pa4 black-80" id="registerForm">
        <form class="registerForm measure center br4 pa5">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Sign Up</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" for="email-address">Name</label>
              <input 
              class="signinEmail pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="text" 
              name="name "  
              id="name"
              onChange={this.onRegisterNameChange} />
            </div>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" for="email-address">Email</label>
              <input 
              class="signinEmail pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="email-address"  
              id="email-address"
              onChange={this.onRegisterEmailChange} />
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" for="password">Password</label>
              <input 
              class="signinPassword b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password"
              onChange={this.onRegisterPasswordChange} />
            </div>
          </fieldset>
          <div class="">
            <input class="checkLogin b ph3 pv2 input-reset ba b--black bg-light-gray grow pointer f6 dib" 
            type="" 
            value="Sign up"
            onClick={this.onRegisterButtonClick} />
          </div>
        </form>
    </main>
      )}
}

export default Register;
