import Book from './components/books/book';
import BookForm from './components/books/book.form';
import Navbar from './components/layout/navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <Book />
    <BookForm />
  </div>
);

export default App;
