import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{textDecoration:"none",display:"inline"}}>
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/about">About</Link> 
        </li>
        <li>
          <Link to="/contact">Contact</Link> 
        </li>
        
      </ul>
    </div>
  );
};

export default Header;
