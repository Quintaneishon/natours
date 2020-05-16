import React from "react";
import { BASE_PATH } from "../../utils/constants";

import './About.scss'

export default function About() {
    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Exciting tours for adventurous people
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                    <p className="paragraph">
                        Qui enim nulla culpa elit minim eiusmod aliqua est nostrud dolore. Mollit exercitation incididunt nisi officia officia ad. Deserunt dolor id dolor exercitation Lorem. Sunt do et ea aliquip et non adipisicing dolore pariatur.
                    </p>
                    <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                    <p className="paragraph">
                        Qui enim nulla culpa elit minim eiusmod aliqua est nostrud dolore. Mollit exercitation incididunt nisi officia 
                    </p>
                    <a href="#" className="btn-text">
                        Learn more &rarr;
                    </a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img srcSet='image/nat-1.jpg 300w, image/nat-1-large.jpg 1000w' 
                                sizes='(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 300px' 
                                alt='photo 1'
                                className='composition__photo composition__photo--p1'
                                src='image/nat-1-large.jpg' />
                        <img srcSet='image/nat-2.jpg 300w, image/nat-2-large.jpg 1000w' 
                                sizes='(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 300px' 
                                alt='photo 2'
                                className='composition__photo composition__photo--p2'
                                src='image/nat-2-large.jpg' />
                        <img srcSet='image/nat-3.jpg 300w, image/nat-3-large.jpg 1000w' 
                                sizes='(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 300px' 
                                alt='photo 3'
                                className='composition__photo composition__photo--p3'
                                src='image/nat-3-large.jpg' />
                        {/* <img src={`/image/nat-1-large.jpg`} alt="photo 1" className="composition__photo composition__photo--p1"></img>
                        <img src={`/image/nat-2-large.jpg`} alt="photo 2" className="composition__photo composition__photo--p2"></img>
                        <img src={`/image/nat-3-large.jpg`} alt="photo 3" className="composition__photo composition__photo--p3"></img> */}
                    </div>
                </div>
            </div>
        </section>
    );
}