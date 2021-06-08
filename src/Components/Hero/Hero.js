import './Hero.scss';
import hero from '../../images/hero.png'
import {NavLink} from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">New Automation Tool for Your Home</h1>
                <p className="hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut
                    mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
                <NavLink to="/contact">
                    <button className="hero__button">See Our Project</button>
                </NavLink>

            </div>
            <img className='hero__image' src={hero} alt="hero"/>
            <div className="hero__background"/>
        </section>
    );
}

export default Hero;
