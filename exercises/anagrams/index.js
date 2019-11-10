// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charMap(str) {
    const charMap={};
    //iterate through each char of string
    for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
        /* check if key value exist and increment
          else initialize to 1
        */
        if(charMap[char]){
            charMap[char]= charMap[char]+1
        } else{
            charMap[char]= 1;
        }
    }
return charMap;
}

function anagram(stringA, stringB){
    const charMapA = charMap(stringA);
    const charMapB = charMap(stringB);
    //check if length of both charmap objects are the same 
     if(Object.keys(charMapA).length !== Object.keys(charMapB).length){
         return false;
     }
     //check if the value for each key(aka characters) of both charMap objects are the same
     for(let char in charMapA){
         if(charMapA[char] !== charMapB[char]){
             return false;
         }
     }
     return true;
}
module.exports = anagram;
console.log(anagram("mmayen", "Mmayen"));