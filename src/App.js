import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import { Layout } from './components';
import { LandingPage ,Empresas, Login } from './pages';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
    const { activeMenu } = useStateContext();
    const currentMode = 'Light';

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>

        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/login' element={ <Login />} />
                    <Route element={<Layout />}>
                        {/* Edicion */}
                        <Route path='/empresas' element={<Empresas />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App