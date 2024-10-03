import { useState, useEffect } from "react"
import Comments from './Comments'


const Article = ({ articleId }) => {
    const [postData, setPostData] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${articleId}`)
                const postData = await response.json()

                setPostData(postData)
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchPosts()
    }, [])
    return (
        <>
            <article>
                <h2>{postData.title}</h2>
                <h3 className="subtitle">{postData.authorName}</h3>
                <p>{postData.extract}</p>
            </article>
            <hr />
            <Comments articleId={articleId} />
        </>
    )
}

export default Article
