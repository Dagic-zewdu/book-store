import { BrowserRouter } from 'react-router-dom';
import Book from './components/books/book';
import BookForm from './components/books/book.form';
import Navbar from './components/layout/navbar';
import Router from './router';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Book />
    <BookForm />
    <Router />
  </BrowserRouter>

);

export default App;
