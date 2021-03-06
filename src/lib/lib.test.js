const { hello, getSecret } = require('./index');

test('test hello world', () => {
    expect(hello('world!')).toBe('Hello world!');
});

test('test getSecret', () => {
    expect(getSecret('TEST_VAR')).toBe('Valid!');
});

test('test getSecret notfound', () => {
    expect(getSecret('notfound')).toBe('Not found');
});
