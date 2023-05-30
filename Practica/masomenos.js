function plusMinus(arr) {
  let n = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  let positiveratio = positive / n;
  let negativeratio = negative / n;
  let zeroratio = zero / n;

  console.log(positiveratio.toFixed(6));
  console.log(negativeratio.toFixed(6));
  console.log(zeroratio.toFixed(6));
}
