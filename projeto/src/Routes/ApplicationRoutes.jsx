import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import Comentarios from '../pages/Comentarios/Comentarios'
import Portifolio from '../pages/Portifolio/Portifolio'
import Sobre from '../pages/Sobre/Sobre'

function ApplicationRoutes(){
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Sobre />} />
                <Route path='portifolio' element={<Portifolio/>} />
                <Route path='comentarios' element={<Comentarios />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes