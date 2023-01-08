import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createBook} from '../features/books/bookSlice';


function BookForm() {
    const [text,setText] = useState('');
    const [rating,setRating] = useState('');
    const [review,setReview] = useState('');
    
    const dispatch = useDispatch();
    
    const onSubmit = e => {
        e.preventDefault()

        dispatch(createBook({text,rating,review}))
        setText('')
        setRating('')
        setReview('')

    }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor='text' className='label'>Book</label>
                <input 
                type="text" 
                name='text' 
                id='text' 
                value = {text} 
                onChange={(e) => setText(e.target.value)}
                 />
                 <label htmlFor='rating' className='label'> Rating</label>
                 <input 
                type="text" 
                name='rating' 
                id='rating' 
                value = {rating} 
                onChange={(e) => setRating(e.target.value)}
                 />
                 <label htmlFor='review' className='label'> Review</label>
                 <textarea 
                type="text" 
                name='review' 
                id='review' 
                className='textbox'
                value = {review} 
                onChange={(e) => setReview(e.target.value)}
                 />
            </div>
            <div className="form-group">
                <button className='btn btn-block' type='submit'>
                    Add Book
                </button>
            </div>
        </form>   
    </section>
  )
}

export default BookForm