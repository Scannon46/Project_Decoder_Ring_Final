// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

function polybius(input, encode = true) {
     input = input.toLowerCase();
  if (encode === true) {
    let noSpaces = input.replace(" ", "");
      while (noSpaces.includes(" ")) {
        noSpaces = noSpaces.replace(" ", "");
      }
 let encodedString = ""
    let polybiusEncodingSquare = {
      "a": 11, "b": 21, "c": 31, "d": 41, "e": 51,
      "f": 12, "g": 22, "h": 32, "i/j": 42, "k": 52,
      "l": 13, "m": 23, "n": 33, "o": 43, "p": 53,
      "q": 14, "r": 24, "s": 34, "t": 44, "u": 54,
      "v": 15, "w": 25, "x": 35, "y": 45, "z": 55
    }
    for (let character of input) {
      if(character === "i" || character === "j") {
        encodedString = encodedString + polybiusEncodingSquare["i/j"];
      } else if(character === " ") {
        encodedString = encodedString + " ";
      } else {
        encodedString = encodedString + polybiusEncodingSquare[character];
      }
      //console.log(encodedString)
    }
  return encodedString
  }
  
    if(encode === false) {
      const inputLength = (input.split(" ").join("").length);
      if(inputLength % 2 === 1) {return false};
      //console.log(inputLength)
      let polybiusDecodingSquare = {
        11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
        12: "f", 22: "g", 32: "h", 42: "i/j", 52: "k",
        13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
        14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
        15: "v", 25: "w", 35: "x", 45: "y", 55: "z"
      }
      let encodedWords = input.split(" ");
      let decodedString = []
      for (let word of encodedWords) {
        let decodedWord = "";
        for (let i=1; i < word.length; i+=2) {
          if(word[i-1]+word[i] === "42") {
            decodedWord += "(i/j)";
          } else {
            decodedWord += polybiusDecodingSquare[word[i-1] + word[i]];
          }
        }
        console.log(decodedWord)
        decodedString.push(decodedWord);
        console.log(decodedString)
      }
      return decodedString.join(" ");
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
