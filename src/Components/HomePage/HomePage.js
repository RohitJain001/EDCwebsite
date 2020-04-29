import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './HomePage.css';
import Logo from './Images/edclogo.png';
import scrollToComponent from 'react-scroll-to-component';
import './HomePage.scss';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import './Navigation.css';
import './Navigation2.scss';
//import React3dRouter from 'react-3d-router';
import SlideEvents from './Slider/Slider';
//import CountTo from 'react-count-to';
import CountUp from 'react-countup';
import locationIcon from './Images/locationIcon.png';
import callIcon from './Images/callIcon.png';
import messageIcon from './Images/MessageIcon3.jpg';



const fn = value => <span>{value}</span>;

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
   
    render(){
    return(
        
     <div class="body">   
         {/*Background Image */}
          <div className="BackgroundImage">
              

          {/*/Navigation starts*/}
        <nav class="navbar flex justify-between bb b--white-10">
          <a class="navbaranchor link white-70 hover-white no-underline flex items-center pa3" href="">              
          {/* inner navigation starts*/}
          <div className="Navigation2">
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />

          <nav class="menu">
            <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
            <label class="menu-open-button" for="menu-open">
              <span class="hamburger hamburger-1"></span>
              <span class="hamburger hamburger-2"></span>
              <span class="hamburger hamburger-3"></span>
            </label>
            
            <a href = "javascript:void(0)" onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})} class="menu-item"> <i class="fa fa-bar-chart"></i> </a>
            <a href = "javascript:void(0)" onClick={() => scrollToComponent(this.Events, { offset: 0, align: 'top', duration: 1500})} class="menu-item" > <i class="fa fa-plus"></i> </a>
            <a href = "javascript:void(0)" onClick={() => scrollToComponent(this.Mentors, { offset: 0, align: 'top', duration: 1500})} class="menu-item"> <i class="fa fa-heart"></i> </a>
            <a href = "javascript:void(0)" onClick={() => scrollToComponent(this.ContactUs, { offset: 0, duration: 2600})}   class="menu-item"> <i class="fa fa-envelope"></i> </a>        
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
          {/* inner navigation ends*/}
          <img className='logoNav' alt='Logo' src={Logo} />
        </a>
        <div class="flex-grow pa3 flex items-center">
            <a class="f6 link dib white dim mr3 mr4-ns" onClick={this.props.onRouteChange("home")}></a>
            <a class="f6 link dib white dim mr3 mr4-ns" onClick={this.props.onRouteChange("startup")}>Star-Up</a>
            <a class="f6 link dib white dim mr3 mr4-ns" onClick={this.props.onRouteChange("bozfinatics")}>Bozfinatics</a>
            <a class="f6 link dib white dim mr3 mr4-ns" onClick={this.props.onRouteChange("ambassador")}>Campus Ambassador</a>
            <a class="f6 link dib white dim mr3 mr4-ns" onClick={this.props.onRouteChange("team")}>Team</a>
            <a class="f6 link dib white dim mr3 mr4-ns" onClick={this.props.onRouteChange("startups")}>StartUps</a>
            <a class="f6 link dib white dim mr3 mr4-ns" onClick={this.props.onRouteChange("internships")}>Internships</a>
            <a class="f6 link dib white dim mr3 mr4-ns" onClick={this.props.onRouteChange("signin")}>Sign In</a>
            <a class="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" onClick={this.props.onRouteChange("signup")}>Sign Up</a>
        </div>
      </nav>

      {/*/navigation Ends*/}
        {/*Edc Logo And headings start */}
        <div class="pa4 tc">
            <img className='logo dib' alt='Logo' src={Logo}></img>
        </div>

            <header>
                <p className="line1">ED-CELL</p>
                <p className="line2">THAPAR INSTITUTE OF ENGINERING AND TECHNOLOGY</p>
                <Flip><p className="line3">You Ideate, We Foster</p> </Flip> 
            </header>       
        </div>
             {/*Edc Logo And headings start */}

             {/*About us start */}
        <section ref={(section) => { this.About = section; }} className="homepage2">  
            <article className="articleAboutUs grow">
                <Fade left><div className="headingaboutus dim" ><p>ABOUT US</p></div></Fade>
                <Zoom><div><p className="aboutus">The Entrepreneurship Development cell,Tiet has been established with an aim to foster and nurture talented young minds with a vision. With India witnessingg the rise of start up culture, we encourage and guide everyone who is bitten by the entrepreneurs. Imagination dies a dreadful death as we grow but here, we nurture the imagination of young entrepreneurs by providing a platform to present their seminal ideas. We envision a team of spirited individuals who strive to make students accessible with resources and provide them an wasy link to venture capital firms, successful entrepreneurs, executive professionals and corporate so that they can watch their dream become reality. We believe that entrepreneurship is the key to unlock India's talent and untapped potential and thus we are striving to create, foster and promote entrepreneurship.</p></div></Zoom>
            </article>
        </section> 
            {/*About us ends */}

            {/*Events start */}
         <div ref={(section) => { this.Events = section; }} class="allEvents">
            <Fade left> <div className="ourEventsHeading"><p> OUR EVENTS </p></div></Fade>
             <SlideEvents />
             <div className="countNumberBlock" ><p className="countNumberHeading">E-Cells Connected</p><Zoom bottom></Zoom><CountUp redraw={true} start={0} end={50} duration={5} suffix={"+"}/></div>
             <div className="countNumberBlock" ><p className="countNumberHeading">StartUps</p><CountUp start={0} redraw={true} end={55} duration={5} suffix={"+"}/></div>
             <div className="countNumberBlock" ><p className="countNumberHeading">Facebook Followers</p><CountUp redraw={true} start={0} end={5} duration={5} suffix={"K+"}/></div>
             <div className="countNumberBlock" ><p className="countNumberHeading">Sponsors</p><CountUp redraw={true} start={0} end={70} duration={5} suffix={"+"}/></div>
        </div>    
            {/*Events end */}

            {/*Mentors section start */}
        <div ref={(section) => { this.Mentors = section; }} className="ourMentors">
            <Fade left><div className="ourMentorsHeading"><p >MEET OUR MENTORS</p></div></Fade>
            <Jump>            
            <div class="box">
                <div class="box__right">Dr. Mandeep Singh<br />President, EDC TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Dr.-M.D.-Singh/MTA0/Nw==" /><SocialIcon url="https://www.linkedin.com/in/mandeep-singh-8aa7a411/" /></div>
                <div class="box__left">Dr. Mandeep Singh<br />President, EDC TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Dr.-M.D.-Singh/MTA0/Nw==" /><SocialIcon url="https://www.linkedin.com/in/mandeep-singh-8aa7a411/" /></div>
                <div class="box__top">Dr. Mandeep Singh<br />President, EDC TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Dr.-M.D.-Singh/MTA0/Nw==" /><SocialIcon url="https://www.linkedin.com/in/mandeep-singh-8aa7a411/" /></div>
                <div class="box__bottom">Dr. Mandeep Singh<br />President, EDC TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Dr.-M.D.-Singh/MTA0/Nw==" /><SocialIcon url="https://www.linkedin.com/in/mandeep-singh-8aa7a411/" /></div>
                <div class="box__center1"></div>
            </div>  
            <div class="box">
                <div class="box__right">Dr. Karun Verma<br />Vice President, EDC TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Karun-Verma/MzI1/NA==" /><SocialIcon url="https://www.linkedin.com/in/karun-verma-a3030b11/" /></div>
                <div class="box__left">Dr. Karun Verma<br />Vice President, EDC TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Karun-Verma/MzI1/NA==" /><SocialIcon url="https://www.linkedin.com/in/karun-verma-a3030b11/" /></div>
                <div class="box__top">Dr. Karun Verma<br />Vice President, EDC TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Karun-Verma/MzI1/NA==" /><SocialIcon url="https://www.linkedin.com/in/karun-verma-a3030b11/" /></div>
                <div class="box__bottom">Dr. Karun Verma<br />Vice President, EDC TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Karun-Verma/MzI1/NA==" /><SocialIcon url="https://www.linkedin.com/in/karun-verma-a3030b11/" /></div>
                <div class="box__center2"></div>
            </div> 
            <div class="box">
                <div class="box__right">Dr. Maneek Kumar<br />Dean Of Student Affairs, TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Maneek-Kumar/MTgx/Mw==" /><SocialIcon url="https://www.linkedin.com/in/maneek-kumar-38476153/" /></div>
                <div class="box__left">Dr. Maneek Kumar<br />Dean Of Student Affairs, TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Maneek-Kumar/MTgx/Mw==" /><SocialIcon url="https://www.linkedin.com/in/maneek-kumar-38476153/" /></div>
                <div class="box__top">Dr. Maneek Kumar<br />Dean Of Student Affairs, TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Maneek-Kumar/MTgx/Mw==" /><SocialIcon url="https://www.linkedin.com/in/maneek-kumar-38476153/" /></div>
                <div class="box__bottom">Dr. Maneek Kumar<br />Dean Of Student Affairs, TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Maneek-Kumar/MTgx/Mw==" /><SocialIcon url="https://www.linkedin.com/in/maneek-kumar-38476153/" /></div>
                <div class="box__center3"></div>
            </div> 
            <div class="box">
                <div class="box__right">Dr. Karminderjit Singh Ghuman<br />VL Head, EDC TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Dr.-Karminder-Ghuman/NDE0/NA==" /><SocialIcon url="https://www.linkedin.com/in/dr-karminderjit-singh-ghuman-8673a615/" /></div>
                <div class="box__left">Dr. Karminderjit Singh Ghuman<br />VL Head, EDC TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Dr.-Karminder-Ghuman/NDE0/NA==" /><SocialIcon url="https://www.linkedin.com/in/dr-karminderjit-singh-ghuman-8673a615/" /></div>
                <div class="box__top">Dr. Karminderjit Singh Ghuman<br />VL Head, EDC TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Dr.-Karminder-Ghuman/NDE0/NA==" /><SocialIcon url="https://www.linkedin.com/in/dr-karminderjit-singh-ghuman-8673a615/" /></div>
                <div class="box__bottom">Dr. Karminderjit Singh Ghuman<br />VL Head, EDC TIET<br /><SocialIcon url="http://www.thapar.edu/faculties/view/Dr.-Karminder-Ghuman/NDE0/NA==" /><SocialIcon url="https://www.linkedin.com/in/dr-karminderjit-singh-ghuman-8673a615/" /></div>
                <div class="box__center4"></div>
            </div> 
            </Jump>                  
        </div>
         {/*Mentors section end */}    

         {/*contact us section start*/}
         <div ref={(section) => { this.ContactUs = section; }} className="contactUs" >
             <Fade left><div className="contactUsHeading"><p>CONTACT US</p></div></Fade>
             <div className="contactUsDiv" id="contactUsDiv1">
                 <img className="edcLogoDown" src={Logo} alt="edcLogo" ></img>
                 <h3 id="h3">ENTERPRENEURSHIP DEVELOPMENT CELL</h3>
                 <SocialIcon url="https://www.instagram.com/edc_tiet/" />
                 <SocialIcon url="https://www.facebook.com/tuedcell/" />
                 <SocialIcon url="https://twitter.com/tuedcell" />
                 <SocialIcon url="https://www.linkedin.com/school/entrepreneurship-development-cell-thapar-university/" />
             </div>
            <div className="contactUsDiv" id="contactUsDiv2">
                <img className="icons " src={locationIcon} alt="location"></img><p className="contactdetails">Thapar Institue Of Engg & Tech, Patiala, Punjab</p>
                <img className="icons " src={callIcon} alt="location"></img><p className="contactdetails">Vidhan: 8556865862 <br />Arshita: 9814244351</p>
                <img className="icons " src={messageIcon} alt="location"></img><p className="contactdetails">tuedcell@gmail.com</p>
            </div>
         </div>
         {/*contact us section end*/}
         

         {/*footer starts */}
         <footer>
             <div>
                <p>Copyright ©2020 Entrepreneurship Development Cell, TIET       Developed By Technical Team, EDC</p>
             </div>
         </footer>
         {/*footer ends */}
    </div>      
    )}
}

export default HomePage; 