import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <h3>Nav Header</h3>
            <ul>
                <Link to="/tablecomponent" >
                    <li>TableComponent</li>
                </Link>
                <Link to='/createuser'>
                    <li>CreateUser</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav