import { Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './views/Main';
import DetailAuthor from './views/DetailAuthor';
import UpdateAuthor from './views/UpdateAuthor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/"/>
        {/* <Route element={<Detail/>} path="/people/:id"/> */}
        {/* <Route element={<DetailProduct/>} path="/products/:id"/>
        <Route element={<UpdateProduct/>} path="/products/:id/edit"/> */}


        <Route element={<DetailAuthor/>} path="/authors/:id"/>
        <Route element={<UpdateAuthor/>} path="/authors/:id/edit"/>

      </Routes>
    </div>
  );
}

export default App;