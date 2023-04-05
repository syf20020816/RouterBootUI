'use strict';

const explain = require('..');
const assert = require('assert').strict;

assert.strictEqual(explain(), 'Hello from explain');
console.info('explain tests passed');
