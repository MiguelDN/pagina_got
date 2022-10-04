import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';

import Datagrid from './pages/Datagrid';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import PageImages from './pages/PageImages';
import { useState } from 'react';

function App() {

  
  const  [contador, setContador]  = useState(0);
  const sumar=() =>{
    console.log(contador)
    setContador(contador + 1)
  }



  return (
    <React.Fragment >
      <BrowserRouter>
        <Dashboard  contador={contador} sumar={sumar} pages={
          <Routes>
            <Route path='datagrid' element={<Datagrid contador={contador} />} />
            <Route path='page2' element={<Page2 />} />
            <Route path='page3' element={<Page3 sumar={sumar} />} />
            <Route path='pageimages' element={<PageImages />} />
          </Routes>}
        />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;