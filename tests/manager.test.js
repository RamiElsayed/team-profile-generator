const {describe, expect, test} = require('@jest/globals');
const Manager = require('../lib/manager');
const { emptyValidationMessage } = require('../src/validation');


describe('Manager', () => {
    it.each([
        ['Name', '', '23', 'rami@test.com', '11'],
        ['Id', 'Rami', '', 'rami@test.com', '11'],
        ['Email', 'Rami', '23', '', '11'],
        ['OfficeNumber', 'Rami', '23', 'rami@test.com', ''],
    ])("constructor when %s is empty", (property, name, id, email, officeNumber) => {
        const createManager = () => new Manager(name, id, email, officeNumber);
        expect(createManager).toThrowError(emptyValidationMessage(property));
    });

    it.each([
        ['Name', ' ', '23', 'rami@test.com', '11'],
        ['Id', 'Rami', ' ', 'rami@test.com', '11'],
        ['Email', 'Rami', '23', ' ', '11'],
        ['OfficeNumber', 'Rami', '23', 'rami@test.com', ' '],
    ])("constructor when %s is whitespace", (property, name, id, email, officeNumber) => {
        const createManager = () => new Manager(name, id, email, officeNumber);
        expect(createManager).toThrowError(emptyValidationMessage(property));
    });

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