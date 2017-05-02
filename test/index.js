'use strict';

const podliva = require('../');

console.log(podliva('test/main.js', 'test/config.js') === 'name: test\narg: test' ? 'test passed' : 'test failed');

