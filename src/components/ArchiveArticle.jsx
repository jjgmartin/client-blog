import { Link } from 'react-router-dom'

const ArchiveArticle = ({ post, onDelete }) => {
    const handleDelete = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_API_URL + '/posts/' + post._id, {
                method: 'DELETE'
            })

            if(!response.ok) {
                console.error('Something went wrong')
            }

            alert('Post deleted')

            onDelete(post._id)
        } catch (error) {
            console.error(error.message)
        }

    }
    return (
        <article>
            <h2>{post.title}</h2>
            <h3 className='subtitle'>{post.authorName}</h3>
            <p>{post.extract}</p>
            <div className='buttons-container'>
            <Link to={`/post/${post._id}`} className='btn btn-info'>Leer más</Link>
            <button onClick={handleDelete} className='btn btn-danger'>Eliminar</button>
            </div>
        </article>
    )
}

export default ArchiveArticle
