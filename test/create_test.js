const assert = require('assert');
const User = require('../src/user');

describe('Creating user records', () => {
    it('saves a user', () => {
        const joe = new User({ name: 'Joe' })
        joe.save()
    })
});