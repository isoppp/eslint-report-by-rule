const argv = process.argv
const cmd = argv[argv.length - 1]
const spawnSync = require('child_process').spawnSync

const cmdResult = spawnSync(cmd, { shell: true, maxBuffer: 10000 * 1024 })
const log = JSON.parse(cmdResult.stdout.toString())

const report = {}
log.forEach(item => {
  item.messages.forEach(message => {
    const ruleId = message.ruleId
    if (report[ruleId] == null) report[ruleId] = 0
    report[ruleId] += 1
  })
})

process.stdout.write(JSON.stringify(report, null, '\t'))
