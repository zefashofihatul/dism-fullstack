const isOnlyNumber = (value, option) => {
  const { args, msg } = option;
  if (!/^[0-9 ]+$/.test(value)) {
    throw new Error(msg);
  }
};

module.exports = isOnlyNumber;
