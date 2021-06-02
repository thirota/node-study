function parseJsonSync(json) {
  try {
    return JSON.parse(json)
  } catch (err) {
    console.error("error desu", err)
  }
}

parseJsonSync("invalid json desuyo")


