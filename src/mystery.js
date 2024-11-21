export const mystery3 = (string1, string2) => {
  if (!string1 && !string2) {
    return 0;
  };

  let total = 0;

  for (let i = 0, j = 0; i < string1.length && j < string2.length; i++, j++) {
    if (string1[i] !== string2[j]) {
      total += 1;
    }
  }

  return total;
};
