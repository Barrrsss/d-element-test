import './Popup.css';
import Fields from '../Fields/Fields';

const Popup = ({closePopup, isOpen, onClick, isTooltipStatus, handleSubmit}) => {

    return (
        <section className={`popup ${isOpen && 'popup_opened'}`} onClick={onClick}>

            <div className="popup__container">
                {isTooltipStatus ?
                    <div className='popup__message'>Your message successfully sent</div>
                    :
                    <Fields handleSubmit={handleSubmit}/>

                }

                <button className="popup__close" type="button" onClick={closePopup}/>

            </div>
        </section>
    );
}

export default Popup;
