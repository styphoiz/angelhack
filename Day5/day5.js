function decode(encoded, oldCodebook) {
  let codeLengths = {};

  for (const symbol in oldCodebook) {
    const code = oldCodebook[symbol];
    console.log(code);

    codeLengths[code] = code.length;
  }

  let decodedString = "";

  let currentCode = "";
  let codebook = {};
  for (a in oldCodebook) {
    codebook[oldCodebook[a]] = a;
  }
  console.log(codebook);
  for (let i = 0; i < encoded.length; i++) {
    currentCode += encoded[i];

    if (currentCode in codebook) {
      decodedString += codebook[currentCode];

      currentCode = "";
    } else if (currentCode in codeLengths) {
      continue;
    }
    // else {

    //   throw new Error("Invalid encoding Here");

    // }
  }
  console.log(decodedString);
  if (currentCode !== "") {
    throw new Error("Invalid encoding");
  }

  return decodedString;
}

const codebook = {
  a: "00",
  b: "01",
  c: "10",
  d: "1100",
  e: "1101",
  f: "1110",
  g: "111100",

  h: "111101",
  i: "111110",
  j: "1111110000",
  k: "1111110001",
  l: "1111110010",

  m: "1111110011",
  n: "1111110100",
  o: "1111110101",
  p: "1111110110",
  q: "1111110111",

  r: "1111111000",
  s: "1111111001",
  t: "1111111010",
  u: "1111111011",
  v: "1111111100",

  w: "1111111101",
  x: "1111111110",
  y: "1111111111",
  z: "11111111110000",

  " ": "11111111110001",
};

const encodedString =
  "11111011111111110001111111001011111101011111111100110111111111110001001111110100111100110111111100101111010010111111000111111111110001101111110101110011011111111111000110111101001111110010111111001011011111110100111100110111111111110001011101100011111110111111111001110111111111110001111110111111101011111111110001111110111111100111111111110001111011111110111111110100111111111100010011111101001100111111111100011101111111111010111110111111101011111011111101001111001111111111000100111111010011001111111111000111111011111111110001110011111011111110011111110010111110111111000111011111111111000111111110101111011101111111111100011111111101111111010111111110001100111111111100011111111111000111111111110001111111101011110100111111101011111111110001001111110110111111011011010011111110001111111001111111111100011111101111110100111111111100011111111010111101110111111111110001111111011011110111111110000011111110011101";

try {
  const decodedString = decode(encodedString, codebook);

  console.log(decodedString);
  function replaceString(longString, searchString, replacement) {
    let result = "";

    let index = 0;

    while (index < longString.length) {
      if (longString.substr(index, searchString.length) === searchString) {
        result += replacement;

        index += searchString.length;
      } else {
        result += longString[index];

        index++;
      }
    }

    return result;
  }

  const longString = decodedString;

  const searchString = "yab";

  const replacement = " ";

  const modifiedString = replaceString(longString, searchString, replacement);

  console.log(modifiedString);
} catch (error) {
  console.error(error.message);
}
