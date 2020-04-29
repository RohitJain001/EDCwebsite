import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./SliderAnimations.css";
import "./Slider.css";
import esummit from './Images/esummit.jpg';
import pitchers from './Images/pitchers.jpg';
import startupexpo from './Images/startupexpo.jpg';
import vlweekend from './Images/Venture-Lab.jpg';
import Popup from "reactjs-popup";


const content = [
  {
    title: "E-SUMMIT",
    description:
     "Business-Event",
    button: "Explore",
    image: esummit,
    buttonTitle: "Click to visit Website"
  },
  {
    title: "VL WEEKEND",
    description:
      "Business-Event",
    button: "Know More",
    image: vlweekend,
    contentPopup:"Venture Lab will be a 3 day workshop and will be held from. The aim of this weekend will be to further the goal of instilling and promoting the spirit of entrepreneurship among the participants by empowering today's youth with the tools needed to become the fulcrum of change towards a self sustainable future for themselves and so that they may play a pivotal role in that change. The workshop expects a heavy footfall courtesy of students of Thapar Institute and other well known colleges of North India. The 3 day workshop will help the students understand how to execute an idea about something and make a profitable, marketable, feasible business out of it in the competitive environment of today. Participants will be taught things like how to pitch their ideas, value proposition, the benefits of collaboration and the art of sustaining it in high-pressure situations and many more things which are essential for a startup. Various established individuals who have already made an impact in their chosen field have been invited to facilitate and mentor the participants over the weekend.",
    buttonTitle: "Close"
  },
  {
    title: "PITCHERS",
    description:
        "Business-Event",
    button: "Know More",
    image: pitchers,
    contentPopup:"Pitcher's is a one day simulation event in which students of the college will take part where they get to experience the inner workings of a company, how they conduct their day to day and deal with issues that may affect future of the company. The participants will be divided into teams where the members will assume the role of company executives such as CEO, COO, CFO, CAO, CIO, CTO, CMO. The teams then will go through two rounds featured in the event and when all is said and done the judges will declare the winners",
    buttonTitle: "Close"
  },
  {
    title: "STARTUP-EXPO",
    description: 
        "Business-Event",
    button: "Explore",
    image: startupexpo,
    buttonTitle: "Click to visit Website"
    }
];

class SlideEvents extends React.Component {

  exploreButtonClick=(title)=>{
    if(title==="STARTUP-EXPO"){
      window.location.href = "http://www.edctiet.co.in/The-Startup-Expo/";
      return false;
    } else{
      window.location.href = "http://www.edctiet.co.in/ESummit2020/";
      return false;
    }
  }
  

      render(){
        return(
          <div>
            <Slider  autoplay={1500}className="slider-wrapper">
              {content.map((item, index) => (
                <div
                  key={index}
                  className="slider-content"
                  style={{ background: `url('${item.image}') no-repeat center center` }}
                >    
                  <div className="inner">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <Popup options={{left: '100px', top: '100px'}} trigger={<button>{item.button}</button>} modal>
                        {close => (
                            <div className="modal">
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                            <div className="header"> Description </div>
                            <div className="content">
                                {item.contentPopup}
                            </div>
                            <div className="actions">
                                <button
                                className="button"
                                onClick={() => {
                                    if (item.title==="VL WEEKEND" || item.title==="PITCHERS")
                                    {close();} else{
                                       this.exploreButtonClick(item.title)
                                    }
                                }}
                                >
                                {item.buttonTitle}
                                </button>
                            </div>
                            </div>
                        )}
                    </Popup>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        );}}

export default SlideEvents;