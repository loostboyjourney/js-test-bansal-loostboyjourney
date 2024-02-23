function romanToInt(s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = romanNumerals[s[i]];
        const nextVal = romanNumerals[s[i + 1]];

        if (nextVal && currentVal < nextVal) {
            result += nextVal - currentVal;
            i++;
        } else {
            result += currentVal;
        }
    }

    return result;
}

// Test cases
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994
console.log(romanToInt("X"));        // Output: 10
console.log(romanToInt("IV"));       // Output: 4
console.log(romanToInt("IX"));       // Output: 9
console.log(romanToInt("MMMCMXCIX"));// Output: 3999
console.log(romanToInt(""));         // Output: 0
