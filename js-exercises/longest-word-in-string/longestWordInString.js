function longestWordInString(string) {
  var arrayOfWords=string.split(' ')
  var maxLength=0;
  var longestWord='';
  for (const word of arrayOfWords) {
    if(maxLength<word.length){
      maxLength=word.length;
      longestWord=word;
    }
  }
  return longestWord;
}

export { longestWordInString };
