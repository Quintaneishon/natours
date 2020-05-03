import React from 'react';

import './Features.scss';


export default function Features(){
    return(
        <div className='section-features'>
            <div className='row'>
                <Feature clase='icon-basic-world' titulo='Explore the world' />
                <Feature clase='icon-basic-compass' titulo='Meet nature' />
                <Feature clase='icon-basic-map' titulo='Find your way' />
                <Feature clase='icon-basic-heart' titulo='Live a healthier life' />
            </div>
        </div>
    )

}

function Feature(props){
    const {clase,titulo} = props;
    
    return(
        <div className='col-1-of-4'>
            <div className='feature-box'>
                <i className={clase+" feature-box__icon"}></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>{titulo}</h3>
                <p className='feature-box__text'>
                    Fugiat ullamco adipisicing nostrud eu aliquip sit ad deserunt velit occaecat sunt.
                </p>
            </div>
        </div>
    )

}