import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<Posts />}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  ); 
}

export default App;
