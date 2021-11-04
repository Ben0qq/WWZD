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
                <li>
                    <NavLink
                        to="/Forcegraph"
                        exact
                        className={'navigation__item btn'}
                        activeClassName={'selected'}>
                        Forcegraph</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Forcegraph3d"
                        exact
                        className={'navigation__item btn'}
                        activeClassName={'selected'}>
                        Forcegraph3d</NavLink>
                </li>
            </ul>
        </nav >
    );
}

export default Navigation;