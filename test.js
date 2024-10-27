// test/fibonacci.test.js

const assert = require('chai').assert;
const fibonacci = require('../fibonacci'); // Import the Fibonacci function

// Tests for Fibonacci function
describe('Fibonacci Function', function() {
    it('should return 0 for input 0', function() {
        assert.equal(fibonacci(0), 0);
    });

    it('should return 1 for input 1', function() {
        assert.equal(fibonacci(1), 1);
    });

    it('should return 1 for input 2', function() {
        assert.equal(fibonacci(2), 1);
    });

    it('should return 2 for input 3', function() {
        assert.equal(fibonacci(3), 2);
    });

    it('should return 3 for input 4', function() {
        assert.equal(fibonacci(4), 3);
    });

    it('should return 5 for input 5', function() {
        assert.equal(fibonacci(5), 5);
    });

    it('should throw an error for negative input', function() {
        assert.throws(() => fibonacci(-1), Error, "Input must be a non-negative integer.");
    });
});

// Pair programmed with: [Your Teammate's Name]
