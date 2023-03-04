import React from 'react'
import Header from './Header'
import "./Hero.css"
import hero_image from "../assets/hero_image.png"
import hero_back from "../assets/hero_image_back.png"
import heart from "../assets/heart.png"
import calories from "../assets/calories.png"

const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className="left-h">
        <Header/>
        { /* The best ad */}
        <div className="the-best">
          <div></div>
          <span>The best Fitness Club in the town</span>
        </div>
      {/*Hero Heading */}
      <div className="hero-text">
        <div>
          <span className='stroke-text'>Shape</span>
          <span>Your</span>
        </div>
        <div>
          <span>Ideal Body</span>
        </div>
        <div>
        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
        </div>
      </div>
        {/*Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/*Hero Buttons */}
        <div className="hero-btns">
          <buttons className="btn">Get Startred</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
    </div>
        <div className="right-h">
          <button className="btn">Join Now</button>
          
          <div className="heart-rate">
            <img src={heart} alt="Heart"/>
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>

          <img src={hero_image} alt="" className="hero-img" />
          <img src={hero_back} alt="" className="hero-back" />

          <div className="calories">
            <img src={calories} alt="Calories"/>
            <div>
            <span>Calories Burned</span>
            <span>250 kcal</span>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Hero