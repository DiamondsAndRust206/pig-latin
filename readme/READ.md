Spec: 1. return an empty string if given an empty string.
      2. it will add 'way' to the end of words that begin with a vowel.
      3. if word starts with a consonant it will move that letter to the end of the word and add an 'ay'.
      4. if word starts with multiple consonants it will move those letters to the end of the word and add an 'ay'.
      5. if word starts with a qu, move the q and the u to the end of the word and add 'ay'.
      6. if input is given non-letters like symbols, they should be ignored.
      7. must recongize word regardless of capitalization and return lowercase.

Describe: pigLatin()

Test: return an empty string if given an empty string.
Code: pigLatin("");
Expected Output: "";

Test: if input is given non-letters like symbols, they should be ignored.
Code: pigLatin("%!%!$#^2193`87469");
Expected Output: "";

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: if word starts with a consonant it will move that letter to the end of the word and add an 'ay'.
Code: pigLatin("test");
Expected Output: "esttay"

Test: must recongize word regardless of capitalization and return lowercase.
Code: pigLatin("CAPitALizatioN");
Expected Output: "apitalizationcay"

Test: if word starts with a qu, move the q and the u to the end of the word and add 'ay'.
Code: pigLatin("quest");
Expected Output: "estquay"

Test: if word starts with multiple consonants it will move those letters to the end of the word and add an 'ay'.
Code: pigLatin("chicken");
Expected Output: "ickenchay"