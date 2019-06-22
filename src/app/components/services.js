import React from 'react'
import './services.css'

class Services extends React.Component{
  render(){
    return(
      <div id='services'>
        <div className='title'>
            <p className='pre-title-text'>Services</p>
            <p className='title-text'>What Amber does</p>
            <p className='title-sub-title'>
              Primary and most recent experience is with children 3 months to 3 years
            </p>
        </div>
        <div className='services-item'>
            <div className='services-image left' id='image-1'></div>
            <div className='services-image right' id='image-2-pseudo'></div>
            <div className='services-text bump-right'>
              <p className='services-text-title'>
                Methodolgy
              </p>
              <p className='services-text-description'>
                I am comfortable with all ages and multiple children at once. I am CPR certified, 
                always punctual, kind, and patient. I believe that safety and communication are 
                of the highest importance. I always make sure that I am on the same page as the
                parents when it comes to care. I believe in gentle redirection, and letting the 
                children express and understand their emotions.
              </p>
            </div>
        </div>
        <div className='services-item'>
            <div className='services-text' lef>
              <p className='services-text-title'>
                Support
              </p>
              <p className='services-text-description'>
              I like to stay busy during nap times by helping with light housework. I always clean 
              up after the day and leave your house looking better than when I arrived. I love 
              preparing healthy snacks and lunches for the kids in my care. I like to keep a daily 
              detailed log book for you of how each day went with your little one (bottle feeding 
              times/ounces, nap durations, food offered vs. ate, etc) My driving record is 100% clean. 
              I am comfortable driving my car or a car provided to me for outings with the little ones. 
              </p>
            </div>
            <div className='services-image right' id='image-2'></div>
        </div>
        <div className='hero-image'></div>
      </div> 
    )
  }
}
export default Services
