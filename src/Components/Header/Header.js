import './Header.scss';
import logo from '../../images/header-logo.svg'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className="header">
            <NavLink to="/">
                <img className="header__logo" src={logo} alt="логотип" />
            </NavLink>
            <button className="header__menu" type="button" onClick={props.handleMenuOpen} />
        </header>
    );
}

export default Header;
