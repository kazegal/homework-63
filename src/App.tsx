import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './container/Home/Home';
import NewPost from './container/NewPost/NewPost';
import About from './container/About/About';
import Contacts from './container/Contacts/Contacts';
import ReadMore from './container/ReadMore/ReadMore';
import EditPost from './container/EditPost/EditPost';
import './App.css';

const App = () => {
  return (
      <Router>
        <header>
          <Toolbar />
        </header>
        <main className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/posts/:id" element={<ReadMore />} />
            <Route path="/posts/:id/edit-post" element={<EditPost />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<h1 className="text-center mt-5">Not Found!</h1>} />
          </Routes>
        </main>
      </Router>
  );
}

export default App;
