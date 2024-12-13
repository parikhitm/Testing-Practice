import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './functions';

describe('capitalize', () => {
    test('capitalizes the first letter of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
    test('returns an empty string if input is empty', () => {
        expect(capitalize('')).toBe('');
    });
});

describe('reverseString', () => {
    test('reverses a string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
});


describe('calculator', () => {
    test('adds two numbers', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });
    test('subtracts two numbers', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    });
    test('multiplies two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
    });
    test('divides two numbers', () => {
        expect(calculator.divide(6, 2)).toBe(3);
    });
    test('throws error when dividing by zero', () => {
        expect(() => calculator.divide(1, 0)).toThrow("Cannot divide by zero");
    });
});

describe('caesarCipher', () => {
    test('shifts characters correctly', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
});

describe('analyzeArray', () => {
    test('analyzes an array of numbers', () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });
});