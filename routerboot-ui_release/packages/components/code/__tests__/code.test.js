'use strict';

const code = require('..');
const assert = require('assert').strict;

assert.strictEqual(code(), 'Hello from code');
console.info('code tests passed');
