import './BookPreview.css'
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookList from "../components/BookList";

function BookPreview(){
    const { category } = useParams();
    return(
        <div>
            <Header />
            <BookList category={category}/>
            <Footer />
        </div>
    )
}

export default BookPreview