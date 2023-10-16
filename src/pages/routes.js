import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Home/index';
import Filme from './Filme/index'

function RoutesApp(){
    return(
<BrowserRouter>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/filme/:id' element={<Filme/>}/>
</Routes>
</BrowserRouter>
    )
}
export default RoutesApp;