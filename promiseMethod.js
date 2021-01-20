const promiseRaceSuccess = (urls) => new Promise((resolve, reject) => {
  const flagArr = [];
  urls.forEach((item) => Promise.resolve(item).then((res) => {
    flagArr.push(res);
    if (flagArr.length === urls.length) {
      resolve(flagArr);
    }
  }).catch(reject));
});

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success1');
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('fail2');
  }, 500);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success2');
  }, 1000);
});

promiseRaceSuccess([p1, p2, p3]).then((res) => { console.log(res); }).catch((err) => { console.log(err); });
