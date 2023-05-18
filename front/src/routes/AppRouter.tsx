import { Route, Routes } from 'react-router-dom'
import { Assets, Home, Login, Step } from "../pages"

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/step1' element={<Step step={1} previous={''}/>} />
            <Route path='/step2' element={<Step step={2} previous={''}/>} />
            <Route path='/step3' element={<Step step={3} previous={'step2'}/>} />
            <Route path='/step4' element={<Step step={4} previous={'step3'}/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/assets' element={<Assets />} />
        </Routes>
    )
}