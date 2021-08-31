import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo-putih.png';

function HeaderLogo() {
    return (
        <nav className="w-screen h-2/3 bg-red-900 py-3 flex justify-center">
            <Link to="/">
                <img src={Logo} alt="IB IT&B" className="w-52" />
            </Link>
        </nav>
    )
}

export default HeaderLogo
