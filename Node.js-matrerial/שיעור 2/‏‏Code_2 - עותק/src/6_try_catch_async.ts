import { promises } from "fs";

async function readFileAsync(filePath: string): Promise<void> {
    try {
        const content = await promises.readFile(filePath, 'utf8');
        console.log("File content:", content);
        promises.writeFile("output.txt", content).catch(()=> console.log("fail to write"));
        console.log("finish func");
    } catch (err) {
        console.log("Failed reading file:", err);
    }
}
readFileAsync("src/file.txt");
console.log("finish");
//npx ts-node src/6_try_catch_async.ts