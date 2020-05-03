import React from 'react';
import BgVideo from '../Bg-video';

import './Stories.scss';

export default function Stories(){

    return(
        <section className='section-stories'>
            <BgVideo name='video' />
            <div className='u-center-text u-margin-bottom-big'>
                    <h2 className='heading-secondary'>
                        We make people genuinely happy
                    </h2>
            </div>
                <Story titulo="I had the best week ever with my family" nombre="Marry Smith" imagen="nat-8.jpg" />
                <Story titulo="WOW! My life is completely different now" nombre="Jack Wilson" imagen="nat-9.jpg" />
                <div className='u-center-text u-margin-top-huge'>
                    <a href="#" className='btn-text'>Read all stories &rarr;</a>
                </div>
        </section>
    )
}

function Story(props){
    const {titulo,nombre,imagen} = props;

    return(
        <div className='row'>
            <div className='story'>
                <figure className='story__shape'>
                    <img src={`/image/${imagen}`} alt="person on a tour" className='story__img'></img>
                    <figcaption className='story__caption'>
                        {nombre}
                    </figcaption>
                </figure>
                <div className='story__text'>
                    <h3 className='heading-tertiary u-margin-bottom-small'>{titulo}</h3>
                    <p>Cupidatat incididunt ad sit culpa proident Lorem anim Lorem aliquip velit adipisicing qui dolore ea. Mollit deserunt laborum sunt qui voluptate anim reprehenderit ipsum.Cupidatat incididunt ad sit culpa proident Lorem anim Lorem aliquip velit adipisicing qui dolore</p>
                </div>
            </div>
        </div>
    )
}