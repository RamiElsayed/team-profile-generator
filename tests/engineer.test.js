const {describe, expect, test} = require('@jest/globals');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    test('getGithub',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const github = 'ramybadr'

        const engineer = new Engineer(name, id, email,github);

        expect(engineer.getGithub()).toBe(github);
    });

    test('getRole',  () => {
        const name = 'Rami';
        const id = '23';
        const email = 'rami@test.com';
        const github = 'ramybadr'

        const engineer = new Engineer(name, id, email,github);

        expect(engineer.getRole()).toBe('Engineer');
    });
});

module.exports = Engineer;