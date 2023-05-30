import { Link } from 'react-router-dom';

const Header = ({ projectName }) => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{projectName}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/">Contacts</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/aboutUs">About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;