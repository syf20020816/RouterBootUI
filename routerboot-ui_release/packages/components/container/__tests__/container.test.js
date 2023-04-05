'use strict';

const container = require('..');
const assert = require('assert').strict;

assert.strictEqual(container(), 'Hello from container');
console.info('container tests passed');
