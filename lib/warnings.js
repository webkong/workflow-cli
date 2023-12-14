const chalk = require('chalk')

module.exports = {
  v2SuffixTemplatesDeprecated (template, name) {
    const initCommand = 'newapp init ' + template.replace('-1.0', '') + ' ' + name

    console.log(chalk.red('  This template is deprecated, as the original template now uses newapp 1.0 by default.'))
    console.log()
    console.log(chalk.yellow('  Please use this command instead: ') + chalk.green(initCommand))
    console.log()
  },
  v2BranchIsNowDefault (template, name) {
    const newapp1InitCommand = 'newapp init ' + template + '#1.0' + ' ' + name

    console.log(chalk.green('  This will install newapp 1.x version of the template.'))
    console.log()
    console.log(chalk.yellow('  For newapp 1.x use: ') + chalk.green(newapp1InitCommand))
    console.log()
  }
}
