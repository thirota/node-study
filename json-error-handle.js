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
      callback(null, JSON.parse(json))
    } catch (err) {
      callback(err)
    }
  }, 1000)
}

//p.50

//parseJsonSync("invalid json desuyo")

//parseJsonAsync("invalid json desuyo", result => console.log('parse result', result))

//parseJsonAsync2("invalid json desuyo", (err, result) => console.log('parse result', err, result))
//parseJsonAsync2('{"key":"value"}', (err, result) => console.log('parse result', err, result))


//p.51 2.2.3 混ぜるな危険

// アンチパターン
// キャッシュにあるときとないときで、挙動に一貫性がない
// 常に同期・非同期どちらかでなければならない
const cache = {}
function parseJsonAsyncWithCache(json, callback) {
  const cached = cache[json]
  if (cached) {
    callback(cached.err, cached.result)
    return
  }
  parseJsonAsync2(json, (err, result) => {
    cache[json] = {err, result}
    callback(err, result)
  })
}

//1回目
parseJsonAsyncWithCache(
  '{"message":"hello", "to":"world"}',
  (err, result) => {
    console.log("1回目", err, result)
    //2回目
    parseJsonAsyncWithCache(
      '{"message":"hello", "to":"world"}',
      (err, result) => {
        console.log("2回目", err, result)
      }
    )
    console.log("2回目呼び出し完了")
  }
)
console.log("1回目呼び出し完了")

