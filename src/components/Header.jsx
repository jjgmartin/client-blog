import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1 className='header-title'>Mi blog</h1>
            <nav className='menu'>
                <Link to="/">Inicio</Link>
                <Link to="/new-post">Nuevo post</Link>
            </nav>
        </header >
    )
}

export default Header
