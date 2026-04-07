import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import BlogPost from './Blogpost';

function IndividualPostPage() {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState(null);

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setPost(response.data);
                return axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`);
            })
            .then(response => {
                setAuthor(response.data);
            })
            .catch(error => console.error("Error fetching post or user:", error));
    }, [id]);

    if(!post){
        return(
            <div className="min-h-screen flex flex-col bg-gray-50">
                <Header />
                <main className="grow flex items-center justify-center">
                    <p className="text-xl font-semibold text-gray-500">Loading post...</p>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="grow">
                <BlogPost
                    postId={id} 
                    title={post.title}
                    content={post.body}
                    author={author ? `${author.name} (${author.email})` : "Loading author..."}
                    date="April 3, 2026"
                />
            </main>
            <Footer />   
        </div>
    );
}

export default IndividualPostPage;