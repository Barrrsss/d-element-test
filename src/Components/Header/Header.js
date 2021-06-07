import './Header.scss';
import logo from '../../images/header-logo.svg'
function Header(props) {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="логотип" />
            <button className="header__menu" type="button" onClick={props.handleMenuOpen} />
        </header>
    );
}

export default Header;
