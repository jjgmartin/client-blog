import { useState, useEffect } from "react"
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'


const Comments = ({ articleId }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${articleId}/comments`)
                const data = await response.json()

                setComments(data)
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchComments()
    }, [])

    const handleCmmentDelete = (commentId) => {
        setComments(comment => comment.filter(comment => comment._id !== commentId))
    }

    const handleNewComment = (newComment) => {
        setComments(prevComments => [...prevComments, newComment])
    }

    return(
        <section>
            <h2>Publica un comentario</h2>
            <NewCommentForm articleId={articleId} onNewComment={handleNewComment}/>
            <hr />
            <h2>Comentarios:</h2>
            {comments.map(comment => (
                <Comment key={comment._id} articleId={articleId} comment={comment} onDelete={handleCmmentDelete} />
            ))}
        </section>
    )
}

export default Comments
