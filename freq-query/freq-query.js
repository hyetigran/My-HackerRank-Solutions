function freqQuery(queries) {
  let stack = {};
  let output = [];
  let frequency = [];

  for (let i = 0; i < queries.length; i++) {
    const initialValue = stack[queries[i][1]] || 0;
    if (queries[i][0] === 1) {
      stack[queries[i][1]] = initialValue + 1;

      frequency[initialValue] = (frequency[initialValue] || 0) - 1;
      frequency[initialValue + 1] = (frequency[initialValue + 1] || 0) + 1;
    } else if (queries[i][0] === 2 && initialValue > 0) {
      stack[queries[i][1]] = initialValue - 1;
      frequency[initialValue] -= 1;
      frequency[initialValue - 1] += 1;
    } else if (queries[i][0] === 3) {
      output.push(frequency[queries[i][1]] > 0 ? 1 : 0);
    }
  }

  console.log("stack", stack);
  console.log("f", frequency);

  console.log(output);
  return output;
}
