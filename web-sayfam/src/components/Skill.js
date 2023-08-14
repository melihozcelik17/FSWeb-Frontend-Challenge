import React from 'react'
import "./Skill.css"
import { skillsData } from "../Data/Data.js"



function Skill() {
    return (
        <div div class="skills" >
            <h1>
                Skills
            </h1>

            <div className='skills-container flex  gap-16 w-screen'>
                {
                    skillsData.map((item => {
                        return (<div className='w-full' key={item.index}>
                            <h2 className='' >{item.title} </h2>
                            <p className='' >{item.content}</p>
                        </div>)
                    }))
                }
            </div>
            <meta property="og.site_name" content="portfolio" />
        </div >
    )
}

export default Skill