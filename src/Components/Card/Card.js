import './Card.scss';
import {NavLink} from 'react-router-dom';

function Card(props) {
    return (
        <div className="card">
            <img className={`card__image card__image_${props.name}`} src={props.image} alt="logo"/>
            <div className='card__text'>
                <h3 className='card__title'>{props.title}</h3>
                <p className='card__subtitle'>{props.subtitle}</p>
                <NavLink className='card__link' to="/contact">Learn more   &rarr;</NavLink>
            </div>
        </div>
    );
}

export default Card;
