import React from 'react';

import './Tours.scss';

export default function Tours(){
    return(
        <section className='section-tours'>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Most popular tours
                </h2>
            </div>
            <div className='row'>
                <Tour num='1' head='The sea explorer' 
                detalles={[
                    '3 days tours',
                    'Up to 30 people',
                    '2 tour guides',
                    'Sleep in cozy hotels',
                    'Difficulty: easy'
                ]} 
                value='297'/>
                 <Tour num='2' head='The forest hicker' 
                detalles={[
                    '7 days tours',
                    'Up to 40 people',
                    '6 tour guides',
                    'Sleep in provided tents',
                    'Difficulty: medium'
                ]} 
                value='497'/>
                <Tour num='3' head='The snow adventure' 
                detalles={[
                    '5 days tours',
                    'Up to 15 people',
                    '3 tour guides',
                    'Sleep in provided tents',
                    'Difficulty: hard'
                ]} 
                value='897'/>
            </div>

            <div className="u-center-text u-margin-top-huge">
                <a href='#' className='btn btn--green'>Discover all tours</a>
            </div>
        </section>
    )
}

function Tour(props){
    const {num,head,detalles,value} = props;

    return(
        <div className='col-1-of-3'>
            <div className='card'>
                <div className='card__side card__side--front'>
                    <div className={'card__picture card__picture-'+num}>
                        &nbsp;
                    </div>
                    <h4 className='card__heading'>
                        <span className={"card__heading--span card__heading--span-"+num}>{head}</span>  
                    </h4>
                    <div className='card__details'>
                        <ul>
                            {detalles.map((detalle,index) => (
                                <li key={index}>{detalle}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={'card__side card__side--back card__side--back-'+num}>
                    <div className='card__cta'>
                        <div className='card__price-box'>
                            <p className='card__price-only'>Only</p>
                            <p className='card__price-value'>${value}</p>
                        </div>
                        <a href='#popup' className='btn btn--white'>Book now!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}