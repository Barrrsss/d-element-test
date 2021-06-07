import './Menu.scss';
import {NavLink} from 'react-router-dom';

function Menu({handleMenuClose, isOpen, onClick, pathname}) {
    return (
        <section className={`menu ${isOpen && 'menu_open'}`} onClick={onClick}>
            <div className="menu__container">
                <button className="menu__close" onClick={handleMenuClose}/>
                <NavLink className={`menu__link ${(pathname === '/') && 'menu__link_active'}`} to="/">Main</NavLink>
                <NavLink className={`menu__link ${(pathname === '/contact') && 'menu__link_active'}`} to="/contact">Contact</NavLink>
            </div>
        </section>
    );
}

export default Menu;
