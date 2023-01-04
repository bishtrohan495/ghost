import React, { useState } from 'react'
import TeamApi from '../Api/TeamApi';

const Team = () => {
    const [teamdata, setteamdata] = useState(TeamApi);
  return (
    <>
        <section className='team'>
            <div><p className='team-para'>Find out more</p></div>
            <div><h1 className='team-heading'>We grown the division into a team that covers everything</h1></div>
            
            <div className='row'>
                    {teamdata.map((cur) => {
                        const {id, img, title , info} = cur;
                        return (
                            <>
                                <div className='col-12 col-lg-3 team-container mt-5' key={id}>
                                    <img src={img} alt="img" className='img-fluid service-img'/>
                                    <h2 className='service-title mt-3'>{title}</h2>
                                    <p className='service-parag mt-2'>{info}</p>
                                </div>
                            </>);
                    })}
                </div>

        </section>
    </>
  )
}

export default Team
