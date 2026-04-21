import { useState } from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router";

function LoginPage() {
    const[username, setUsername] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username.trim()){
            login(username);
            navigate('/');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <form onSubmit={handleLogin} className="bg-white p-8 shadow-md rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold mb-4 text-center">Login to Blog</h2>
                <input 
                    type="text" 
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 w-full mb-4 rounded"
                    required
                />
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;