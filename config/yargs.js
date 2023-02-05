import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const argv = yargs(hideBin(process.argv))
              .options({
                'b': {
                  alias: 'base',
                  demandOption: true,
                  default: 0,
                  describe: 'base is the dynamic factor',
                  type: 'number'
                },
                't': {
                  alias: 'to',
                  demandOption: true,
                  describe: 'to is the limit to multiply',
                  type: 'number'
                },
                'l': {
                  alias: 'list',
                  default: false,
                  describe: 'shows result table',
                  type: 'boolean'
                }
              })
              .check((argv) =>{
                if (isNaN(argv.b)) {
                  throw 'b (base) parameter not a number.';
                }

                return true;
              })
              .argv;