import './Footer.scss';

function Footer({pathname}) {
    return (
        <footer className={`footer
    ${(pathname === '/contact') && 'footer_white'}`}>
            <div className={`footer__container`}>
                <div className='footer__header'>
                    <div className='footer__text'>
                        <h3 className='footer__title'>Interested to work
                            with our team?</h3>
                        <p className='footer__subtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                        <button className='footer__button'> Let’s Talk</button>

                </div>

            <div className='footer__contact'>
                <ul className='footer__table-one'>
                   <li className='footer__cell footer__cell_title-one'> Afrianska</li>
                        <li className='footer__cell'><span className='footer__cell_point'>A.</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                        <li className='footer__cell'><span className='footer__cell_point'>T.</span>  +62-812-7313-4321</li>
                        <li className='footer__cell'><span className='footer__cell_point'>E.</span>  hello.afrian@gmail.com</li>
                </ul>
                <ul className='footer__table'>
                    <li className='footer__cell footer__cell_title'>About US</li>
                    <li className='footer__cell'>About</li>
                    <li className='footer__cell'>What We Do</li>
                    <li className='footer__cell'>Project</li>
                    <li className='footer__cell'>How It Work With Us</li>
                </ul>
                <ul className='footer__table'>
                    <li className='footer__cell footer__cell_title'>Follow US</li>
                    <li className='footer__cell'>Instagram</li>
                    <li className='footer__cell'>Facebook</li>
                    <li className='footer__cell'>LinkedIn</li>
                    <li className='footer__cell'>Youtube</li>
                </ul>
            </div>
                <div className='footer__copyright'>2019 &#169; Afrianska. All rights reserved.</div>
            </div>

        </footer>
    );
}

export default Footer;
