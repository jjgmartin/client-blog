import { useState, useEffect } from "react"
import ArchiveArticle from './ArchiveArticle'


const BlogPosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL + '/posts')
                const data = await response.json()

                setPosts(data)
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchPosts()
    }, [])

    const handlePostDelete = (postId) => {
        setPosts(posts => posts.filter(post => post._id !== postId))
    }

    return(
        <section>
            {posts.map(post => (
                <ArchiveArticle key={post._id} post={post} onDelete={handlePostDelete} />
            ))}
        </section>
    )
}

export default BlogPosts
