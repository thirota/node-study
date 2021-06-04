function parseJSONAsync(json) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      try {
        resolve(JSON.parse(json))
      } catch (err) {
        reject(err)
      }
    }, 1000)
  })
}

const toBeFullfilled = parseJSONAsync('{"foo":1}')
const toBeRejected = parseJSONAsync('hogefuga')
console.log("***** Promise created *****")
console.log(toBeFullfilled)
console.log(toBeRejected)
setTimeout(() => {
  console.log("***** 1 second *****")
  console.log(toBeFullfilled)
  console.log(toBeRejected)
}, 1000)
