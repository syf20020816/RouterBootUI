'use strict';

const intro = require('..');
const assert = require('assert').strict;

assert.strictEqual(intro(), 'Hello from intro');
console.info('intro tests passed');
