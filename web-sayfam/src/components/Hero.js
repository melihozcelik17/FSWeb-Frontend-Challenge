import React from 'react'
import "./Hero.css"
import github from "../logo/github.png"
import LinkedIn from "../logo/LinkedIn.png"
import profile from "../logo/profile2.jpg"


function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-text'>
                <div>
                    <h2 className='name'>
                        Melih ÖZÇELİK
                    </h2>
                    <h1 className=''>
                        Full-Stack Developer jr.

                    </h1>
                    <p className='paragraf'>
                        Hi, I’m Melih. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.
                    </p>
                </div>


                <div className='hero-buttons'>
                    <button className='hire-button button'>
                        Hire me
                    </button>
                    <a className='button logo-button' href='https://github.com/melihozcelik17' target="_blank"
                        rel="noreferrer">
                        <img alt='github' className='logo' src={github} />

                        GitHub

                    </a>
                    <a className='button logo-button' href='https://www.linkedin.com/in/melih-%C3%B6z%C3%A7elik-85b80389/' target="_blank"
                        rel="noreferrer">
                        <img alt='linkedin' className='logo' src={LinkedIn} />
                        Linkedin
                    </a>
                </div>



            </div>
            <div>
                <img className='avatar' alt='profile' src={profile} />

            </div>
        </div>
    )
}

export default Hero