import './Client.scss';

function Client() {
    return (
        <section className="client">
            <div className='client__container'>
                <div  className="client__header">
                    <h3 className="client__title">Our Beloved Client</h3>
                    <p className="client__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <ul className="client__table">
                    <li className="client__table-cell">LOGO CLIENT 1</li>
                    <li className="client__table-cell">LOGO CLIENT 2</li>
                    <li className="client__table-cell">LOGO CLIENT 3</li>
                    <li className="client__table-cell">LOGO CLIENT 4</li>
                    <li className="client__table-cell">LOGO CLIENT 5</li>
                    <li className="client__table-cell">LOGO CLIENT 6</li>
                    <li className="client__table-cell">LOGO CLIENT 7</li>
                    <li className="client__table-cell client__table-cell_more">More Client</li>
                </ul>
            </div>
        </section>
    );
}

export default Client;
