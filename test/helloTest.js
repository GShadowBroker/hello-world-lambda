const assert = require('assert');
const handler = require('../hello');

describe('Hello World Test', () => {
    it('should return Olá mundo!', async () => {
        const event = {};
        const result = await handler.hello(event);
        assert.equal(result.statusCode, 200);
        assert.equal(JSON.parse(result.body).message, 'Olá mundo!');
    });
});
