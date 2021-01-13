/**
 * Only allow the function run once
 * @param {[Function]} fun The function need to be changed 
 */
function once(fun) {
  return function(...args) {
    if (fun) {
      const ret = fun.apply(this, args);
      fun = null;
      return ret;
    }
  }
}

/**
 * Only run once in the specified time range.
 * @param {[Function]} fun The function need to be changed 
 * @param {[Number]} ms The time need to be throttle
 */
function throttle(fun, ms) {
  let throttleTimer = null;
  return function(...args) {
    if (!throttleTimer) {
      throttleTimer = setTimeout(function() {
        const ret = fun.apply(this, args);
        throttleTimer = null;
        return ret;
      }, ms)
    }
  }
}

/**
 * Only run the last time in the specified time range.
 * @param {[Function]} fun The function need to be changed 
 * @param {[Number]} ms The time need to be debounced
 */
function debounce(fun, ms) {
  let debounceTimer = null;
  return function(...args) {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(function() {
      const ret = fun.apply(this, args);
      return ret;
    }, ms)
  }
}

/**
 * 
 * @param {number} duration The time need to waiting.
 */
function wait(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  })
}

function retry(promise, times) {
  return new Promise((resolve, reject) => {
    while (times) {
      const usePromise = Promise.resolve(promise);
      usePromise.then(res => {
        console.log('Success');
        resolve(res)
      }).catch(e => {
        console.log('Failed');
        times--;
        reject(e)
      })
    }
  })
}

let failPromise = new Promise((resolve, reject) => {
  reject('Failed')
})
// failPromise.then(res => { console.log(res) }).catch(e => {console.log(e)})
const retryFunction = retry(failPromise);
retryFunction.then(res => {
  console.log('Success', res)
}).catch(e => {
  console.log("Error")
})

