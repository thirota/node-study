function parseJsonAsync(json) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(JSON.parse(json))
            } catch (error) {
                reject(error)
            }
        }, 1000)
    })
}

async function asyncFunc(json) {
    try {
        const result = await parseJsonAsync(json)
        console.log('parse result', result)
    } catch (error) {
        console.log('catch error', error)
    }
}

//let s = '{"foo": 1, "bar": 2}'
let s = 'hogehoge'

// console.log("before")
// parseJsonAsync(s)
// console.log("after")

// console.log("before")
// parseJsonAsync(s).then((result)=> {
//     console.log("parse json success", result.bar)
// })
// console.log("after")

console.log("before")
asyncFunc(s)
console.log("after")

