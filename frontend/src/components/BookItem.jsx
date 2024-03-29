import {useDispatch} from 'react-redux';
import {deleteBook} from '../features/books/bookSlice';

function BookItem({book}) {
    const dispatch = useDispatch();
  return (
    <div className="book">
        <div>
            {new Date(book.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{book.text}</h2>
        <h2>{book.rating}</h2>
        <p className='review'>{book.review}</p>
        <button onClick= {() => dispatch(deleteBook(book._id))}   className="close">X</button>
    </div>
  )
}

export default BookItem