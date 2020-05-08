const https = require('https');

async function getCountryName(code) {
    for (let pageNum = 1; pageNum < 26; pageNum++) {
        let URL = `https://jsonmock.hackerrank.com/api/countries?page=${pageNum}`;
        const fetchURL = () => {
            https.get(URL, resp => {
                let data = '';
                resp.on('data', chunk => {
                    data += chunk;
                }) 
                resp.on('end', () => {
                    let parsedData = JSON.parse(data);
                    let dataArr = parsedData.data;
                    for(let i = 0; i < dataArr.length; i++) {
                        if(code === dataArr[i].alpha2Code) {
                            console.log(dataArr[i].name, pageNum)
                        }
                    }
                })
            }).on('error', (err) => {
                console.log("Error: " + err.message);
            })
        }
    fetchURL();
    }
}

getCountryName("ZW");