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
console.log(romanToInt("III"));      
console.log(romanToInt("LVIII"));    
console.log(romanToInt("MCMXCIV"));  
console.log(romanToInt("X"));        
console.log(romanToInt("IV"));       
console.log(romanToInt("IX"));       
console.log(romanToInt("MMMCMXCIX"));
console.log(romanToInt(""));         
