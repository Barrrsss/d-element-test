import './App.css';
import {Route, Switch, useLocation} from 'react-router';
import React, {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import Popup from '../Popup/Popup';

function App() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isSucessTooltip, setIsSucessTooltip] = useState(false);
    const scrollOff = () =>{
        document.getElementsByTagName("body")[0].style.overflow = 'hidden';
    }
    const scrollOn = () =>{
        document.getElementsByTagName("body")[0].style.overflow = 'scroll';
        document.getElementsByTagName("body")[0].style.overflowX = 'hidden';
    }
    const openMenu = () => {
        setIsMenuOpen(true);
        setEscListener();
        scrollOff();
    }
    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsPopupOpen(false);
        removeEscListener();
        scrollOn();
    }
    const handleEscClose = (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    }
    const openInfoPopup = () => {
        setIsPopupOpen(true);
        setIsSucessTooltip(false);
        setEscListener();
        scrollOff();
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
    const handleEditProfile = ({email, name}) => {
        setIsPopupOpen(true);
        setIsSucessTooltip(true);
        scrollOff();
        console.log(`POST запрос с  Имя: ${name} Email: ${email}`)
    }
    return (
        <div className="body">
            <Header handleMenuOpen={openMenu}/>
            <div className="page">
                <Switch>
                    <Route exact path="/contact">
                        <Contact handleSubmit={handleEditProfile}/>
                    </Route>
                    <Route exact path="/*">
                        <Main />
                    </Route>
                </Switch>
                <Popup closePopup={closeMenu} isOpen={isPopupOpen} onClick={handleCLosePopupByClickOnOverlay}
                       isTooltipStatus={isSucessTooltip} handleSubmit={handleEditProfile}/>
            </div>
            <Menu handleMenuClose={closeMenu} isOpen={isMenuOpen} onClick={handleCLosePopupByClickOnOverlay}
                  pathname={location.pathname} />

            <Footer pathname={location.pathname} openPopup = {openInfoPopup} />
        </div>
    );
}

export default App;
