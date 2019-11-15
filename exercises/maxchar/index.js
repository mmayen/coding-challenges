// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};//Character map
    let max = 0;
    let maxChar = '';
    //populate map with char-frequency pairs for each character in str
    for(let char of str){
        charMap[char] = charMap[char]+ 1 || 1;
    }
    //check for max frequency 
    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar
}
module.exports = maxChar;
