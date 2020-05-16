import React from 'react'

import './BgVideo.scss'

export default function BgVideo(props){
    const {name} = props;
    return(
        <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>
                <source src={`image/${name}.mp4`} type='video/mp4'></source>
                <source src={`image/${name}.webm`} type='video/webm'></source>
                Your browser is not supported!
            </video>
        </div>
    )
}