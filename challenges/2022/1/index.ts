import getInput from "../../../utils/getInput";

function getTotals(arr: string[]) {
  let count = 0;
  const chunks = arr.reduce((acc: Array<Array<string>>, i) => {
    if (!i) {
      count++;
    } else {
      acc[count] = acc[count] || [];
      acc[count].push(i);
    }
    return acc;
  }, []);
  return chunks.map((i) => i.reduce((a, b) => Number(a) + Number(b), 0));
}

const part1 = () => {
  const input = getInput("2022", "1");
  const arr = input.split("\n");
  const totals = getTotals(arr);
  const max = Math.max(...totals);
  return max;
};

const part2 = () => {
  const input = getInput("2022", "1");
  const arr = input.split("\n");
  const totals = getTotals(arr);
  return totals
    .sort((a, b) => Number(b) - Number(a))
    .slice(0, 3)
    .reduce((a, b) => Number(a) + Number(b), 0);
};

console.log(`Solution 1: ${part1()}`);
console.log(`Solution 2: ${part2()}`);
