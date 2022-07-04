const {describe, expect, test, it} = require('@jest/globals');
const Employee = require('../src/lib/Employee');
const { emptyValidationMessage } = require('../src/validation');

describe('Employee', () => {
    it.each([
        ['Name', '', '23', 'rami@test.com'],
        ['Id', 'Rami', '', 'rami@test.com'],
        ['Email', 'Rami', '23', ''],
    ])("constructor when %s is empty", (property, name, id, email) => {
        const createEmployee = () => new Employee(name, id, email);
        expect(createEmployee).toThrowError(emptyValidationMessage(property));
    });

    it.each([
        ['Name', ' ', '23', 'rami@test.com'],
        ['Id', 'Rami', ' ', 'rami@test.com'],
        ['Email', 'Rami', '23', ' '],
    ])("constructor when %s is whitespace", (property, name, id, email) => {
        const createEmployee = () => new Employee(name, id, email);
        expect(createEmployee).toThrowError(emptyValidationMessage(property));
    });
    
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