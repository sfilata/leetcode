const goods = [3000, 2000, 1500, 2000];
const weight = [4, 3, 1, 1];
const bagLimit = 4;

function bag(goods: number[], weight: number[], bagLimit: number): number {
  let dp: number[][] = Array.from(new Array(goods.length + 1), () =>
    new Array(bagLimit + 1).fill(0)
  );
  for (let i = 1; i <= goods.length; i++) {
    for (let j = 1; j <= bagLimit; j++) {
      if (j - weight[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        console.log(dp[i - 1][j - weight[i - 1]] + goods[i - 1], dp[i - 1][j]);
        dp[i][j] = Math.max(
          dp[i - 1][j - weight[i - 1]] + goods[i - 1],
          dp[i - 1][j]
        );
      }
    }
  }
  console.log(dp);
  return 0;
}

bag(goods, weight, bagLimit);
