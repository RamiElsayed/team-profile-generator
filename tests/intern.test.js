const {describe, expect, test} = require('@jest/globals');
const Intern = require('../src/lib/Intern');
const { emptyValidationMessage } = require('../src/validation');

describe('Intern', () => {
    it.each([
        ['Name', '', '23', 'rami@test.com', 'UOB'],
        ['Id', 'Rami', '', 'rami@test.com', 'UOB'],
        ['Email', 'Rami', '23', '', 'UOB'],
        ['School', 'Rami', '23', 'rami@test.com', ''],
    ])("constructor when %s is empty", (property, name, id, email, school) => {
        const createIntern = () => new Intern(name, id, email, school);
        expect(createIntern).toThrowError(emptyValidationMessage(property));
    });

    it.each([
        ['Name', ' ', '23', 'rami@test.com', 'UOB'],
        ['Id', 'Rami', ' ', 'rami@test.com', 'UOB'],
        ['Email', 'Rami', '23', ' ', 'UOB'],
        ['School', 'Rami', '23', 'rami@test.com', ' '],
    ])("constructor when %s is whitespace", (property, name, id, email, school) => {
        const createIntern = () => new Intern(name, id, email, school);
        expect(createIntern).toThrowError(emptyValidationMessage(property));
    });

    test('getName',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const school = 'UOB';

        const intern = new Intern(name, id, email, school);

        expect(intern.getName()).toBe(name);
    });

    test('getId',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const school = 'UOB';

        const intern = new Intern(name, id, email, school);

        expect(intern.getId()).toBe(id);
    });

    test('getEmail',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const school = 'UOB';

        const intern = new Intern(name, id, email, school);

        expect(intern.getEmail()).toBe(email);
    });

    test('getSchool',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const school = 'UOB'

        const intern = new Intern(name, id, email, school);

        expect(intern.getSchool()).toBe(school);
    });

    test('getRole',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const school = 'UOB';

        const intern = new Intern(name, id, email, school);

        expect(intern.getRole()).toBe('Intern');
    });
});