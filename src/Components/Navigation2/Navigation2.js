import React from 'react';
import './Navigation2.scss';
import scrollToComponent from 'react-scroll-to-component';


class Navigation2 extends React.Component{
  render(){
    return(
        <div className="Navigation2">
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />

          <nav class="menu">
            <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
            <label class="menu-open-button" for="menu-open">
              <span class="hamburger hamburger-1"></span>
              <span class="hamburger hamburger-2"></span>
              <span class="hamburger hamburger-3"></span>
            </label>
            
            <a onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})} class="menu-item"> <i class="fa fa-bar-chart"></i> </a>
            <a onClick={() => scrollToComponent(this.Events, { offset: 0, align: 'top', duration: 1500})} class="menu-item"> <i class="fa fa-plus"></i> </a>
            <a onClick={() => scrollToComponent(this.Mentor, { offset: 0, align: 'top', duration: 1500})} class="menu-item"> <i class="fa fa-heart"></i> </a>
            {/*<a onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 1500})} class="menu-item"> <i class="fa fa-envelope"></i> </a> */}         
          </nav>


          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="shadowed-goo">
                    
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                    <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                    <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                    <feComposite in2="shadow" in="goo" result="goo" />
                    <feComposite in2="goo" in="SourceGraphic" result="mix" />
                </filter>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feComposite in2="goo" in="SourceGraphic" result="mix" />
                </filter>
              </defs>
          </svg>
        </div>
  );}
}

export default Navigation2;