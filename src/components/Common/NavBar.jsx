import { Link } from 'react-router';
import { useAuth } from '../../AuthContext';

function Navbar() {
    const { user, logout} = useAuth();

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
            
            <li className="flex items-center space-x-4 pl-6 border-l-2 border-gray-300">
                {user ? (
                    <>
                        <span className="font-bold">
                            Hi, {user.name}!
                        </span>
                        <button 
                            onClick={logout} 
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link 
                        to="/login" 
                        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
                    >
                        Login
                    </Link>
                )}
            </li>
        </ul>
    </nav>
  );
}

export default Navbar