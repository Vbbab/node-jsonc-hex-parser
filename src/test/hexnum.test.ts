'use strict';

import {assertValidParse} from './json.test';
suite('JSON - Vbbab\'s extensions', () => {
    test('hex numbers', () => {
        let content = '{\n    "x": 0x42\n}';
        assertValidParse(content, {x: 0x42});
    });
});
