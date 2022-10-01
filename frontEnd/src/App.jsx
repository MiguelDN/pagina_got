import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';

import Datagrid from './pages/Datagrid';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import PageImages from './pages/PageImages';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Dashboard pages={
          <Routes>
            <Route path='datagrid' element={<Datagrid />} />
            <Route path='page2' element={<Page2 />} />
            <Route path='page3' element={<Page3 id={5}/>} />
            <Route path='pageimages' element={<PageImages />} />
          </Routes>}
        />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;