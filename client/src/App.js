import './App.css';
import MainPage from './components/MainPage';
import Profile from './components/Profile';
import {Routes,Route} from 'react-router-dom'

function App() {
 // <MainPage/>
 //<Profile/>
 //<Route path='/profile' element={<Profile/>}/>
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
