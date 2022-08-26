// PARSER FILE
const tryParseInt = (stringValue, defaultValue) => {
  if (!stringValue) return defaultValue;

  try {
    return parseInt(stringValue, 10);
  } catch (err) {
    return defaultValue;
  }
};

module.exports = tryParseInt;
