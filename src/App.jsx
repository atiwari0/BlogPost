import { useState } from 'react'
import { Route, Routes } from 'react-router'
import IndividualPostPage from './components/Blog/IndividualPostPage'
import ContactPage from './components/Contact/ContactPage'
import BlogPostsPage from './components/Blog/BlogPostsPage'
import Navbar from './components/Common/NavBar'
import Header from './components/Common/Header'
import LoginPage from './components/Login/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<BlogPostsPage />} />
      <Route path="/post/:id" element={<IndividualPostPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
