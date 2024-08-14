import Header from "../components/Header";
import Banner from "../components/Banner";
import BookDisplay from "../components/BookDisplay";
import Ad from "../components/Ad";
import './Home.css'
import bookstore from "../images/bookstore.jpg"
import Footer from "../components/Footer";

function Home(){
    return(
        <div>
            <Header/>
            <Banner/>
            <BookDisplay category="best_seller" />
            <Ad/>
            <BookDisplay category="fiction" />
            <BookDisplay category="nonfiction" />

            <div className="homeaboutus">
                <img src={bookstore} alt="bookstore" className="bookstore" />
                <div className="homeaboutus-article">
                    <article>
                        <h2>About us</h2>
                        <p>Welcome to Chapters Bookstore, your literary haven where every page holds a new adventure and
                            every bookshelf whispers tales of imagination. At Chapters Bookstore, we believe that every
                            reader deserves to embark on a journey of discovery through the pages of a book. With a vast
                            collection spanning genres from classics to contemporary bestsellers, our bookstore is a
                            treasure trove waiting to be explored.</p>
                        <p>Our knowledgeable staff is here to guide you, offering personalized recommendations and
                            helping you find the perfect book to accompany you on your literary voyage. From cozy
                            reading corners to vibrant community events, Chapters Bookstore is more than just a place to
                            buy books — it's a gathering space for book lovers to connect, share, and celebrate the
                            magic of storytelling.</p>

                    </article>
                </div>
                <div className="clear"></div>
            </div>

            <Footer />
        </div>
    )
}

export default Home;