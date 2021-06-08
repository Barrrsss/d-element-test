import "./Fields.scss";
import {Validate} from '../../const/utils';

function Fields({handleSubmit}) {
    const {values, handleChange, errors, isValid} = Validate({});

    const onSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            handleSubmit(values);
        }
    }
    return (
            <form className="form__fields" method="POST" onSubmit={onSubmit} noValidate>
                <h3 className="form__field-title">SEND US MESSAGE</h3>
                <p className="form__field-subtitle">Full Name</p>
                <input className={`form__field ${errors && errors["name"] && 'form__field_type_error'}`}
                       placeholder="Your Name" name="name" required id="name-input" minLength="2" maxLength="30"
                       onChange={handleChange} />
                <div className="form__field-error" id="name-input-error">
            {errors && errors["name"] && errors["name"]}
            </div>
                <p className="form__field-subtitle">Email</p>
                <input className={`form__field ${errors && errors["email"] && 'form__field_type_error'}`}
                       placeholder="Your Email" type="email" name="email" required id="email-input" onChange={handleChange}
                       pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"/>
                <div className="form__field-error" id="email-input-error">
          {errors && errors["email"] && errors["email"]}
        </div>

                <p className="form__field-subtitle">Message</p>
                <textarea className="form__field form__field-message" name="message"
                          placeholder="Your Message" />
                <button className="form__button" disabled={!isValid}>SUBMIT</button>
            </form>
    );
}

export default Fields;
