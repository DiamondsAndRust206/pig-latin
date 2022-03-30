function pigLatin (word) {
    let notAWord = false;
    word.split("").forEach(function(element) {
      if (element.toLowerCase() === element.toUpperCase()) {
        notAWord = true;
      }
    });
    if (notAWord) {
      return "";
    } else {
      const vowels = "aeiou";
      const firstLetter = word.charAt(0);

      if(vowels.includes(firstLetter)) {
        return word + "way";
      } else {
        return word;
      }
    }
}





/* 
  Test: "It will add 'way' to the end of words that begin with a vowel."
  Code: pigLatin("a");
  Expected Output: "away"
*/