module.exports = (data) =>
  new Promise((res) => setTimeout(() => res(data), 4000));
