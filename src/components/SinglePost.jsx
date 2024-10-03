import { useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Article from './Article'

const SinglePost = () => {
    const { articleId } = useParams()

    return (
        <>
            <Header />
            <main>
                <Article articleId={articleId} />
                <hr />
            </main>
            <Footer />
        </>
    )
}

export default SinglePost
