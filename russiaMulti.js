function multiple(m, n) {
  let sum = 0
  while(n > 1) {
    if (n % 2 === 1) {
      sum += m
    }
    m = m << 1
    n = Math.floor(n >> 1)
    console.log(m, n)
  }
  sum += m
  return sum
}

console.log(multiple(15,18))