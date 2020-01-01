const generator = {
  randomNumber: (range) => Math.floor(Math.random() * range),
  progression: (start, length, step = 1) => Array(length)
    .fill(start)
    .map((item, i, arr) => ((i === 0) ? item : arr[i - 1] + (step * i))),
};

export default generator;
