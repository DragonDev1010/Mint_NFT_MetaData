const pinataApiKey = "6decf5a9a1d6e7711af1";
const pinataSecretApiKey = "c68e88d611ddf0e0c558d67f04824b0031f586d99c93e1eff18916d9dc4a1e3f";
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const pinFileToIPFS = async () => {
    const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
    let data = new FormData();
    data.append("file", fs.createReadStream("./pathtoyourfile.png"));
    const res = await axios.post(url, data, {
        maxContentLength: "Infinity", 
        headers: {
            "Content-Type": 'multipart/form-data; boundary=${data._boundary}',
            "pinata_api_key": "pinataApiKey", 
            "pinata_secret_api_key": "pinataSecretApiKey",
        },
    });
    console.log(res.data);
};
pinFileToIPFS();