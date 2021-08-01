import './NavBar.css'

const NavBar = ({ links, toggleMenu, isMenuOpen }) => {
    const menuClass = isMenuOpen ? 'menu-open' : '';

    return(
        <div>
            <nav>
                <h1>Our Moto Shop</h1>
                <ul>
                    {links.map(link => <li>{link}</li>)}
                </ul>
                <img onClick={toggleMenu} src="https://miro.medium.com/max/600/1*TlgXIboiNz2O--aCYYztBg.png"/>
            </nav>

        <menu className={menuClass}>
            <h1 className={isMenuOpen ? 'menu-text' : 'hidden'}>Our Moto Shop</h1>
            <ul className={isMenuOpen ? 'menu-text' : 'hidden'}>{links.map(link => <li>{link}</li>)}</ul>
        </menu>
        </div>
    )
}

export default NavBar;