import './Card.scss';

function Card(props) {
    return (
        <div className="card">
            <img className={`card__image card__image_${props.name}`} src={props.image} alt="logo"/>
            <div className='card__text'>
                <h3 className='card__title'>{props.title}</h3>
                <p className='card__subtitle'>{props.subtitle}</p>
                <div className='card__link' >Learn more   &rarr;</div>
            </div>
        </div>
    );
}

export default Card;
