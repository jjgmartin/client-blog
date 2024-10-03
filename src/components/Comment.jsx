const comment = ({ articleId, comment, onDelete }) => {
    const handleDelete = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${articleId}/comments/${comment._id}`, {
                method: 'DELETE'
            })

            if(!response.ok) {
                console.error('Something went wrong')
            }

            alert('Comentario eliminado')

            onDelete(comment._id)
        } catch (error) {
            console.error(error.message)
        }

    }


    return (
        <div className="comment">
            <h3>{comment.authorName}</h3>
            <h4>{comment.authorEmail}</h4>
            <p>{comment.content}</p>
            <button onClick={handleDelete} className="btn btn-danger">Eliminar</button>
        </div>
    )
}

export default comment
