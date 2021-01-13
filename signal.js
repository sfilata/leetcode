const defer = function () {
  const deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  })
  return deferred;
}

const _state = Symbol('state');
const _checkers = Symbol('checkers');

class Signal {
  constructor(initState) {
    this[_state] = initState;
    this[_checkers] = new Map();
  }

  get state() {
    return this[_state];
  }

  set state(value) {
    [...this[_checkers]].forEach(([promise, {type, deferred, state}]) => {
      if (type === 'while' && value !== state || type === 'until' && value === state) {
        deferred.resolve(value);
        this[_checkers].delete(promise);
      }
    })
    this[_state] = value
  }

  until(state) {
    const deferred = defer();
    if (state === this[_state]) {
      deferred.resolve(this[_state])
    } else {
      this[_checkers].set(deferred.promise, { type: 'until', deferred, state})
    }
    return deferred.promise;
  }

  while(state) {
    const deferred = defer();
    if (state !== this[_state]) {
      deferred.resolve(this[_state])
    } else {
      this[_checkers].set(deferred.promise, { type: 'while', deferred, state})
    }
    return deferred.promise;
  }

  delete(promise) {
    this[_checkers].delete(promise);
  }

  deleteAll() {
    this[_checkers].clear();
  }
}

const lucky = new Signal(0);

const timerID = setInterval(() => {
  const num = Math.ceil(Math.random() * 10);
  console.log(num);
  lucky.state = num;
}, 1000);

async function addLuckyBoy(name, num) {
  await lucky.until(num);
  console.log(`${name} is lucky boy!`);
  clearInterval(timerID);
  lucky.deleteAll(); // 删除checkers中的所有promise对象
}

addLuckyBoy('张三', 3);
addLuckyBoy('李四', 5);
addLuckyBoy('王五', 7);