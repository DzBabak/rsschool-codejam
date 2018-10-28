module.exports = function recursion(tree) {
  const arr = [];
  const index = 0;

  function recurs(t, i) {
    if (!t) return;

    if (!Array.isArray(arr[i])) arr[i] = [];
    arr[i].push(t.value);

    if (t.left) {
      recurs(t.left, i + 1);
    }
    if (t.right) {
      recurs(t.right, i + 1);
    }
  }

  recurs(tree, index);

  return arr;
};
