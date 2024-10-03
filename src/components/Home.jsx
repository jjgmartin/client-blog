import Header from './Header';
import BlogPosts from './BlogPosts';
import Footer from './Footer'

const Home = () => {
    return(
        <>
            <Header />
            <main>
                <BlogPosts />
            </main>
            <Footer />
        </>
    )
}

export default Home
