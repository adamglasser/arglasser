import { Link, useNavigate } from "react-router-dom";

const NavLink = ({ to, label }) => (<>
<li><Link to={to} className="nav-link px-2 link-dark">{label}</Link></li>
</>)

const Header = () => {
    const navigate = useNavigate();

    return(<><div className="container">
<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
  <div onClick={() => navigate('/')} style={{cursor: 'pointer'}} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
    <h3 className="fw-bold">🚀</h3>
  </div>

  <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
    <NavLink to="Work" label="Work" className="nav-link px-2 link-dark" />
    <NavLink to="About" label="About" className="nav-link px-2 link-dark" />
    <NavLink to="Resume" label="Resume" className="nav-link px-2 link-dark" />
  </ul>

  <div className="col-md-3 text-end">
    <button type="button" className="btn btn-outline-dark fw-bold rounded-0 border border-2 border-dark px-4"><small>Let{`'`}s chat</small></button>
  </div>
</header>
</div></>)}

export default Header;