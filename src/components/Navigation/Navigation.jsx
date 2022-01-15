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
                        to="/umap"
                        exact
                        activeClassName={'selected'}
                        className={'navigation__item btn'}
                    >UMAP</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pca"
                        exact
                        className={'navigation__item btn'}
                        activeClassName={'selected'}>
                        PCA</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/tsne"
                        exact
                        className={'navigation__item btn'}
                        activeClassName={'selected'}>
                        TSNE</NavLink>
                </li>
            </ul>
        </nav >
    );
}

export default Navigation;