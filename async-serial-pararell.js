function asyncFunc() {
  return new Promise(resolve => setTimeout(resolve, 1000))
}

const start = perf_hooks.performance.now()

// serial exec
asyncFunc()
  .then(asyncFunc)
  .then(asyncFunc)
  .then(asyncFunc)
  .then(() =>
    console.log('serial', perf_hooks.performance.now() - start)
  )

// pararell
Promise.all([
  asyncFunc(),
  asyncFunc(),
  asyncFunc(),
  asyncFunc()
])
.then(() =>
  console.log('pararell', perf_hooks.performance.now() - start)
)
  
