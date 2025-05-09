import {promises} from 'fs';
import superagent, {Response} from 'superagent'

let to: string;
let amount: number;
promises.readFile('src/input.txt', 'utf8')
    .then((data: String) => {
        const input = data.split(" ");
        const from = input[0];
        to = input[1];
        amount = parseInt(input[2]);

        const url = `https://api.frankfurter.dev/v1/latest?from=${from}&to=${to}`;
        return superagent.get(url);
    }).catch((err: any) => {
        console.log("Fail to get the parameters use defult:", err);
        const url = `https://api.frankfurter.dev/v1/latest?from=USD&to=ILS`;       
        return superagent.get(url);
    }).then((res: Response) => {
        const currency = res.body.rates[to];
        const result = currency * amount;

        return promises.writeFile('output.txt', result.toString())
    }).then(() => {
        console.log("Output was written successfully!");
    }).catch((err: any) => {
        console.log("Error in one of the promises:", err);
    });
