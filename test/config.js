module.exports = code => {
  module.require = name => arg => `name: ${name}\narg: ${arg}`;

  return eval(code.toString())();
};

