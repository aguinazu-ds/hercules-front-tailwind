import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import { Navbar, Sidebar } from './components';
import { Empresas } from './pages';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
    const { activeMenu } = useStateContext();
    const currentMode = 'Light';

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                {activeMenu ? (
                    <div className='w-80 fixed sidebar dark:bg-secondary-dark-bg bg-blue-ribbon-800'>
                        <Sidebar />
                    </div>
                ) : (
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar />
                    </div>
                )}
                <div className={
                    `dark:bg-main-bg bg-whisper-50 min-h-screen w-full ${activeMenu ? 'md:ml-80' : 'flex-2'}`
                    }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar />
                    </div>
                    <div className='overflow-auto h-[calc(100vh_-_4.5rem)]'>
                        <Routes>
                            <Route path='/' element= "Home" />

                            {/* Edicion */}
                            <Route path='/empresas' element={<Empresas />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App