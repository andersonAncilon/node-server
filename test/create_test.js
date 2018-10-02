const assert = require('assert');
const User = require('../src/user');

describe('Creating user records', () => {
    it('saves a user', (done) => {
        const joe = new User({ name: 'Joe' })
        joe.save()
            .then(() => {
                //Has Joe been saved succefully?
                assert(!joe.isNew)
                done()
            })
    })
});