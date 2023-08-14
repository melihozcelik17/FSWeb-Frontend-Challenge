import React from 'react'
import "./Profile.css"
import { ProfileData } from "../Data/Data.js"




function Profile() {
    return (
        <section >
            <h1>
                Profile
            </h1>
            <div className='profile-container'>
                <div >
                    <div className='profile-info'>
                        <h2>
                            Profile
                        </h2>
                    </div>
                    <div className=''>

                        {
                            ProfileData.map((item => {
                                return (<div className='profile-content' key={item.index}>
                                    <div className='profile-label'>

                                        <h3>{item.title} </h3>
                                    </div>
                                    <div className='profile-value'>

                                        <p>{item.content}</p>
                                    </div>
                                </div>)
                            }))
                        }
                    </div>
                </div>


                <div className='profile-about'>

                    <h2>
                        About Me
                    </h2>
                    <p>

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.

                        Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!

                    </p>
                </div>
            </div>
        </section>

    )
}

export default Profile