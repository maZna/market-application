export function splitIntoChunks(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < Math.ceil(array?.length / chunkSize); i++) {
    chunks.push(array.slice(i * chunkSize, (i + 1) * chunkSize));
  }
  return chunks;
}

export function parseTRPriceFormat(priceString) {
  return parseFloat(priceString.replace(/\./g, "").replace(/,/g, "."));
}
