import React from 'react'
import Button from './Button.js'

function Banner(props) {
  let uppercaseText = {
    title : props.title.toUpperCase(),
    subtitle : props.subtitle.toUpperCase(),
    largetext: props.largetext.toUpperCase()
  }
  console.log(uppercaseText);
  return (
    <div className="banner"> 
        <div className="banner-wrapper">
          <div className="bannertext-limiter">
          <h3 className="banner-title">{uppercaseText.title}</h3>
            <h3 className="helping-workers">{uppercaseText.subtitle}</h3>
            <h1 className="fifty-years-text">{uppercaseText.largetext}</h1>
          </div>
          <div className="buttons">
            <Button text="Learn More" style="primary"/>
            <Button text="See Job Offers" style="secondary"/>
          </div>
        </div>
      </div>
  )
}

export default Banner