import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/homepage';
import Diary from './page/diary';
// Other imports...

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
