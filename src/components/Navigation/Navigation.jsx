import { NavLink } from 'react-router-dom'

import './Navigation.css'

function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__logo">
                WWZD 
            </div>
            <ul className="navigation__item-list">
                <li>
                    <NavLink
                        to="/"
                        exact
                        activeClassName={'selected'}
                        className={'navigation__item btn'}
                    >Graph tree</NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/Wordcloud"
                        exact
                        className={'navigation__item btn'}
                        activeClassName={'selected'}>
                        Wordcloud</NavLink>
                </li>
            </ul>
        </nav >
    );
}

export default Navigation;