import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element />
            <Route path='/login' element />
            <Route path='/signup' element />
            <Route path='/' element />
        </Routes>
    )
}