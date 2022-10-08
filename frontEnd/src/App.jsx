import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';

import Datagrid from './pages/Datagrid';
import Contador from './pages/Contador';
import PageImages from './pages/PageImages';
import { useState } from 'react';

import {FotoProvider} from './context/FotoProvider';



function App() {

  
  
  const  [contador, setContador]  = useState(0);
  const sumar=() =>{
    console.log(contador)
    setContador(contador + 1)
  }


  // Envolvemos a todos los componentes con el componente del contexto
  return (
    <FotoProvider>
    <React.Fragment >
      <BrowserRouter>
        <Dashboard  contador={contador} sumar={sumar} pages={
          <Routes>
            <Route path='datagrid' element={<Datagrid contador={contador} />} />
            <Route path='Contador' element={<Contador sumar={sumar} />} />
            <Route path='pageimages' element={<PageImages />} />
          </Routes>}
        />
      </BrowserRouter>
    </React.Fragment>
    </FotoProvider>
  );
}

export default App;