const NewCommentForm = ({ articleId, onNewComment }) => {
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Read the form data
        const form = e.target
        const formData = new FormData(form)

        //Convert to an object
        const formJson = Object.fromEntries(formData.entries())

        // Send a request
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${articleId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formJson)
            })

            if(!response.ok) {
                console.error('Response was not OK')
            }

            const responseData = await response.json()

            onNewComment(responseData)

            alert('Se ha insertado el comentario correctamente')
            form.reset()

        } catch (error) {
            console.error(error.message)
        }

    }

    return (
        <div className="form-container">
            <form method="post" onSubmit={handleSubmit}>

                <div className="form-item">
                    <label>
                        Nombre del autor: <input type="text" name="authorName" required={true} />
                    </label>
                </div>
                <div className="form-item">
                    <label>
                        Correo del autor: <input type="email" name="authorEmail" required={true} />
                    </label>
                </div>
                <div className="form-item">
                    <label>
                        Contenido: <textarea name="content" rows={4} cols={100} required={true} />
                    </label>
                </div>
                <button type="submit" className="btn btn-submit">Añadir comentario</button>
            </form>
        </div>
    )
}

export default NewCommentForm
