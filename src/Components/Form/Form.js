import "./Form.scss";
import form from "../../images/form-image.png"

function Form() {
    return (
        <section className="form">
            <div className="form__contact">
                <img className="form__form-image" src={form} alt="logo"/>
                <ul className="form__table">
                    <li className="form__title">ADDRESS</li>
                    <li className="form__cell form__cell_margin">Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.</li>
                </ul>
                <ul className="form__table">
                    <li className="form__title">PHONE</li>
                    <li className="form__cell form__cell_phone">+62-812-7313-4321</li>
                    <li className="form__cell form__cell_phone">+62-817-000-1234</li>
                </ul>
                <ul className="form__table">
                    <li className="form__title">ONLINE SERVICE</li>
                    <li className="form__cell form__cell_web">www.afrianska.com</li>
                    <li className="form__cell form__cell_email">hello.afrian@gmail.com</li>
                </ul>
            </div>
            <div className="form__fields">
                <h3 className="form__field-title">SEND US MESSAGE</h3>
                <p className="form__field-subtitle">Full Name</p>
                <input className="form__field" type="text" name="name" placeholder="Your Name" required/>
                <p className="form__field-subtitle">Email</p>
                <input className="form__field" type="text" name="email" placeholder="Your Email" required/>
                <p className="form__field-subtitle">Message</p>
                <textarea className="form__field form__field-message" name="message"
    placeholder="Your Message"  required/>
                <button className="form__button">SUBMIT</button>
            </div>
        </section>

    );
}

export default Form;
