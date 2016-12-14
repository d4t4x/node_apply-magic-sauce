var filesystem = require('fs');
var Client = require('node-rest-client').Client;
var client = new Client();
// secrets format: { "customer_id": 1111, "api_key": "string", "token": "" }
var secrets = require('./secrets.json');

function getNewToken() {
    var getTokenArgs = {
        data: {
            "customer_id": secrets.customer_id,
            "api_key": secrets.api_key
        },
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };
    client.post("http://api-v2.applymagicsauce.com/auth", getTokenArgs, function(data, response) {
        console.log(data);
        console.log("This is our token: " + data.token);
        // now this token we should save in our secrets.json
    });
}

getNewToken();
