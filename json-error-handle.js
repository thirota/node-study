// sync
function parseJsonSync(json) {
  try {
    return JSON.parse(json)
  } catch (err) {
    console.error("error desu", err)
  }
}

// async
// unexpected behavior
function parseJsonAsync(json, callback) {
  try {
    setTimeout(() => {
      callback(JSON.parse(json))
    }, 1000)
  } catch (err) {
    console.error("error desu", err)
    callback({})
  }
}

// async (fixed)
// expected behavior
function parseJsonAsync2(json, callback) {
  setTimeout(() => {
    try {
      callback(JSON.parse(json))
    } catch (err) {
      callback(err)
    }
  }, 1000)
}


//parseJsonSync("invalid json desuyo")

//parseJsonAsync("invalid json desuyo", result => console.log('parse result', result))

parseJsonAsync2("invalid json desuyo", result => console.log('parse result', result))
