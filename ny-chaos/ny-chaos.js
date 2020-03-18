a = [1, 2, 5, 3, 7, 8, 6, 4];
b = [2, 1, 5, 3, 4];

// function minimumBribes(q) {
//   let bribeCount = 0;
//   let min = q.length;

//   for (let i = q.length - 1; i >= 0; i--) {
//     if (q[i] - i > 3) {
//       return "Too chaotic";
//     }
//     if (q[i] > i + 1) {
//       bribeCount += q[i] - (i + 1);
//     } else {
//       if (min > q[i]) {
//         min = q[i];
//       } else if (q[i] != min) {
//         bribeCount++;
//       }
//     }
//   }
//   return bribeCount;
// }

// console.log(minimumBribes(a));

// bubble sort solution

function minimumBribes(q) {
  for (let i = 0; i < q.length; i++) {
    if (q[i] > i + 3) {
      console.log("Too chaotic");
      return;
    }
  }

  //bubble sort count

  let count = 0;
  let i = 0;
  while (i < q.length - 1) {
    console.log(q, i);
    if (q[i] > q[i + 1]) {
      console.log("inside if", i);
      let bigger = q[i];
      q[i] = q[i + 1];
      q[i + 1] = bigger;

      count++;
      i -= 2; //instead of starting from the beginning, go back 1 index
    }
    i++;
  }
  console.log("count", count);
}

console.log(minimumBribes(a));
