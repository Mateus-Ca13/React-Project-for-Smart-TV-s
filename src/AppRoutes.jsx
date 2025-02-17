import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import { NavigationContextProvider } from './contexts/navigationContext';
import NavigationControllerWrapper from './layouts/NavigationControllerWrapper';

function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <NavigationContextProvider>
          <Routes>
            <Route path='/' element={<NavigationControllerWrapper/>}>
                <Route path='/'  element={<HomePage/>}/> 
                <Route path='/settings' element={<SettingsPage/>}/>
            </Route>
          </Routes>
        </NavigationContextProvider>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes;
