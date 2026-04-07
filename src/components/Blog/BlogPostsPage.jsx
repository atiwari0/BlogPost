import { useState, useEffect } from 'react';
import { Link } from 'react-router'; 
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import axios from 'axios';

function BlogPostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data.slice(0, 10));
            })
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            
            <main className="grow max-w-4xl mx-auto px-4 md:px-6 py-6 w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">Recent Blogs</h2>
                
                <div className="grid gap-6">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-sm transition">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">{post.title}</h3>
                            <p className="text-gray-600 mb-4">{post.body.substring(0, 120)}...</p>
                            
                            <Link 
                                to={`/post/${post.id}`}
                                className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition text-sm"
                            >
                                Read Full Blog ...
                            </Link>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default BlogPostsPage;