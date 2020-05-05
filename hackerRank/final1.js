
const https = require('https');
async function getCountryName(code) {
    let pageNum = 1;
    let URL = `https://jsonmock.hackerrank.com/api/countries?page=${pageNum}`;
    https.get(URL, resp => {
        let data = '';

        resp.on('data', chunk => {
            data += chunk;
        }) 

        resp.on('end', () => {
            let parsedData = JSON.parse(data);

            console.log(parsedData.data[1].name);
        })
    }).on('error', (err) => {
        console.log("Error: " + err.message);
    })
}

getCountryName();