let testObj = {}

const defineResponsive = (obj, key, val) => {
  Object.defineProperty(obj, key, {
    get() {
      console.log(`Getting properties ${key}`)
    },

    set(newVal) {
      console.log(`Old value is ${val}, new value is ${newVal}`)
      if (newVal !== val) {
        val = newVal
      }
    }
  })
}

defineResponsive(testObj, 'name', 'sfilata')
testObj.name
testObj.name = 'neil'