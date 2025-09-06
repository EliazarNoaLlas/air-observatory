import {Routes, Route} from 'react-router-dom'
import {Home, About} from './pages/index'
import {Header} from './components/layout/index'

const App = () => {
    return (
        <>
            <Header/>

            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>

        </>
    )
}
export default App