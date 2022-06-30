const {describe, expect, test} = require('@jest/globals');
const Employee = require('../lib/employee');

describe('Employee', () => {
    test('getName',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';

        const employee = new Employee(name, id, email);

        expect(employee.getName()).toBe(name);
    });

    test('getId',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';

        const employee = new Employee(name, id, email);

        expect(employee.getId()).toBe(id);
    });

    test('getEmail',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';

        const employee = new Employee(name, id, email);

        expect(employee.getEmail()).toBe(email);
    });

    test('getRole',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';

        const employee = new Employee(name, id, email);

        expect(employee.getRole()).toBe('Employee');
    });
});