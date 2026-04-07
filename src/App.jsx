import { useState } from 'react'
import IndividualPostPage from './components/Blog/IndividualPostPage'
import { Route, Routes } from 'react-router'
import ContactPage from './components/Contact/ContactPage'
import BlogPostsPage from './components/Blog/BlogPostsPage'
import Navbar from './components/Common/NavBar'
import Header from './components/Common/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<BlogPostsPage />} />
      <Route path="/post/:id" element={<IndividualPostPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
