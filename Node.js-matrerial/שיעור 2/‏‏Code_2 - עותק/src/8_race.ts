import { setTimeout } from 'timers/promises';
import superagent from 'superagent'

async function timersRace() {
const url = `https://api.frankfurter.dev/v1/latest`;
const res = superagent.get(url).catch(err => console.log("URL finish"));
//const api = setTimeout(100);
const timeout = setTimeout(100000).then(() => console.log("timeout, please check later"));
await Promise.race([ timeout, res]);
console.log("after");
//clearTimeout(timeout);
}

timersRace();