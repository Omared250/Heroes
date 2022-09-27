import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../src/auth/context/AuthContext";
import { Navbar } from "../../../src/ui/components/Navbar";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('<Navbar /> test', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Omar Ascanio',
        },
        logout: jest.fn(),
    };

    beforeEach( () => jest.clearAllMocks() );

    test('should show el user name', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>  
        );

        expect( screen.getByText('Omar Ascanio') ).toBeTruthy();

    });

    test('should call the logout and navigate when the button is clicked', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>  
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalledTimes(1);
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});

    });

});