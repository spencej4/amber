import React from 'react'
import './about.css';

class About extends React.Component {
    render(){
        return(
            <div id='about'>
                <div className='title'>
                    <p className='pre-title-text'>About</p>
                    <p className='title-text'>About Amber</p>
                    <p className='title-sub-title'>
                        Amber is a creative and playful nanny who just recently moved to 
                        Seattle from the east coast. In her free-time, Amber enjoys hiking, 
                        exploring her new surroundings, and reading. Growing up in a large 
                        family encouraged Amber to become the outgoing and dedicated nanny 
                        that she is today. Amber’s top priority is helping children learn and 
                        grow in a safe and nurturing environment. 
                    </p>
                </div>
                <div className='hero-image'></div>
            </div>
        )
    }
}

export default About