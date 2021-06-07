import './Main.scss';
import Hero from '../Hero/Hero';
import What from '../What/What';
import Client from '../Client/Client';

function Main() {
    return (
        <div className="main">
            <Hero/>
            <What />
            <Client />
        </div>
    );
}

export default Main;
