import React, { useState } from 'react'
import "./Header.css"
import github from "../logo/github.png"

function Header({ changeTheme }) {
    const [language, setLanguage] = useState();

    return (
        <header className=''>
            <div className='header-button  '>
                <div class="toggle-switch" >
                    <label class="switch-label" >
                        <input type="checkbox" class="checkbox" onClick={changeTheme} />
                        <span class="slider"></span>
                    </label>
                </div>

                <button className='font-inter uppercase dark:bg-white dark:text-black' onClick={() => setLanguage((prevState) => !prevState)}>
                    {language ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH ' "}
                </button>
            </div>

            <div className='navbar'>
                <div className=''>
                    <img alt='github' className='navbar-logo' src={github} />

                </div>
                <div className="header-sidebar font-inter ">

                    <button>
                        Skills
                    </button>
                    <button>
                        Projects
                    </button>
                    <button>
                        Hire me
                    </button>
                </div>
            </div>




        </header>

    )
}

export default Header