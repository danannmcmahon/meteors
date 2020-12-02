import { Link } from 'react-router-dom';

const Nav = (props) => {
    return(
        <div className="navigation">
        <Link to={props.link}>{props.text}</Link>
        </div>
    );
};

export default Nav;