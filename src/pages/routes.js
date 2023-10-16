import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../components/Header' ;
import Home from './Home/index';
import Filme from './Filme/index'

function RoutesApp(){
    return(
<BrowserRouter>
<Header/>
<Routes>    
    <Route path='/' element={<Home/>}/>
    <Route path='/filme/:id' element={<Filme/>}/>
</Routes>
</BrowserRouter>
    )
}
export default RoutesApp;