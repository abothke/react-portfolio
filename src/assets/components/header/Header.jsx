import './header.css'
import DarkModeToggle from '../../img/dark-light.png'

const Header = () => {
    return ( 
        <>
        <header>
        <h1 id="logo" className='logo'>JS.</h1>
        <div id="header-nav">
            <a href="">projects</a>
            <a href="">skills</a>
            <a href="">contact</a>
            <a href=""><img src={DarkModeToggle} alt="Darkmodetoggle" /></a>
        </div>
        </header>
        </>
     );
}
 
export default Header;