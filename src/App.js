import { BrowserRouter } from 'react-router-dom';
import BookForm from './components/books/book.form';
import BooksContainer from './components/books/books.container';
import Navbar from './components/layout/navbar';
import Router from './router';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <BooksContainer />
    <BookForm />
    <Router />
  </BrowserRouter>

);

export default App;
