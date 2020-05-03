import React from 'react'

import './Footer.scss'

export default function Footer(){

    return(
        <footer className='footer'>
            <div className='footer__logo-box'>
                <img src='/image/logo-green-2x.png' alt='Full logo' className='footer__logo' />
            </div>
            <div className='row'>
                <div className='col-1-of-2'>
                    <div className='footer__navigation'>
                        <ul className='footer__list'>
                            <li className='footer__item'><a href='#' className='footer__link'>Company</a></li>
                            <li className='footer__item'><a href='#' className='footer__link'>Contact us</a></li>
                            <li className='footer__item'><a href='#' className='footer__link'>Carrers</a></li>
                            <li className='footer__item'><a href='#' className='footer__link'>Privacy policy</a></li>
                            <li className='footer__item'><a href='#' className='footer__link'>Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-1-of-2'>
                    <p className='footer__copyright'>
                        In amet enim fugiat ut <a href='#' className='footer__link'>link</a> in velit magna do. Anim laborum et ea et proident occaecat id magna. Eiusmod pariatur nostrud excepteur aliquip amet consectetur nisi consectetur occaecat aute sunt. Laborum aliqua quis minim esse ullamco laborum tempor dolore reprehenderit veniam aliquip. Anim est est quis dolor in eiusmod quis sint do. Adipisicing velit dolor eiusmod consectetur laborum ex eiusmod nostrud exercitation laboris fugiat.
                    </p>
                </div>
            </div>
        </footer>
    )
}