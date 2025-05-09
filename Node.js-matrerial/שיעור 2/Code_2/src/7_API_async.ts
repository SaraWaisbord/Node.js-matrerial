import {promises} from 'fs';
import superagent from 'superagent'

async function apiWithFiles(): Promise<string> {
    try {
        const data = await promises.readFile('src/input.txt', 'utf8');
        const input = data.split(" ");
        const from = input[0];
        const to = input[1];
        const amount = parseInt(input[2]);
        console.log(data)

        const url = `https://api.frankfurter.dev/v1/latest?from=${from}&to=${to}`;
        const res = await superagent.get(url);
        
        const currency = res.body.rates[to];
        const result = currency * amount;

        await promises.writeFile('output.txt', result.toString())
        console.log("Output was written successfully!");
        return result.toString();
    } catch (err) {
        console.log("Error in one of the promises:", err);
        return "error"
    }
}

async function run()
{
    //console.log(await apiWithFiles());
    let num :number = 1;
    const P1= promises.writeFile('output1.txt', (num++).toString())
    const P2= promises.writeFile('output2.txt', (num++).toString())
    await promises.writeFile('output3.txt', (num++).toString())
    //promises.writeFile('output4.txt', (num++).toString())
    //promises.writeFile('output5.txt', (num++).toString())
 
    await Promise.all([P1, P2]);
    console.log("Finish to write all file");

}
console.log("after");
run();

 
