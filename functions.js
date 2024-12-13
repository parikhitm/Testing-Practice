// Capitalize Functions
export const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Reverse string function
export const reverseString = (str) => {
    return str.split('').reverse().join('');
};

// Calculator object
export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }
};

// Caesar cipher function
export const caesarCipher = (str, shift) => {
    const shiftChar = (char) => {
        const base = char >= 'a' && char <= 'z' ? 'a' : char >= 'A' && char <= 'Z' ? 'A' : null;
        if (!base) return char; // Non-alphabetical characters remain unchanged
        const charCode = char.charCodeAt(0);
        const shiftedCode = ((charCode - base.charCodeAt(0) + shift) % 26) + base.charCodeAt(0);
        return String.fromCharCode(shiftedCode);
    };
    return str.split('').map(shiftChar).join('');
};

// Analyze array function
export const analyzeArray = (arr) => {
    const average = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        average,
        min,
        max,
        length: arr.length
    };
};