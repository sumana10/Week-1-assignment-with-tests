const reverseWords = require('../easy/reverseWords');

describe('reverseWords', () => {
    test('reverses the order of words in a simple sentence', () => {
        const inputString = "Hello World";
        const result = reverseWords(inputString);
        expect(result).toBe("World Hello");
    });

    test('handles sentences with multiple spaces between words', () => {
        const inputString = "JavaScript is fun";
        const result = reverseWords(inputString);
        expect(result).toBe("fun is JavaScript");
    });

    test('handles empty input string', () => {
        const inputString = "";
        const result = reverseWords(inputString);
        expect(result).toBe("");
    });

    test('handles input with a single word', () => {
        const inputString = "OpenAI";
        const result = reverseWords(inputString);
        expect(result).toBe("OpenAI");
    });
});
