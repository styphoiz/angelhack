function decode(encoded, codebook) {

  let codeLengths = {};

  for (const symbol in codebook) {

    const code = codebook[symbol];

    codeLengths[code] = code.length;

  }

  let decodedString = "";

  let currentCode = "";

  for (let i = 0; i < encoded.length; i++) {

    currentCode += encoded[i];

    if (currentCode in codebook) {

      decodedString += codebook[currentCode];

      currentCode = "";

    } else if (currentCode in codeLengths) {

      continue;

    } else {

      throw new Error("Invalid encoding");

    }

  }

  if (currentCode !== "") {

    throw new Error("Invalid encoding");

  }

  return decodedString;

}

const codebook = {

  'a': '00', 'b': '01', 'c': '10', 'd': '1100', 'e': '1101', 'f': '1110', 'g': '111100',

  'h': '111101', 'i': '111110', 'j': '1111110000', 'k': '1111110001', 'l': '1111110010',

  'm': '1111110011', 'n': '1111110100', 'o': '1111110101', 'p': '1111110110', 'q': '1111110111',

  'r': '1111111000', 's': '1111111001', 't': '1111111010', 'u': '1111111011', 'v': '1111111100',

  'w': '1111111101','x': '1111111110', 'y': '1111111111', 'z': '11111111110000',

  ' ': '11111111110001'

};

const encodedString = "1111101111111111000111111100101111110101111111110011011111111111000100111111010" +

                      "011110011011111110010111101001011111100011111";

try {

  const decodedString = decode(encodedString, codebook);

  console.log(decodedString);

} catch (error) {

  console.error(error.message);

}

