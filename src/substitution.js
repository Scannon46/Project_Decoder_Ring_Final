// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet , encode = true) {
    //check if there is an alphabet, if not return false
    if (!alphabet){
      return false
    }
    //create an array of the lowercase symbols for the given alphabet
    let lowerAlph = alphabet.toLowerCase().split('')
    //ensure given alphabet is 26 characters long, and that each character is unique
    if (lowerAlph.some((letter) => lowerAlph.filter((item) => item ===letter).length >1)|| alphabet.length !== 26){
      return false
    }
    //create an array of characters in the alphabet
    let letters = []
    for (let i =0; i<26;i++){
      letters.push(String.fromCharCode(97+i))
    }
    //encryption
    if (encode){
      //first ensure each character is either a space or a letter
      if(input.split(' ').every((word) => word.split('').every((letter) => letters.includes(letter.toLowerCase())))){
        //split the message into words
        return input.split(' ').map((word) => {
          //split each word into individual letters
          return word.split('').map((char) => {
            //map each letter from it's index in the standard alphabet to the character
            //with the same index in the given alphabet
            return lowerAlph[letters.indexOf(char.toLowerCase())]
          //join the characters for the specific cipher-word  
          }).join('')
        //join the cipher-words to return the ciphertext
        }).join(' ')
      }
      else {
        return false
      }
    }
    //decryption
    else {
      //first ensure each character is either a space or contained in the given alphabet
      if(input.split(' ').every((word) => word.split('').every((letter) => lowerAlph.includes(letter.toLowerCase())))){
        //split the ciphertext into cipher-words
        return input.split(' ').map((word) => {
          //split each cipher-word into individual characters
          return word.split('').map((char) => {
            //map each character from it's index in the given alphabet to the letter
            //with the same index in the standard alphabet
            return letters[lowerAlph.indexOf(char.toLowerCase())]
          //join the letters for the specific word  
          }).join('')
        //join the words to return the message
        }).join(' ')
      }
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
