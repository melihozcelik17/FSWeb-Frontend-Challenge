import React from 'react'
import { projectData } from "../Data/Data.js"
import "./Project.css"


function Project() {
    return (
        <div
            className='grid grid-cols-1    gap-6 '>
            <h1>

                Project
            </h1>
            <link>

            </link>
            <div className='project-container'>

                {
                    projectData.map((item => {
                        return (<div className='' key={item.index}>
                            <img src={item.url} alt='logo' />
                            <h2>{item.title} </h2>
                            <p>{item.description}</p>
                            <div className='tags'>
                                {item.tags.map((tag, index) => (
                                    <p className="project-tags" key={index}>{tag}</p>
                                ))}
                            </div>
                        </div>)
                    }))
                }
            </div>

        </div>
    )
}

export default Project