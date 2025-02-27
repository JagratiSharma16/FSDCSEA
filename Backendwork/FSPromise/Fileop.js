const fs = require('fs').promises;
const pd = fs.writeFile('student.pdf', "Promises has 3 states Accept, Reject and Pending states.");
// console.log(pd);
pd.then(() => {
    console.log("Data written successfully by promises!!!!");
})
    .catch((err) => {
        console.log("error while writing  in file" + err);
    })
    .finally(() => {
        console.log("Resources closed");
    })
async function readFilePromise() {
    try {
        const data = await fs.readFile('student.pdf', { encoding: 'utf-8' });
        console.log(data);
    }
    catch (err) {
        console.log("error while reading the data!!!");
    }
}
readFilePromise();
