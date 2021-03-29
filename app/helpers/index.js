export const ID = existingKeys => {
  const generatedKey = '_' + Math.random().toString(36).substr(2, 9);

  // Makes sure that the same key is not added more than once
  if (existingKeys.includes(generatedKey)) {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  return generatedKey;
};

export const toUpperCase = text => {
  const alphabetObj = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E',
    f: 'F',
    g: 'G',
    h: 'H',
    i: 'I',
    j: 'J',
    k: 'K',
    l: 'L',
    m: 'M',
    n: 'N',
    o: 'O',
    p: 'P',
    q: 'Q',
    r: 'R',
    s: 'S',
    t: 'T',
    u: 'U',
    v: 'V',
    w: 'W',
    x: 'X',
    y: 'Y',
    z: 'Z',
  };

  const letters = [];

  // Foreach every text letter
  [...text].forEach(char => {
    // Check if character is a letter
    if (char.length === 1 && char.match(/[a-z]/i)) {
      // Check if character exists in alphabetObj
      if (alphabetObj[char]) {
        // Push uppercase character that has been found in alphabetObj
        letters.push(alphabetObj[char]);
      } else {
        // If character is already uppercase
        letters.push(char);
      }
    } else {
      // Push all characters that are not letters
      letters.push(char);
    }
  });

  // Join all array letters
  return letters.join('');
};
