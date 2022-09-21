import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";


describe('authReducer test', () => {

    const initialState = {
        logged: false,
    };

    const login = {
        type: types.login,
        payload: {
            id: '123',
            name: 'Omar ascanio'
        }
    };

    const logout = {
        type: types.logout,
    };

    test('should return the default state', () => {

        const newSatet = authReducer( initialState, {} );
        expect( newSatet ).toBe( initialState );

    });

    test('should call the login to authenticate and set the user', () => {

        const loginState = authReducer( initialState, login );
        expect( loginState ).toEqual({
            logged: true,
            user: login.payload,
        });

    });

    test('should delete the user name and set the logged to false', () => {

        const state = {
            logged: true,
            user: { id: '123', name: 'Omar ascanio' },
        };

        const logoutState = authReducer( state, logout );
        expect( logoutState ).toEqual( { logged: false } )

    });

});