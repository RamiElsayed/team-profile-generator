const {describe, expect, test} = require('@jest/globals');
const Manager = require('../lib/manager');

describe('Manager', () => {
    test('getName',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const officeNumber = '2';

        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getName()).toBe(name);
    });

    test('getId',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const officeNumber = '2';

        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getId()).toBe(id);
    });

    test('getEmail',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const officeNumber = '2';

        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getEmail()).toBe(email);
    });
    
    test('getOfficeNumber',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const officeNumber = '2';

        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getOfficeNumber()).toBe(officeNumber);
    });

    test('getRole',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const officeNumber = '2';

        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getRole()).toBe('Manager');
    });
});