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
      const firstLetter = word.charAt(0).toLowerCase();

      if(vowels.includes(firstLetter)) {
        return word + "way";
      } else if (firstLetter === "q") {
        let letters = word.split("");
        letters.push(letters.shift());
        letters.push(letters.shift());

        return letters.join("").toLowerCase() + "ay";
      } else {
        let letters = word.split("");
        let firstLetters = "";
        for (let i = 0; i < letters.length; i++) {
          if(!vowels.includes(letters[0])) {
            firstLetters += letters.shift();
          } else {
            break;
          }
        }

        return (letters.join("") + firstLetters + "ay").toLowerCase();
      }
    }
}