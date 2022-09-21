import { types } from "../../../src/auth/types/types";

describe('Types test', () => {

    test('should return this types', () => {

        expect( types ).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });
        
    });

});