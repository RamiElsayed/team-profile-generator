const {describe, expect, test} = require('@jest/globals');
const Intern = require('../lib/intern');

describe('Intern', () => {
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