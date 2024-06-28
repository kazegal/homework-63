import {Link, NavLink} from "react-router-dom";


const Toolbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">My Blog</Link>
                <div className="">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/new-post">Add</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Toolbar;