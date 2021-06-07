import './App.css';
import {Route, Switch, useLocation} from 'react-router';
import React, {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';

function App() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
        setEscListener();
    }
    const closeMenu = () => {
        setIsMenuOpen(false);
        removeEscListener();
    }
    const handleEscClose = (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    }

    const handleCLosePopupByClickOnOverlay = (event) => {
        if (event.target !== event.currentTarget) {
            return;
        }
        closeMenu();
    }

    const setEscListener = () => {
        document.addEventListener('keydown', handleEscClose);
    }

    const removeEscListener = () => {
        document.removeEventListener('keydown', handleEscClose);
    }
    return (
        <div className="body">
            <Header handleMenuOpen={openMenu}/>
            <div className="page">
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route exact path="/contact">
                        <Contact/>
                    </Route>
                </Switch>
            </div>
            <Menu handleMenuClose={closeMenu} isOpen={isMenuOpen} onClick={handleCLosePopupByClickOnOverlay}
                  pathname={location.pathname} />
            <Footer pathname={location.pathname} />
        </div>
    );
}

export default App;
