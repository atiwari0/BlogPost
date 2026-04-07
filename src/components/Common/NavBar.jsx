import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="flex justify-center">
        <ul className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-10 text-base">
            <li>
                <Link to="/" className="cursor-pointer hover:text-blue-100 transition-colors">Home</Link>
            </li>
            <li>
                <Link to="/" className="cursor-pointer hover:text-blue-100 transition-colors">Blog Posts</Link>
            </li>
            <li>
                <Link to="/contact" className="cursor-pointer hover:text-blue-100 transition-colors">Contact</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar