const promiseRaceSuccess = (urls) => {
  return new Promise((resolve, reject) => {
    const flagArr = [];
    urls.forEach(item => Promise.resolve(item).then(res => {
      flagArr.push(res);
      if (flagArr.length === urls.length) {
        resolve(flagArr)
      }
    }).catch(reject))
  })
}

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success1')
  }, 2000)
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('fail2')
  }, 500)
})
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success2')
  }, 1000)
})

promiseRaceSuccess([p1, p2, p3]).then(res => { console.log(res) }).catch(err => {console.log(err)})