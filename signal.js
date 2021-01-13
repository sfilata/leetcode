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
    [...this[_checkers]].forEach(({type, deferred, state}) => {
      if (type === 'while' && value !== state || type === 'until' && value === state) {
        deferred.resolve(value);
        this[_checkers].delete(promise);
      }
    })
  }
}