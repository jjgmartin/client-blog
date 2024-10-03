const NewPostForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Read the form data
        const form = e.target
        const formData = new FormData(form)

        //Convert to an object
        const formJson = Object.fromEntries(formData.entries())

        // Send a request
        try {
            const response = await fetch(process.env.REACT_APP_API_URL + '/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formJson)
            })

            if(!response.ok) {
                console.error('Response was not OK')
            }

            alert('El post se ha creado correctamente')
            form.reset()
        } catch (error) {
            console.error(error.message)
        }

    }

    return (
        <div className="form-container">
            <form method="post" onSubmit={handleSubmit}>
                <div className="form-item">
                    <label>Titulo del post: </label>
                    <input type="text" name="title" required={true} />
                </div>
                <div className="form-item">
                    <label>Resumen del post:</label>
                    <textarea name="extract" rows={4} cols={100} required={true} />
                </div>
                <div className="form-item">
                    <label>Contenido del post:</label>
                    <textarea name="content" rows={4} cols={100} required={true} />
                </div>
                <div className="form-item">
                    <label>Nombre del autor del post:</label>
                    <input type="text" name="authorName" required={true} />
                </div>
                <div className="form-item">
                    <label>Email del autor del post:</label>
                    <input type="email" name="authorEmail" required={true} />
                </div>
                <button type="submit" className="btn btn-submit">Añadir post</button>
            </form>
        </div>
    )
}

export default NewPostForm
