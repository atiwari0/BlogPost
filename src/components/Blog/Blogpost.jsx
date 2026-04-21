import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../../AuthContext'
import { Link } from 'react-router'

function BlogPost({postId, title, content, author, date}){
    const [comment, setComment] = useState([]);
    const [text, setText] = useState('');
    const { user } = useAuth();

    useEffect(() => {
        if(postId){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(response => {
                    console.log("These are the comments", response.data);
                    const fetchedComments = response.data.map(e => ({
                        name: e.name,
                        text: e.body
                    }));

                    setComment(fetchedComments);
                })
                .catch(error => console.error("Error fetching comment:", error));
        }
    }, [postId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            const newCommentData = {
                name: user.name,
                body: text,
                email: "123@example.com"
            };
        
            axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, newCommentData)
                .then(response =>{
                    setComment([...comment, {name: user.name, text: text}]);
                    setText('');

                    console.log("Posted comment:", response.data);
                })
                .catch(error => {
                    console.error("Error posting comment:", error);
                    alert("Failed to post comment. Please try again.");
                })
        } else {
            alert("Please fill out both your name and the comment!");
        }
    };
    
    return(
        <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
                <p className="text-gray-600 mb-6">{content}</p>

                <div className="text-sm pb-6">
                    <p>
                        <span className="font-bold text-gray-700">Author: </span> 
                        <span className="text-gray-500">{author}</span>
                    </p>
                    <p>
                        <span className="font-bold text-gray-700">Date: </span> 
                        <span className="text-gray-500">{date}</span>
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Comments</h2>

                    {user ?(
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-8">
                            <div className="text-gray-600 font-semibold mb-1">
                                Commenting as: <span className="text-blue-600">{user.name}</span>
                            </div>
                            <textarea 
                                placeholder="Add a comment" 
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="w-full border border-gray-200 rounded-lg p-2 pt-2 text-gray-700 outline-none focus:ring-2 focus:ring-amber-400"
                            ></textarea>
                            <button type="submit" className='bg-amber-400 px-5 py-2 rounded-2xl text-white font-bold hover:bg-amber-600 transition self-start'>
                                Submit
                            </button>
                        </form>
                    ):(
                        <div className="bg-gray-50 p-6 rounded-lg text-center mb-8 border border-gray-200">
                            <p className="text-gray-600 mb-2">You must be logged in to join the conversation.</p>
                            <Link to="/login" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                                Go to Login Page
                            </Link>
                        </div>
                    )}

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Existing Comments:</h3>
                    
                    {comment.length === 0 ? (
                        <p className="text-gray-500 text-center">No comments yet. Be the first to comment!</p>
                    ) : (
                        <ul className="space-y-4">
                            {comment.map((c, index) => (
                                <li key={index} className="bg-gray-50 p-1 rounded-lg border border-gray-100">
                                    <p className="font-bold text-gray-700">{c.name}</p>
                                    <p className="text-gray-600">{c.text}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogPost;