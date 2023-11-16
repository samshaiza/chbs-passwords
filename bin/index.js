#! /usr/bin/env node
const chalk = require('chalk');
const { generate } = require('../bin/src/gen.js');

const error = chalk.bold.red;
const warning = chalk.yellow;

try {
   const usage =
   "\nUsage: chbs generates a password in the style of a Correct Horse Battery Staple password";

var argv = require('yargs/yargs')(process.argv.slice(2))
   .usage(usage)
   .default({mw: 4, wl: 'small', s: "-", tc: true, rn: true})
   .option("mw", {
      alias: "minwords",
      describe: "set the minimum amount of words.",
      type: "number",
      demandOption: false,
   })
   .option("wl", {
      alias: "wordlist",
      describe:
         "set the word list length (small: 4096, large: 8192)",
      type: "string",
      demandOption: false,
   })
   .option("s", {
      alias: "separator",
      describe: "separator used between letters.",
      type: "string",
      demandOption: false,
   })
   .option("tc", {
      alias: "titlecase",
      describe: "every word is title cased.",
      type: "boolean",
      demandOption: false,
   })
   .option("rn", {
      alias: "randomnumber",
      describe: "append a random number to the end.",
      type: "boolean",
      demandOption: false,
   })
   .help('h')
   .alias('h', 'help')
   .argv;
} catch (e) {
   console.error(error("Error", e.message));
}

let options = {
   count: argv.mw,
   list: argv.wl,
   capitalize: argv.tc,
   digit: argv.rn,
   symbol: true,
   separator: argv.s
};

console.log(warning(generate(options)))
console.log("\nCopy the password to your clipboard and press enter 'tput reset' to reset your terminal!")