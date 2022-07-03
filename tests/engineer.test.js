const {describe, expect, test} = require('@jest/globals');
const Engineer = require('../lib/Engineer');
const { emptyValidationMessage } = require('../src/validation');

describe('Engineer', () => {
    it.each([
        ['Name', '', '23', 'rami@test.com', 'ramielsayed'],
        ['Id', 'Rami', '', 'rami@test.com', 'ramielsayed'],
        ['Email', 'Rami', '23', '', 'ramielsayed'],
        ['GitHub', 'Rami', '23', 'rami@test.com', ''],
    ])("constructor when %s is empty", (property, name, id, email, github) => {
        const createEngineer = () => new Engineer(name, id, email, github);
        expect(createEngineer).toThrowError(emptyValidationMessage(property));
    });

    it.each([
        ['Name', ' ', '23', 'rami@test.com', 'ramielsayed'],
        ['Id', 'Rami', ' ', 'rami@test.com', 'ramielsayed'],
        ['Email', 'Rami', '23', ' ', 'ramielsayed'],
        ['GitHub', 'Rami', '23', 'rami@test.com', ' '],
    ])("constructor when %s is whitespace", (property, name, id, email, github) => {
        const createEngineer = () => new Engineer(name, id, email, github);
        expect(createEngineer).toThrowError(emptyValidationMessage(property));
    });
    
    test('getName',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const github = 'ramybadr'

        const engineer = new Engineer(name, id, email, github);

        expect(engineer.getName()).toBe(name);
    });

    test('getId',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const github = 'ramybadr'

        const engineer = new Engineer(name, id, email, github);

        expect(engineer.getId()).toBe(id);
    });

    test('getEmail',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const github = 'ramybadr'

        const engineer = new Engineer(name, id, email, github);

        expect(engineer.getEmail()).toBe(email);
    });

    test('getGithub',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const github = 'ramybadr'

        const engineer = new Engineer(name, id, email, github);

        expect(engineer.getGithub()).toBe(github);
    });

    test('getRole',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const github = 'ramybadr'

        const engineer = new Engineer(name, id, email, github);

        expect(engineer.getRole()).toBe('Engineer');
    });
});

module.exports = Engineer;