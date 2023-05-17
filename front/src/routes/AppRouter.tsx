import { Route, Routes } from 'react-router-dom'
import { Assets, Home, Login, Step_1, Step_2, Step_3, Step_4 } from "../pages"

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/step1' element={<Step_1 />} />
            <Route path='/step2' element={<Step_2 />} />
            <Route path='/step3' element={<Step_3 />} />
            <Route path='/step4' element={<Step_4 />} />
            <Route path='/login' element={<Login />} />
            <Route path='/assets' element={<Assets />} />
        </Routes>
    )
}