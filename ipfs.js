const fetch = require('node-fetch')
const fs = require('fs')

const load = async () => {
  const robot = 'robot-1'
  const buffer = Buffer.from(await (await fetch(`https://robohash.org/${robot}.png`)).arrayBuffer())

  const outputFileName = `robot.png`
  fs.createWriteStream(outputFileName).write(buffer)
}

load()
