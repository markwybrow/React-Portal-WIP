export function truncate(str) {
  // get the first 10 words and return with elipses
  let strArr = str.slice(0, 75).split(' ');
  let summary = '';
  let truncated = strArr
    .map((word, index) => {
      if (index < 10 && word) {
        return word;
      }
    })
    .forEach(word => {
      if (word && word.length > 2) summary += `${word} `;
    });

  return `${summary}...`;
}
