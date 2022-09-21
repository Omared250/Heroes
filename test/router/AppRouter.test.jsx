import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('<AppRouter /> Test', () => {

    test('should show the login if it is not authenticated', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // screen.debug();
        expect( screen.getAllByText('Login').length ).toBeGreaterThan(1);

    });

    test('should show the marvel component if it is authenticated', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Omar ascanio',
            }
        };

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // screen.debug();
        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);

    });

});