import Navbar from './NavBar';

function Header(){
    return(
        <div className="bg-linear-to-r from-blue-600 to-indigo-800 text-white p-7 shadow-xl">
            <h1 className="text-4xl font-bold mb-4">My Blog</h1> 
            <Navbar /> 
        </div>
    );
}

export default Header