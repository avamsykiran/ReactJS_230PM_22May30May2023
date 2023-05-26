
const Header = ({projectName}) => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{projectName}</a>
        </div>
    </nav>
);

export default Header;