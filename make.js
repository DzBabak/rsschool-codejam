module.exports = function make(...prev) {
  function curry(...next) {
    if (typeof next[next.length - 1] === 'function') {
      const func = next[next.length - 1];

      const args = prev.concat(next).slice(0, -1);

      let res = args[0];
      for (let i = 1; i < args.length; i += 1) {
        res = func(res, args[i]);
      }

      return res;
    }
    return curry.bind(null, ...next);
  }
  return curry;
};
