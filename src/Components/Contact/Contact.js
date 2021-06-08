import './Contact.scss';
import Form from '../Form/Form';
import map from '../../images/contact-map.png';

function Contact() {
    return (
        <section className="contact">
            <div className='contact__header'>
                <h3 className='contact__header_title'>Contact Us</h3>
                <p className='contact__header_subtitle'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <Form/>
            <img className="contact__map" src={map} alt="карта"/>
        </section>
    );
}

export default Contact;
