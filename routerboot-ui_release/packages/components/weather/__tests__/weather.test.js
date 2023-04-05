'use strict';

const weather = require('..');
const assert = require('assert').strict;

assert.strictEqual(weather(), 'Hello from weather');
console.info('weather tests passed');
