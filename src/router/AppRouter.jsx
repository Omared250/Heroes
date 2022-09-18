import { Navigate, Routes, Route } from 'react-router-dom';

import { Navbar } from '../ui';

import { DcPage, MarvelPage } from '../heroes';
import { LoginPage } from '../auth';

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={ <MarvelPage /> } />
                <Route path="dc" element={ <DcPage /> } />
                <Route path="login" element={ <LoginPage /> } />

                <Route path='/' element={ <Navigate to="/marvel"/> } />
            </Routes>
        </>
    )
};
