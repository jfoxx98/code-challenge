import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post'
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  /**
   * Entry-point of app is the overview of all posts. Therefore the path of Posts-Component is "/".
   * 
   * "/:id" as dynamic segment to show detailpage of a specific blogpost in Post-Component
   */
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<Posts />} />
          <Route exact path='/:id' element={<Post />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  ); 
}

export default App;
