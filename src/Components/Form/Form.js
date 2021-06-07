import './Form.scss';
import form from '../../images/form-image.png'

function Form() {
    return (
        <section className="form">
            <div>
                <img src={form} alt="logo"/>
                <h3>ADDRESS</h3>
                <p>Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.</p>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <h3></h3>
                <input type="text" name="name" placeholder="Your Name" required/>
                <input type="text" name="email" placeholder="Your Email" required/>
                <textarea className="contact__field contact__field_message" type="textarea" name="message"
                          placeholder="Your Message"  required></textarea>
                <button>Submit</button>
            </div>
        </section>

    );
}

export default Form;
