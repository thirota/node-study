
//XXX
function createFizzBuzzEventEmitter(until) {
  //TODO why events not defined?
  const eventEmitter = new events.EventEmitter()
  _emitFizzBuzz(eventEmitter, until)
  return eventEmitter
}

async function _emitFizzBuzz(eventEmitter, until) {
  eventEmitter.emit("start")
  let count = 1
  while (count <= until) {
    await new Promise(resolve => setTimeout(resolve, 100))
    if (count % 15 === 0) {
      eventEmitter.emit("FizzBuzz", count)
    } else if (count % 3 === 0) {
      eventEmitter.emit("Fizz", count)
    } else if (count % 5 === 0) {
      eventEmitter.emit("Buzz", count)
    }
    count += 1
  }
  eventEmitter.emit("end")
}


//Listener
function startListener() {
  console.log("start")
}

function endListener() {
  console.log("end")
}

createFizzBuzzEventEmitter(40)
  .on("start", startListener)
  .on("end", endListener)



//EOF

