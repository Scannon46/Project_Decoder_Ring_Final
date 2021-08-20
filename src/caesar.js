// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar (input, shift, encode = true) {
   if (shift === 0)
        {return false}
   else if (shift > 25)
        {return false}
   else if (shift < -25)
        {return false}
   else if (!shift)
         {return false}
   
   if (encode === false)
         {shift = -shift}
         
   const arrayInput = input.toLowerCase().split('')
   let arrayNewChar = [];
   let finalShiftedArray = [];
    console.log (arrayInput)
    const arrayChar = [];
    for (let currentChar of arrayInput)
    arrayChar.push(currentChar.charCodeAt())
  
    /*arrayChar.map((character) => {
    const unicode = character.charCodeAt()})*/

  for (let currentNum of arrayChar) {
       if (currentNum > 96 && currentNum < 123) {
  let newCurrentNum = currentNum + shift;
       if (newCurrentNum < 97) {
            newCurrentNum = newCurrentNum + 26
    } else if (newCurrentNum > 122) {
            newCurrentNum = newCurrentNum - 26};
                arrayNewChar.push(newCurrentNum) ;
    } else { arrayNewChar.push(currentNum)} }
 for (let currentNewCode of arrayNewChar) {
           finalShiftedArray.push(String.fromCharCode(currentNewCode))}
    console.log(finalShiftedArray)
 return finalShiftedArray.join("")}
 return {caesar};
    })();
module.exports = {caesar: caesarModule.caesar};


/*let wrappedUnicode = arrayChar.map((unicode) => {
       if (unicode < 97) {
            return unicode + 26}
       if (unicode > 122) {
            return unicode - 26}
  })*/
