export const getDataPayment = (keyQuery: string, stringOrigin: string) => {
  const indexOfKey = stringOrigin.indexOf(keyQuery);
  const tempStr = stringOrigin.slice(indexOfKey, indexOfKey + 70);
  return tempStr.slice(tempStr.indexOf('=') + 1, tempStr.indexOf('&'));
};
