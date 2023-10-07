import React from 'react'

export default function Content(props){
    return (
        <section>
            <div className='section-one'>
                <img className='main-img' src={props.imageUrl} />
                <div className='section-two'>
                    <div className='sub-section'>
                        <img className='location' src='./images/location.icon.svg' />
                        <p className='location-text'>{props.location.toUpperCase()}</p>
                        <a className='location-link' href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <p className='date'>{props.startDate} - {props.endDate}</p>
                    <p className='description'>{props.description}</p>
                </div>
            </div>
            <div className='line'></div>
        </section>
    )
}