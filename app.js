import { crearArchivo } from "./helpers/multiplicar.js";
import { argv } from "./config/yargs.js";

console.clear();

crearArchivo(argv.b, argv.t, argv.l)
  .then(message => console.log(message))
  .catch(err => console.log(err));