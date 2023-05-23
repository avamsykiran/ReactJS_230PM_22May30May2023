
const Header = props => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.projectName}</a>
        </div>
    </nav>
);

export default Header;